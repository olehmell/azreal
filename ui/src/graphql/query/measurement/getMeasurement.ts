import { useQuery } from '@apollo/react-hooks';
import { gql } from "apollo-boost";
import { GetMeasuremetLastDay } from './types/GetMeasuremetLastDay';

export const GET_MEASUREMENT_LAST_DAY = gql`
  query GetMeasuremetLastDay {
    az_measurements_Measurements_aggregate(limit: 48) {
      nodes {
        timestamp
        values
        sensorId
        locationId
      }
    }
  }`

export const useGetMeasurementLastDay = () => useQuery<GetMeasuremetLastDay>(GET_MEASUREMENT_LAST_DAY)