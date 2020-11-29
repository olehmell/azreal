import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { UpsertOrganisation, UpsertOrganisationVariables } from './types/UpsertOrganisation'

const UPSERT_ORGANISATION = gql`
  mutation UpsertOrganisation($country: String, $fullName: String, $organisationRole: String, $shortName: String, $organisationId: Int, $fileIds: _text = "", $rntrc: String = "") {
    insert_az_users_Organisation_one(object: {shortName: $shortName, organisationRole: $organisationRole, fullName: $fullName, country: $country, organisationId: $organisationId, Document: {data: {documentType: Organisation, fileIds: $fileIds}}, rntrc: $rntrc}, on_conflict: {constraint: Organisation_pkey, update_columns: [country, fullName, shortName, organisationRole, rntrc]}) {
      organisationId
    }
  }
`

const ADD_ORGANISATION = gql`
  mutation AddOrganisation($country: String, $fullName: String, $organisationRole: String, $rntrc: String, $shortName: String, $fileIds: _text = "") {
    insert_az_users_Organisation_one(object: {shortName: $shortName, rntrc: $rntrc, organisationRole: $organisationRole, fullName: $fullName, country: $country, Document: {data: {fileIds: $fileIds}}}, on_conflict: {constraint: Organisation_pkey, update_columns: [country, fullName, shortName, organisationRole, rntrc]}) {
      organisationId
    }
  }
`

export const useUpsetOrganisation = (id?: number) => useMutation<UpsertOrganisation, UpsertOrganisationVariables>(id ? UPSERT_ORGANISATION : ADD_ORGANISATION, { variables: { organisationId: id }})