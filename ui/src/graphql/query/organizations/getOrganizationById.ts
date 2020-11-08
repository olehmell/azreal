import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { GetOrganization, GetOrganizationVariables } from "./types/GetOrganization";

const GET_ORGANIZATION_BY_ID = gql`
  query GetOrganization($id: Int) {
    az_users_Organisation(where: {organisationId: {_eq: $id}}) {
      shortName
      rntrc
      registryLink
      organisationRole
      organisationId
      fullName
      country
      actLink
    }
  }
`

export const useGetOrganizationById = (id: number) => useQuery<GetOrganization, GetOrganizationVariables>(GET_ORGANIZATION_BY_ID, { variables: { id }})