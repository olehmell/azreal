import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { GetServiceLogBySensorId, GetServiceLogBySensorIdVariables } from './types/GetServiceLogBySensorId'

export const GET_SERVICE_LOG_BY_SENSOR_ID =gql`
  query GetServiceLogBySensorId($sensorId: Int! = 0) {
    az_sensors_ServiceLog(order_by: {timestamp: desc}, where: {sensorId: {_eq: $sensorId}}) {
      timestamp
      serviceType
      sensorId
      Location {
        address
        mapsLink
      }
      Document {
        fileIds
      }
      Photo {
        fileIds
      }
    }
  }
`

export const useGetServiceLogBySensorId = (sensorId: number) => useQuery<GetServiceLogBySensorId, GetServiceLogBySensorIdVariables>(GET_SERVICE_LOG_BY_SENSOR_ID, { variables: { sensorId } })