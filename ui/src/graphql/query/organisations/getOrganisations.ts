import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { GetOrganisations } from './types/GetOrganisations'

const GET_ORGANISATIONS = gql`
  query GetOrganisations {
    az_users_Organisation {
      shortName
      rntrc
      registryLink
      organisationRole
      organisationId
      fullName
      country
      documentId
    }
  }
`

export const useGetOrganisations = () => useQuery<GetOrganisations>(GET_ORGANISATIONS)