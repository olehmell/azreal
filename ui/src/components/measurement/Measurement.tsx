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
import { Loading } from '../utils/loading'
import { useGetFactors } from 'src/graphql/query/factors/getFactorsWithSensors'
import { calculateCAQI } from './utils'

export const measurementsSchema = yup.object().shape({
  sensorId: yup.number(),
  from: yup.date().required(),
  to: yup.date().required(),
  aggregation: yup.string().required()
})

type MeasurementTProps = {
  measurements: MeasurementType[]
  fileName?: string
}

const useGexMaxValues = () => {
  const { data, loading, error } = useGetFactors()
  
  const maxValues = {}

  data?.az_sensors_PollutionFactors_aggregate.nodes.forEach(({ maxValue, name }) => {
    maxValues[name] = maxValue
  })

  return { maxValues, loading, error }
}

const MeasurementTable = ({ measurements, fileName }: MeasurementTProps) => {
  if (!measurements.length) return null

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { maxValues, loading } = useGexMaxValues()

  if (loading) return <Loading />

  const dynamicColumnIds = new Set([ 'CAQI' ])

  const measurementData = measurements.map(({ timestamp, sensorId, values }) => {

    const measurementValue = {}
    const measurementsValues = []
    values.forEach(({ label, unit, name, value }) => {
      const key = `${label}(${unit})`
      measurementValue[key] = value?.toFixed(3)
      measurementsValues.push({ name, value })

      dynamicColumnIds.add(key)
    })

    return {
      timestamp,
      sensorId,
      ...measurementValue,
      CAQI: calculateCAQI(measurementsValues, maxValues)
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
  console.log('measurementData', measurementData, dynamicColumn)

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

  console.log('initialSensorId', initialSensorId)

  const { token } = useAuthObj()
  const [ loading, setLoading ] = useState(false)

  const from = watch('from')
  const to = watch('to')

  useEffect(() => {
    setValue('sensorId', initialSensorId)
  }, [ initialSensorId ])

  const onSubmit = async ({ sensorId = initialSensorId, aggregation }) => {
    setLoading(true)
    
    try {
      const variables = {
        to: to?.toISOString(),
        from: from?.toISOString(),
        sensorId,
        type: aggregation
      }
  
      const measurements = await getMeasurements(variables, token)

      onChange({ measurements, aggregationType: aggregation })
    } catch (err) {
      const message = err?.toString()

      errors.load = { message }

      console.error(message)
      onChange()
    }

    setLoading(false)  
  }

  const SubmitButton = useCallback(() =>
    <EuiButton disabled={loading} fill type="submit">
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
          <SubmitButton />
        </EuiFlexItem>
      </EuiFlexGroup>
      {loading && <Loading />}
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
