import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { UpdateLocationById, UpdateLocationByIdVariables } from './types/UpdateLocationById'

const UPDATE_LOCATION_BY_ID = gql`
  mutation UpdateLocationById($id: Int, $documentId: Int, $address: String, $airlyLink: String, $elevation: float8 , $locationPoint: point , $mapsLink: String) {
    update_az_sensors_Locations(where: {locationId: {_eq: $id}}, _set: {mapsLink: $mapsLink, locationPoint: $locationPoint, elevation: $elevation, airlyLink: $airlyLink, address: $address, documentId: $documentId}) {
      returning {
        locationId
      }
    }
  }
`

export const useUpdateLocation = (id: number) => useMutation<UpdateLocationById, UpdateLocationByIdVariables>(UPDATE_LOCATION_BY_ID, { variables: { id }})