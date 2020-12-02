import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Moment } from 'moment'
import { GetMeasurementsBySensorId, GetMeasurementsBySensorIdVariables } from './types/GetMeasurementsBySensorId'

export const GET_MEASUREMENT_BY_SENSOR_ID = gql`
  query GetMeasurementsBySensorId($from: timestamp!, $to: timestamp!, $sensorId: Int! = 0) {
    az_measurements_Measurements(where: {sensorId: {_eq: $sensorId}, _and: {timestamp: {_gte: $from, _lte: $to}}}) {
      PollutionFactor {
        maxValue
        label
        unit
        Measurements_aggregate {
          aggregate {
            avg {
              value
            }
          }
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