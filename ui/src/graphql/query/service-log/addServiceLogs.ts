import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { AddServiceLog, AddServiceLogVariables } from './types/AddServiceLog'

export const ADD_SERVICE_LOG = gql`
  mutation AddServiceLog($documentIds: _text! = "", $photoIds: _text! = "", $serviceType: az_sensors_e_service_type_enum!, $timestamp: timestamp! = "", $sensorId: Int! = 0, $locationId: Int! = 0) {
    insert_az_sensors_ServiceLog_one(object: {Document: {data: {fileIds: $documentIds, documentType: Service}}, Photo: {data: {fileIds: $photoIds}}, serviceType: $serviceType, timestamp: $timestamp, sensorId: $sensorId, locationId: $locationId}) {
      serviceType
      timestamp
    }
  }
`

export const useAddServiceLog = () => useMutation<AddServiceLog, AddServiceLogVariables>(ADD_SERVICE_LOG)