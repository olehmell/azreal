import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AddOrganization, AddOrganizationVariables } from "./types/AddOrganization";

const ADD_ORGANIZATION = gql`
  mutation AddOrganization($fullName: String, $organisationRole: String, $registryLink: String, $rntrc: bpchar = "", $shortName: String) {
    insert_az_users_Organisation(objects: {fullName: $fullName, country: "", actLink: "", organisationRole: $organisationRole, registryLink: $registryLink, shortName: $shortName, rntrc: $rntrc}) {
      returning {
        organisationId
      }
    }
  }
`

export const useAddOrganization = () => useMutation<AddOrganization, AddOrganizationVariables>(ADD_ORGANIZATION)