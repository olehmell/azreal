import { GetSensorsWithFactors } from './types/GetSensorsWithFactors';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

export const GET_SENSORS_WITH_FACTORS = gql`
    query GetSensorsWithFactors {
  az_sensors_Sensors_aggregate {
    nodes {
      SensorFactors {
        PollutionFactor {
          maxValues
          label
          unit
        }
      }
      sensorId
      model
      manufacturer
    }
  }
}`;

export const useGetSensors = () => useQuery<GetSensorsWithFactors>(GET_SENSORS_WITH_FACTORS)
