import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { UpdateOrganization, UpdateOrganizationVariables } from "./types/UpdateOrganization";

const UPDATE_ORGANIZATION = gql`
  mutation UpdateOrganization($shortName: String = "", $rntrc: bpchar = "", $registryLink: String = "", $organisationRole: String = "", $fullName: String = "", $country: String = "", $actLink: String = "", $id: Int = 10) {
    update_az_users_Organisation(where: {organisationId: {_eq: $id}}, _set: {actLink: $actLink, country: $country, fullName: $fullName, organisationRole: $organisationRole, rntrc: $rntrc, registryLink: $registryLink, shortName: $shortName}) {
      returning {
        organisationId
      }
    }
  }
`
export const useUpdateOrganization = (id: number) => useMutation<UpdateOrganization, UpdateOrganizationVariables>(UPDATE_ORGANIZATION, { variables: { id }})