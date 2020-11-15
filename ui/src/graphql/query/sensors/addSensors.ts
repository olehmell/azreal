import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AddSensors, AddSensorsVariables } from "./types/AddSensors";

export const ADD_SENSORS_QUERY = gql`
    mutation AddSensors($locationId: Int, $manufacturer: String, $model: String, $sensorId: Int, $locationPoint: point, $mapsLink: String, $elevation: float8, $airlyLink: String, $documentId: Int, $address: String) {
  insert_az_sensors_Sensors(
    objects: {manufacturer: $manufacturer, model: $model, sensorId: $sensorId, Location: {data: {locationId: $locationId, documentId: $documentId, address: $address, airlyLink: $airlyLink, elevation: $elevation, locationPoint: $locationPoint, mapsLink: $mapsLink}}}
  ) {
    returning {
      sensorId
    }
  }
}`;

export const useAddSensor = () => useMutation<AddSensors, AddSensorsVariables>(ADD_SENSORS_QUERY)