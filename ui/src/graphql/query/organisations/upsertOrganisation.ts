import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { UpsertOrganisation, UpsertOrganisationVariables } from './types/UpsertOrganisation'

const UPSERT_ORGANISATION = gql`
  mutation UpsertOrganisation($country: String, $documentId: Int, $fullName: String, $organisationRole: String, $registryLink: String, $rntrc: bpchar, $shortName: String, $organisationId: Int) {
    insert_az_users_Organisation_one(object: {shortName: $shortName, rntrc: $rntrc, registryLink: $registryLink, organisationRole: $organisationRole, fullName: $fullName, country: $country, documentId: $documentId, organisationId: $organisationId}, on_conflict: {constraint: Organisation_pkey, update_columns: [country, fullName, shortName, registryLink, organisationRole, rntrc, documentId]}) {
      organisationId
    }
  }
`

const ADD_ORGANISATION = gql`
  mutation AddOrganisation($country: String, $documentId: Int, $fullName: String, $organisationRole: String, $registryLink: String, $rntrc: bpchar, $shortName: String) {
    insert_az_users_Organisation_one(object: {shortName: $shortName, rntrc: $rntrc, registryLink: $registryLink, organisationRole: $organisationRole, fullName: $fullName, country: $country, documentId: $documentId}, on_conflict: {constraint: Organisation_pkey, update_columns: [country, fullName, shortName, registryLink, organisationRole, rntrc, documentId]}) {
      organisationId
    }
  }
`

export const useUpsetOrganisation = (id?: number) => useMutation<UpsertOrganisation, UpsertOrganisationVariables>(id ? UPSERT_ORGANISATION : ADD_ORGANISATION, { variables: { organisationId: id }})