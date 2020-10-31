import { gql } from "apollo-boost";

export const GetSensors = gql`
  query getSensors {
    az_sensors_Sensors {
      sensorId
      model
      manufacturer
      locationId
    }
  }
  `;