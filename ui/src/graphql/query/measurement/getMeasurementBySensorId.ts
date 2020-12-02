import { useQuery } from '@apollo/react-hooks'
import { gql, createOperation } from 'apollo-boost'
import { Moment } from 'moment'
import { GetMeasurementsBySensorId, GetMeasurementsBySensorIdVariables } from './types/GetMeasurementsBySensorId'

export const GET_MEASUREMENT_BY_SENSOR_ID = gql`
  query GetMeasurementsBySensorId($from: timestamp, $to: timestamp, $sensorId: Int = 0) {
    az_measurements_Measurements(where: {sensorId: {_eq: $sensorId}, _and: {timestamp: {_gte: $from, _lte: $to}}}, distinct_on: factorName) {
      PollutionFactor {
        maxValue
        label
        Measurements_aggregate(where: {timestamp: {_gte: $from, _lte: $to}}) {
          aggregate {
            avg {
              value
            }
          }
        }
        e_measurement_unit {
          description
        }
      }
      sensorId
      timestamp
    }
  }
`

export type CommonAggregationData = {
  sensorId: number,
  from: string,
  to: string
}

export const useGetMeasurementsBySensorId = (variables:CommonAggregationData) => useQuery<GetMeasurementsBySensorId, GetMeasurementsBySensorIdVariables>(GET_MEASUREMENT_BY_SENSOR_ID, { variables })