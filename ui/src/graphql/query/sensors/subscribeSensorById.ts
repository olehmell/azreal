import { useSubscription } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { SubscribeSensorById, SubscribeSensorByIdVariables } from "./types/SubscribeSensorById";

export const SUBSCRIBE_SENSOR = gql`
  subscription SubscribeSensorById($id: Int) {
    az_sensors_Sensors(where: {sensorId: {_eq: $id} }) {
      sensorId
      model
      manufacturer
      locationId
      Location {
        address
        locationPoint
        airlyLink
      }
      SensorFactors {
        PollutionFactor {
          unit
          maxValues
          label
        }
      }
    }
  }
`

export const useSubscribeSensorById = (id: number) => useSubscription<SubscribeSensorById, SubscribeSensorByIdVariables>(SUBSCRIBE_SENSOR, { variables: { id }})