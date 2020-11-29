import { EuiSpacer, EuiDatePicker, EuiButton, EuiFormErrorText, EuiLoadingSpinner, EuiFlexGroup, EuiFlexItem, EuiSelect, EuiDataGridColumn} from '@elastic/eui'
import React, { useCallback, useEffect, useState } from 'react'
import { Page } from '../utils/Page'
import { ChartByParam } from './ChartByParams'
import moment from 'moment'
import { Table } from '../utils/Table'
import { MeasurementMock } from './test_data'
import { getErrorMsg } from '../utils'
import { SelectorOptionType } from 'src/types'
import { AggregationType, MeasurementType, useGetMeasurements } from './aggregations'
import { GetMeasurementsBySensorIdVariables } from 'src/graphql/query/measurement/types/GetMeasurementsBySensorId'
import { SensorsSelect } from './SensorsSelect'
import { DataGrid } from '../utils/DataGrid'


type MeasurementTProps = {
  measurements: MeasurementType[]
  fileName?: string
}

const MeasurementTable = ({ measurements, fileName }: MeasurementTProps) => {
  if (!measurements.length) return null

  const dynamicColumnIds = new Set()

  const measurementData = measurements.map(({ timestamp, sensorId, values }) => {

    const measurementValue = {}

    values.forEach(({ name, value }) => {
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

  return <DataGrid data={measurementData} columns={columns} />
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

type MeasurementSelectionType = {
  from: string,
  to: string,
  aggregation?: AggregationType
}

type MeasurementSelectorProps = {
  onChange: (measurements: MeasurementType[]) => void,
  sensorId?: number
}

const initSelectionData: MeasurementSelectionType = {
  from: moment().startOf('day').toISOString(),
  to: moment().toISOString()
}

export const MeasurementSelector = ({ onChange, sensorId: initialSensorId }: MeasurementSelectorProps) => {
  const [ fromData, setFromData ] = useState(initSelectionData.from)
  const [ toData, setToData ] = useState(initSelectionData.to)
  const [ aggregation, setAggregation ] = useState<AggregationType>('hours')
  const [ sensorId, setSensorId ] = useState<number>(initialSensorId)
  const [ variables, setVariables ] = useState<GetMeasurementsBySensorIdVariables>()
  const { data, error, loading } = useGetMeasurements({ ...variables, type: aggregation })

  console.log('Meas', data, error, loading)

  useEffect(() => {
    if (loading || !data) return onChange([])

    console.log('DATA', data)

    onChange(data)
  }, [ loading, data.length ])

  const onChangeSelector = (onChange) =>
    (e) => onChange(e.target.value)

  const onChangeFromData = (from) => {
    console.log(from)
    setFromData(from)
  }

  const onChangeToData= (to) => {
    console.log(to)
    setToData(to)
  }

  const Loading = useCallback(() => loading
    ? <EuiLoadingSpinner size='l' />
    : <EuiButton fill onClick={() => setVariables({ to: toData, from: fromData, sensorId })}>
      Отримати
    </EuiButton>
  , [ loading ])

  console.error(error)

  return (
    <>
      <EuiFlexGroup justifyContent='spaceBetween' alignItems='center'>
        <EuiFlexItem>
          <EuiSelect
            placeholder="Оберіть розмір вибірки"
            options={measurementSelectorOptions}
            onChange={onChangeSelector(setAggregation)}
            value={aggregation}
          />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiDatePicker showTimeSelect selected={moment(fromData)} onChange={onChangeFromData} />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiDatePicker showTimeSelect selected={moment(toData)} onChange={onChangeToData} />
        </EuiFlexItem>

        {!initialSensorId && <EuiFlexItem>
          <SensorsSelect
            placeholder="Оберіть Id датчика"
            value={sensorId}
            onChange={onChangeSelector(setSensorId)} />
        </EuiFlexItem>}

        <EuiFlexItem>
          <Loading />
        </EuiFlexItem>

      </EuiFlexGroup>
      {error && <EuiFormErrorText>{getErrorMsg(error)}</EuiFormErrorText>}
    </>

  )
}

type MeasurementsForSensorProps = {
  sensorId: number
}

const MeasurementsSection = ({ sensorId }: Partial<MeasurementsForSensorProps>) => {
  const [ measurements, setMeasurements ] = useState<MeasurementType[]>([])

  return <>
    <EuiSpacer size='xl' />
    <MeasurementSelector onChange={(data) => setMeasurements(data)} sensorId={sensorId} />
    <EuiSpacer size='xl' />
    <MeasurementTable fileName={`Measurements-${sensorId}`} measurements={measurements} />
    <EuiSpacer size='xxl' />
    <ChartByParam chartData={measurements} />
  </>
}

export const MeasurementsForSensor = (props: MeasurementsForSensorProps) => <MeasurementsSection {...props} />

export default () => {
  return <Page title='Вибірка даних' >
    <MeasurementsSection />
  </Page>
}
