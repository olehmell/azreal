import { EuiDataGridColumn, EuiFlexGrid, EuiFlexItem } from "@elastic/eui"
import React from "react"
import { useGetSensors } from "src/graphql/query/sensors/getSensors"
import { GetSensors, GetSensors_az_sensors_Sensors as SensorsType } from "src/graphql/query/sensors/types/GetSensors"
import { DataGrid } from "../utils/DataGrid"
import { Loading } from "../utils/loading"
import { Page } from "../utils/Page"

type ViewSensorsProps = {
  sensors: SensorsType[]
}

const ViewSensors = ({ sensors }: ViewSensorsProps) => {
  const columns: EuiDataGridColumn[] = [{
    id: 'sensorId',
    display: 'ID датчика',
    initialWidth: 100
  },
  {
    id: 'model',
    display: 'Модель'
  },
  {
    id: 'manufacturer',
    display: 'Виробник'
  },
  {
    id: 'address',
    display: 'Розташування'
  }]

  const data = sensors.map(({ Location: { address, airlyLink }, sensorId, manufacturer, model }) => ({
    sensorId,
    manufacturer,
    model,
    address: <a href={airlyLink}>{address}</a>,
  }))

  return <DataGrid columns={columns} data={data} />
}

export const Sensors = () => {
  const { data, loading, error } = useGetSensors()

  if (error) return null

  if (loading) return <Loading />

  const sensors = data.az_sensors_Sensors

  return <Page
    title='Датчики'
  >
    <ViewSensors sensors={sensors} />
  </Page>
}

export default Sensors