import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { UpdateSensorById, UpdateSensorByIdVariables } from './types/UpdateSensorById'

const UPDATE_SENSOR_BY_ID = gql`
  mutation UpdateSensorById($mapsLink: String = "", $locationPoint: point = "", $elevation: float8 = "", $airlyLink: String = "", $address: String = "", $locationId: Int, $manufacturer: String, $model: String, $id: Int) {
    insert_az_sensors_Locations_one(object: {mapsLink: $mapsLink, locationPoint: $locationPoint, locationId: $locationId, elevation: $elevation, airlyLink: $airlyLink, address: $address}, on_conflict: {constraint: Locations_pkey, update_columns: [locationPoint, address, airlyLink, mapsLink, elevation, locationPoint]}) {
      locationId
    }
    update_az_sensors_Sensors(where: {sensorId: {_eq: $id}}, _set: {manufacturer: $manufacturer, model: $model, locationId: $locationId}) {
      returning {
        sensorId
      }
    }
  }
`
export const useUpdateSensorById = (id: number) => useMutation<UpdateSensorById, UpdateSensorByIdVariables>(UPDATE_SENSOR_BY_ID, { variables: { id }})