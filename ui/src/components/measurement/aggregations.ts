import axios from 'axios'
/* eslint-disable react-hooks/rules-of-hooks */
import { GetMeasurementsBySensorId_az_measurements_Measurements } from './../../graphql/query/measurement/types/GetMeasurementsBySensorId'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { CommonAggregationData, useGetMeasurementsBySensorId } from 'src/graphql/query/measurement/getMeasurementBySensorId'
import { az_sensors_e_measurement_unit_enum } from 'src/types/graphql-global-types'
import { graphqlUrl } from '../utils'
import { InnerMeasurement, MeasurementType, MeasurementsProps, AggregationType } from './types'
import { getAggregationTime } from './utils'

const parseMeasurementData = (measurements: InnerMeasurement[]): MeasurementType[] =>
  measurements.map(({ values, timestamp, ...other }) => ({
    timestamp: getAggregationTime(timestamp),
    ...other,
    values: values.map(({ PollutionFactor }) => {
      const { 
        label,
        maxValue,
        e_measurement_unit: { description },
        Measurements_aggregate:
        { aggregate:
          { avg:
            { value }
          }
        }
      } = PollutionFactor
      return { label, maxValue, unit: description, value: value.toFixed(3) }
    })
  }))

const createMeasuremntQuery = ({ sensorId, to, from }: CommonAggregationData) => ({
  'query': 'query GetMeasurementsBySensorId($from: timestamp, $to: timestamp, $sensorId: Int = 0) { az_measurements_Measurements(where: {sensorId: {_eq: $sensorId}, _and: {timestamp: {_gte: $from, _lte: $to}}}, distinct_on: factorName) { PollutionFactor { maxValue label Measurements_aggregate(where: {timestamp: {_gte: $from, _lte: $to}}) { aggregate { avg { value } } } e_measurement_unit { description } } sensorId timestamp } } ',
  'operationName': 'GetMeasurementsBySensorId',
  'variables': { sensorId, to, from }
})

const loadMeasuremntQuery = async ({ sensorId, to, from }: CommonAggregationData, token: string): Promise<InnerMeasurement | undefined> => {
  const { data, status } = await axios.post(
    graphqlUrl,
    createMeasuremntQuery({ sensorId, to, from }),
    { headers: {
      'x-hasura-admin-secret': token,
      'content-type': 'application/json'
    }}
  )

  if (status !== 200) return undefined
  
  const measurements = data?.data?.az_measurements_Measurements 

  return measurements?.length ? {
    sensorId,
    timestamp: to,
    values: measurements
  } : undefined
}

export const getMeasurements = async (variables: MeasurementsProps, token: string) => {
  if (!variables) return undefined

  const { sensorId, to: end, type, from: start } = variables

  let from = start
  const promises = []

  let isFinish = false

  while (!isFinish) {
    const to = moment(from).add(1, type).toISOString()

    if (to >= end) {
      isFinish = true
      break
    }

    promises.push(loadMeasuremntQuery({ sensorId, to, from }, token))

    from = to
  }

  const measurements = await Promise.all(promises)

  return parseMeasurementData(measurements.filter(x => !!x))
}

export const useGetMeasurements = (props: MeasurementsProps) => {
  const { sensorId = 0, from: start = moment().toISOString(), to: end = moment().toISOString(), type = 'days' } = props
  const measurements: InnerMeasurement[] = []
  const [ from, setFrom ] = useState(start)
  const to = moment(from).add(1, type).toISOString()
  const { data, loading, error } = useGetMeasurementsBySensorId({ sensorId, from, to })

  const isFinish = to >= end

  console.log('FROM', to >= end, to, end)

  useEffect(() => {
    if (!data) return 

    measurements.push({ timestamp: to, sensorId, values: data?.az_measurements_Measurements })

    if (!isFinish) {
      setFrom(to)
    }

  }, [ sensorId, measurements.length, data?.az_measurements_Measurements.length ])

  if (error) return { error, loading }

  if (!isFinish) return { loading: true }

  return {
    data: parseMeasurementData(measurements),
    loading,
    error
  }

}