import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { GetMeasurementsBySensorId, GetMeasurementsBySensorIdVariables } from './types/GetMeasurementsBySensorId'

export const GET_MEASUREMENT_BY_SENSOR_ID = gql`
  query GetMeasurementsBySensorId($sensorId: Int! = 0, $from: timestamp, $to: timestamp) {
    az_sensors_Sensors(where: {sensorId: {_eq: $sensorId}}) {
      SensorFactors {
        PollutionFactor {
          e_measurement_unit {
            description
          }
          maxValue
          label
          name
          Measurements_aggregate(where: {timestamp: {_lte: $to, _gte: $from}}) {
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
  from: string,
  to: string
}

export const useGetMeasurementsBySensorId = (variables:CommonAggregationData) => useQuery<GetMeasurementsBySensorId, GetMeasurementsBySensorIdVariables>(GET_MEASUREMENT_BY_SENSOR_ID, { variables })