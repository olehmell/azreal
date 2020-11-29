import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { GetServiceLogs } from './types/GetServiceLogs'

export const GET_SERVICE_LOGS = gql`
  query GetServiceLogs {
    az_sensors_ServiceLog(order_by: {timestamp: desc}) {
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

export const useGetServiceLogs = () => useQuery<GetServiceLogs>(GET_SERVICE_LOGS)
