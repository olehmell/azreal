import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { GetOrganizations } from "./types/GetOrganizations";

const GET_ORGANIZATIONS = gql`
  query GetOrganizations {
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

export const useGetOrganizations = () => useQuery<GetOrganizations>(GET_ORGANIZATIONS)