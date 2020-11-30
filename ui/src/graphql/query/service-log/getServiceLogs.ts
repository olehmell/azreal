import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { GetServiceLogs, GetServiceLogsVariables } from './types/GetServiceLogs'

export const GET_SERVICE_LOGS =gql`
query GetServiceLogs($sensorId: Int, $from: timestamp, $to: timestamp) {
  az_sensors_ServiceLog(order_by: {timestamp: desc}, where: {sensorId: {_eq: $sensorId}, timestamp: {_gte: $from, _lte: $to}}) {
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

export const useGetServiceLogs = (variables: GetServiceLogsVariables) => useQuery<GetServiceLogs, GetServiceLogsVariables>(GET_SERVICE_LOGS, { variables })