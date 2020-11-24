import { EuiSelect, EuiSelectProps } from '@elastic/eui'
import React from 'react'
import { useGetSensors } from 'src/graphql/query/sensors/getSensors'
import { Loading } from '../utils/loading'

export const SensorsSelect = (props: EuiSelectProps) => {
  const { data, error, loading } = useGetSensors()

  if (loading) return <Loading />

  if (error) return null

  const options = data.az_sensors_Sensors
    .map(({ sensorId, Location: { address } }) => ({ value: sensorId, text: `${sensorId} | ${address}` }))

  return <EuiSelect
    style={{ maxWidth: 200 }}
    id="role-selector"
    options={options}
    {...props}
  />
}