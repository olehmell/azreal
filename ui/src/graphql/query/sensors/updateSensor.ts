import { gql } from "apollo-boost";

const UPDATE_SENSOR_BY_ID = gql`
  mutation UpdateSensorById($locationId: Int, $manufacturer: String, $model: String, $id: Int) {
    update_az_sensors_Sensors(where: {sensorId: {_eq: $id}}, _set: {manufacturer: $manufacturer, model: $model, locationId: $locationId}) {
      returning {
        sensorId
      }
    }
  }
`