import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { Moment } from 'moment'
import { GetMeasurementsBySensorId, GetMeasurementsBySensorIdVariables } from './types/GetMeasurementsBySensorId'

export const GET_MEASUREMENT_BY_SENSOR_ID = gql`
  query GetMeasurementsBySensorId($sensorId: Int! = 0, $from: timestamp! = "", $to: timestamp! = "") {
    az_sensors_Sensors(where: {sensorId: {_eq: $sensorId}}) {
      SensorFactors {
        PollutionFactor {
          name
          unit
          maxValue
          MeasurementValues_aggregate(where: {timestamp: {_gte: $from, _lte: $to}, _and: {}}) {
            aggregate {
              avg {
                value
              }
            }
          }
        }
      }
    }
  }
`

export type CommonAggregationData = {
  sensorId: number,
  from: Moment,
  to: Moment
}

export const useGetMeasurementsBySensorId = (variables:CommonAggregationData) => useQuery<GetMeasurementsBySensorId, GetMeasurementsBySensorIdVariables>(GET_MEASUREMENT_BY_SENSOR_ID, { variables })