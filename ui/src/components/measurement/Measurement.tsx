import { EuiSpacer, EuiDatePicker, EuiButton, EuiFormErrorText, EuiLoadingSpinner, EuiFlexGroup, EuiFlexItem, EuiSelect} from '@elastic/eui'
import React, { useCallback, useEffect, useState } from 'react'
import { useGetMeasurementLastDay } from 'src/graphql/query/measurement/getMeasurement'
import { GetMeasuremetLastDay_az_measurements_Measurements_aggregate_nodes as Measurements } from 'src/graphql/query/measurement/types/GetMeasuremetLastDay'
import { Loading } from '../utils/loading'
import { Page } from '../utils/Page'
import { ChartByParam } from './ChartByParams'
import moment from 'moment'
import { useGetMeasurementsBetweenDate } from 'src/graphql/query/measurement/getMeasurementBetweenDate'
import { GetMeasurementsBetweenDateVariables } from 'src/graphql/query/measurement/types/GetMeasurementsBetweenDate'
import { SensorsSelect } from './SensorsSelect'
import { Table } from '../utils/Table'
import { MeasurementMock } from './test_data'
import { getErrorMsg } from '../utils'
import { SelectorOptionType } from 'src/types'


type MeasurementTProps = {
  measurements: Measurements[],
  fileName?: string
}

const MeasurementTable = ({ measurements, fileName }: MeasurementTProps) => {

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
  dynamicColumnIds.forEach(id => dynamicColumn.push({
    field: id,
    name: id,
    truncateText: true,
    sortable: true
  }))

  const columns = [
    {
      field: 'timestamp',
      name: 'Час',
      sortable: true,
      truncateText: true,
      render: (date) => moment(date).format('lll')
    },
    ...dynamicColumn
  ]

  return <Table data={measurementData} columns={columns} fileName={fileName} />
}

const measurementSelectorOptions: SelectorOptionType[] = [
  {
    text: 'Година',
    value: 'hour'
  },
  {
    text: 'День',
    value: 'day'
  },
  {
    text: 'Тиждень',
    value: 'week'
  },
  {
    text: 'Місяць',
    value: 'month'
  },
  {
    text: 'Рік',
    value: 'year'
  }
]

type MeasurementSelectionType = {
  from: string,
  to: string,
  aggregation?: 'day' | 'week' | 'month' | 'year'
}

type MeasurementSelectorProps = {
  onChange: (measurements: Measurements[]) => void,
  sensorId?: number
}

const initSelectionData: MeasurementSelectionType = {
  from: moment().startOf('day').toISOString(),
  to: moment().toISOString()
}

export const MeasurementSelector = ({ onChange, sensorId: initialSensorId }: MeasurementSelectorProps) => {
  const [ fromData, setFromData ] = useState(initSelectionData.from)
  const [ toData, setToData ] = useState(initSelectionData.to)
  const [ aggregation, setAggregation ] = useState<string>()
  const [ sensorId, setSensorId ] = useState<number>(initialSensorId)
  const [ variables, setVariables ] = useState<GetMeasurementsBetweenDateVariables>()
  const { data, error, loading } = useGetMeasurementsBetweenDate(variables)

  useEffect(() => {
    if (loading || !data) return

    console.log('DATA', data)

    onChange(MeasurementMock.filter(x => x.sensorId == sensorId) as any)
  }, [ loading, data ])

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
  const [ measurements, setMeasurements ] = useState<Measurements[]>()

  return <>
    <EuiSpacer size='xl' />
    <MeasurementSelector onChange={(data) => setMeasurements(data)} sensorId={sensorId} />
    <EuiSpacer size='xl' />
    <MeasurementTable fileName={`Measurements-${sensorId}`} measurements={MeasurementMock as any} />
    <EuiSpacer size='xxl' />
    <ChartByParam chartData={MeasurementMock as any} />
  </>
}

export const MeasurementsForSensor = (props: MeasurementsForSensorProps) => <MeasurementsSection {...props} />

export default () => {
  return <Page title='Вибірка даних' >
    <MeasurementsSection />
  </Page>
}
