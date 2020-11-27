import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { AddSensors, AddSensorsVariables } from './types/AddSensors'

export const ADD_SENSORS_QUERY = gql`
  mutation addSensor($mapsLink: String = "", $locationPoint: point = "", $locationId: Int!, $elevation: float8 = "", $airlyLink: String = "", $address: String = "", $sensorId: Int!, $model: String = "", $manufacturer: String = "", $timestamp: timestamp!, $photoSeries: _bytea!) {
    insert_az_sensors_Locations_one(object: {mapsLink: $mapsLink, locationPoint: $locationPoint, locationId: $locationId, elevation: $elevation, airlyLink: $airlyLink, address: $address, documentId: 0}, on_conflict: {constraint: Locations_pkey, update_columns: [locationPoint, address, airlyLink, mapsLink, elevation, locationPoint]}) {
      locationId
    }
    insert_az_sensors_Sensors_one(object: {sensorId: $sensorId, model: $model, manufacturer: $manufacturer, locationId: $locationId, ServiceLogs: {data: {timestamp: $timestamp, serviceType: Planned, Photo: {data: {photoSeries: $photoSeries}}, Document: {data: {documentType: Service, documentBody: "xzcxzcxzcz"}}}}}, on_conflict: {constraint: Sensors_pkey, update_columns: [locationId, model, manufacturer]}) {
      sensorId
    }
  }
`

export const useAddSensor = () => useMutation<AddSensors, AddSensorsVariables>(ADD_SENSORS_QUERY)