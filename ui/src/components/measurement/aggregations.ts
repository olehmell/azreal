import axios from 'axios'
/* eslint-disable react-hooks/rules-of-hooks */
import { GetMeasurementsBySensorId, GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors } from './../../graphql/query/measurement/types/GetMeasurementsBySensorId'
import moment from 'moment'
import { CommonAggregationData } from 'src/graphql/query/measurement/getMeasurementBySensorId'
import { graphqlUrl } from '../utils'
import { MeasurementType, MeasurementsProps, MeasurementValue } from './types'
import { getAggregationTime } from './utils'

const parseMeasurementData = (measurements: GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors[]): MeasurementValue[] =>
  measurements.map(({ PollutionFactor }) => {
    const { 
      label,
      maxValue,
      name,
      e_measurement_unit: { description },
      Measurements_aggregate:
        { aggregate:
          { avg:
            { value }
          }
        }
    } = PollutionFactor
    
    return value
      ? { label, maxValue, unit: description, name, value }
      : undefined
  })

const createMeasuremntQuery = ({ sensorId, to, from }: CommonAggregationData) => ({
  'query': 'query GetMeasurementsBySensorId($sensorId: Int! = 0, $from: timestamp, $to: timestamp) { az_sensors_Sensors(where: {sensorId: {_eq: $sensorId}}) { SensorFactors { PollutionFactor { e_measurement_unit { description } maxValue name label Measurements_aggregate(where: {timestamp: {_lte: $to, _gte: $from}}) { aggregate { avg { value } } } } } } }',
  'operationName': 'GetMeasurementsBySensorId',
  'variables': { sensorId, to, from }
})

type LoadMeasuremntQuery = {
  data?: GetMeasurementsBySensorId
}

const loadMeasuremntQuery = async ({ sensorId, to, from }: CommonAggregationData, token: string): Promise<MeasurementType | undefined> => {
  const { data, status } = await axios.post<LoadMeasuremntQuery>(
    graphqlUrl,
    createMeasuremntQuery({ sensorId, to, from }),
    { headers: {
      'x-hasura-admin-secret': token,
      'content-type': 'application/json'
    }}
  )

  if (status !== 200) return undefined

  const measurements = parseMeasurementData(data?.data?.az_sensors_Sensors[0].SensorFactors).filter(x => !!x)

  return measurements?.length ? {
    sensorId,
    timestamp: getAggregationTime(to),
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

    promises.push(loadMeasuremntQuery({ sensorId, to, from }, token))

    if (to >= end) {
      isFinish = true
      break
    }

    from = to
  }

  const measurements = await Promise.all(promises)
  return measurements.filter(x => !!x)
}