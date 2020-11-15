import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AddOrganization, AddOrganizationVariables } from "./types/AddOrganization";

const ADD_ORGANIZATION = gql`
  mutation AddOrganization($fullName: String, $documentId: Int, $country: String, $organisationRole: String, $registryLink: String, $rntrc: bpchar, $shortName: String) {
    insert_az_users_Organisation(objects: {country: $country, documentId: $documentId, fullName: $fullName, organisationRole: $organisationRole, registryLink: $registryLink, rntrc: $rntrc, shortName: $shortName}) {
      returning {
        organisationId
      }
    }
  }
`

export const useAddOrganization = () => useMutation<AddOrganization, AddOrganizationVariables>(ADD_ORGANIZATION)