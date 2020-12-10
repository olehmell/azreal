import { EuiDataGridColumn } from '@elastic/eui'
import React from 'react'
import { useGetFactors } from 'src/graphql/query/factors/getFactorsWithSensors'
import { DataGrid } from '../utils/DataGrid'
import { Loading } from '../utils/loading'
import { Page } from '../utils/Page'

type Column = {
  label: string,
  unit: string,
  amount: number
}

const Factors = () => {
  const { data, loading, error } = useGetFactors()

  const columns: EuiDataGridColumn[] = [ {
    id: 'label',
    display: 'Назва фактору',
    displayAsText: 'Назва фактору'
  },
  {
    id: 'unit',
    display: 'Одиниці',
    displayAsText: 'Одиниці'
  },
  {
    id: 'maxValue',
    display: 'ГДК',
    displayAsText: 'ГДК'
  },
  {
    id: 'amount',
    display: 'Кількість датчиків',
    displayAsText: 'Кількість датчиків'
  }
  ]

  const sensorsData: Column[] = data?.az_sensors_PollutionFactors_aggregate.nodes
    .map(({ label, e_measurement_unit: { description }, maxValue, SensorFactors }) => ({
      label,
      unit: description,
      maxValue,
      amount: SensorFactors.length
    }))

  if (error) return null

  if (loading) return <Loading />

  return <Page title='Вимірювальні фактори'>
    <DataGrid data={sensorsData} columns={columns} />
  </Page>
}

export default Factors