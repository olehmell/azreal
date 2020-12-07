import { EuiSpacer, EuiDatePicker, EuiButton, EuiFormErrorText, EuiLoadingSpinner, EuiFlexGroup, EuiFlexItem, EuiSelect, EuiDataGridColumn, EuiForm, EuiFormRow} from '@elastic/eui'
import React, { useCallback, useEffect, useState } from 'react'
import { Page } from '../utils/Page'
import { ChartByParam } from './ChartByParams'
import moment from 'moment'
import { aggregationLimit, fillInitValues, findErrors, getErrorMsg } from '../utils'
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
import { useNotification } from '../utils/Notifications'
import { DataPicker, getDateRangeString } from '../utils/DataPicker'
import { DayRange } from 'react-modern-calendar-datepicker'

export const measurementsSchema = yup.object().shape({
  sensorId: yup.number(),
  dayRange: yup.object().required(),
  aggregation: yup.string().required()
})

type MeasurementTProps = {
  measurements: MeasurementType[]
  fileName?: string
}

const MeasurementTable = ({ measurements, fileName }: MeasurementTProps) => {
  if (!measurements.length) return null

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
      CAQI: calculateCAQI(measurementsValues)
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

  const { addToast } = useNotification()

  const { token } = useAuthObj()
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    setValue('sensorId', initialSensorId)
  }, [ initialSensorId ])

  const onSubmit = async ({ sensorId = initialSensorId, aggregation, dayRange }) => {
    setLoading(true)
    try {
      const variables = {
        ...getDateRangeString(dayRange),
        sensorId,
        type: aggregation
      }
  
      const { measurements, lagreLimit } = await getMeasurements(variables, token)

      if (lagreLimit) {
        addToast({
          title: 'Ліміт агрегацій перевищено!',
          color: 'warning',
          text: `Ви отримали лише ${aggregationLimit} перших вимірів. Щоб отримати більше даних підвищіть рівень агрегації.`
        })
      }

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
            name="dayRange"
            control={control}
            render={({ onChange, value}) =>
              <DataPicker value={value} onChange={onChange} />
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
