import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { GetMeasurementsBetweenDate, GetMeasurementsBetweenDateVariables } from './types/GetMeasurementsBetweenDate'

const GET_BETWEEN_DATE = gql`
  query GetMeasurementsBetweenDate($from: timestamp = "2018-08-28T07:00:00", $to: timestamp = "2019-08-28T07:00:00", $sensorId: Int) {
    az_measurements_Measurements(where: {timestamp: {_gte: $from}, _and: {timestamp: {_lte: $to}, _and: {sensorId: {_eq: $sensorId}}}}, order_by: {timestamp: asc}) {
      values
      timestamp
      sensorId
    }
  }
`

export const useGetMeasurementsBetweenDate = (variables: GetMeasurementsBetweenDateVariables) =>
  useQuery<GetMeasurementsBetweenDate, GetMeasurementsBetweenDateVariables>(GET_BETWEEN_DATE, { variables })