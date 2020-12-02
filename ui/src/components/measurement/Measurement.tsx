import { EuiSpacer, EuiDatePicker, EuiButton, EuiFormErrorText, EuiLoadingSpinner, EuiFlexGroup, EuiFlexItem, EuiSelect, EuiDataGridColumn, EuiForm, EuiFormRow} from '@elastic/eui'
import React, { useCallback, useEffect, useState } from 'react'
import { Page } from '../utils/Page'
import { ChartByParam } from './ChartByParams'
import moment from 'moment'
import { Table } from '../utils/Table'
import { MeasurementMock } from './test_data'
import { fillInitValues, findErrors, getErrorMsg } from '../utils'
import { SelectorOptionType } from 'src/types'
import { SensorsSelect } from './SensorsSelect'
import { DataGrid } from '../utils/DataGrid'
import * as yup from 'yup'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAuthObj } from '../auth/AuthContext'
import { AggregationType, MeasurementsData, MeasurementType } from './types'
import { getMeasurements } from './aggregations'

export const measurementsSchema = yup.object().shape({
  sensorId: yup.number().required(),
  from: yup.date().required(),
  to: yup.date().required(),
  aggregation: yup.string().required()
})

type MeasurementTProps = {
  measurements: MeasurementType[]
  fileName?: string
}

const MeasurementTable = ({ measurements, fileName }: MeasurementTProps) => {
  if (!measurements.length) return null

  const dynamicColumnIds = new Set()

  const measurementData = measurements.map(({ timestamp, sensorId, values }) => {

    const measurementValue = {}

    values.forEach(({ label, unit, value }) => {
      const name = `${label}(${unit})`
      measurementValue[name] = value

      dynamicColumnIds.add(name)
    })

    return {
      timestamp,
      sensorId,
      ...measurementValue
    }
  })

  const dynamicColumn = []
  dynamicColumnIds.forEach(id => dynamicColumn.push({ id }))

  const columns: EuiDataGridColumn[] = [
    {
      id: 'timestamp',
      display: 'Дата'
    },
    ...dynamicColumn
  ]

  return <DataGrid data={measurementData} columns={columns} exportFileName={fileName} />
}

const measurementSelectorOptions: SelectorOptionType[] = [
  {
    text: 'Година',
    value: 'hours'
  },
  {
    text: 'День',
    value: 'days'
  },
  {
    text: 'Тиждень',
    value: 'weeks'
  },
  {
    text: 'Місяць',
    value: 'months'
  },
  {
    text: 'Рік',
    value: 'years'
  }
]

type MeasurementSelectorProps = {
  onChange: (data?: MeasurementsData) => void,
  sensorId?: number
}

export const MeasurementSelector = ({ onChange, sensorId: initialSensorId }: MeasurementSelectorProps) => {
  const { register, handleSubmit, setValue, errors, control, watch } = useForm({
    resolver: yupResolver(measurementsSchema)
  })

  const { token } = useAuthObj()
  const [ loading, setLoading ] = useState(false)

  console.log('errors', errors)

  const from = watch('from')
  const to = watch('to')

  useEffect(() => {
    fillInitValues({ sensorId: initialSensorId }, setValue)
  }, [])

  const onSubmit = async ({ sensorId, aggregation }) => {
    setLoading(true)
    
    try {
      console.log('sensorId, aggregation', sensorId, aggregation)
      const variables = {
        to: to?.toISOString(),
        from: from?.toISOString(),
        sensorId,
        type: aggregation
      }
  
      const measurements = await getMeasurements(variables, token)

      console.log('measurements', measurements)
  
      onChange({ measurements, aggregationType: aggregation })
    } catch (err) {
      errors.load.message = err.toString()
      onChange()
    }

    setLoading(false)  
  }

  const Loading = useCallback(() => loading
    ? <EuiLoadingSpinner size='l' />
    : <EuiButton fill type="submit">
      Отримати
    </EuiButton>
  , [ loading ])

  return (
    <EuiForm component="form" onSubmit={handleSubmit(onSubmit)}>

      <EuiFlexGroup justifyContent='spaceBetween' alignItems='center' >
        <EuiFlexItem>
          <EuiSelect
            style={{ maxWidth: 200 }}
            name='aggregation'
            placeholder="Оберіть розмір вибірки"
            defaultValue={undefined}
            options={measurementSelectorOptions}
            inputRef={register}
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <Controller
            name="from"
            control={control}
            render={({ onChange, value}) =>
              <EuiDatePicker showTimeSelect selected={value ? moment(value) : undefined} onChange={onChange} fullWidth />
            } // props contains: onChange, onBlur and value
          />
        </EuiFlexItem>
        <EuiFlexItem>
          <Controller
            name="to"
            control={control}
            render={({ onChange, value}) =>
              <EuiDatePicker showTimeSelect selected={value ? moment(value) : undefined} onChange={onChange} fullWidth />
            } // props contains: onChange, onBlur and value
          />
        </EuiFlexItem>
        {!initialSensorId && <EuiFlexItem>
          <SensorsSelect
            name='sensorId'
            inputRef={register}
            placeholder='Id сенсора'
            defaultValue={undefined}
            fullWidth
            required
          />
        </EuiFlexItem>}
        <EuiFlexItem>
          <Loading />
        </EuiFlexItem>
      </EuiFlexGroup>

      {findErrors(errors).map((err, i) => <EuiFormErrorText key={`error-${i}`}>{getErrorMsg(err)}</EuiFormErrorText>)}
    </EuiForm>

  )
}

type MeasurementsForSensorProps = {
  sensorId: number
}

const MeasurementsSection = ({ sensorId }: Partial<MeasurementsForSensorProps>) => {
  const [ measurements, setMeasurements ] = useState<MeasurementType[]>([])
  const [ aggregationType, setAggregationType ] = useState<AggregationType>()
  return <>
    <EuiSpacer size='xl' />
    <MeasurementSelector
      onChange={({ measurements = [], aggregationType }) => { 
        setMeasurements(measurements)
        setAggregationType(aggregationType)
      }}
      sensorId={sensorId} />
    <EuiSpacer size='xl' />
    <MeasurementTable fileName={`${aggregationType}-measurements`} measurements={measurements} />
    <ChartByParam measurements={measurements} aggregationType={aggregationType} />
  </>
}

export const MeasurementsForSensor = (props: MeasurementsForSensorProps) => <MeasurementsSection {...props} />

export default () => {
  return <Page title='Вибірка даних' >
    <MeasurementsSection />
  </Page>
}
