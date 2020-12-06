/* eslint-disable react-hooks/rules-of-hooks */
import { GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors } from './../../graphql/query/measurement/types/GetMeasurementsBySensorId'
import moment from 'moment'
import { CommonAggregationData, GetMeasuremensFn } from 'src/graphql/query/measurement/getMeasurementBySensorId'
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

const loadMeasuremntQuery = async (variables: CommonAggregationData, query: GetMeasuremensFn): Promise<MeasurementType | undefined> => {
  const { data, errors } = await query(variables)

  if (errors) throw errors

  const { to, sensorId } = variables
  const measurements = parseMeasurementData(data?.az_sensors_Sensors[0].SensorFactors).filter(x => !!x)

  return measurements?.length ? {
    sensorId,
    timestamp: getAggregationTime(to),
    values: measurements
  } : undefined
}

export const getMeasurements = async (variables: MeasurementsProps, query: GetMeasuremensFn) => {
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

    promises.push(loadMeasuremntQuery({ sensorId, to, from }, query))

    from = to
  }

  const measurements = await Promise.all(promises)
  return measurements.filter(x => !!x)
}