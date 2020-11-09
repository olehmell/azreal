import { gql } from "apollo-boost";

const DELETE_ORGANIZATION = gql`
  mutation DeleteOrganization($fullName: String, $organisationRole: String, $registryLink: String, $rntrc: bpchar = "", $shortName: String) {
    insert_az_users_Organisation(objects: {fullName: $fullName, country: "", actLink: "", organisationRole: $organisationRole, registryLink: $registryLink, shortName: $shortName, rntrc: $rntrc}) {
      returning {
        organisationId
      }
    }
  }
`