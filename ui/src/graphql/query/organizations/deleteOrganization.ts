import { gql } from "apollo-boost";

const DELETE_ORGANIZATION = gql`
  mutation DeleteOrganization($id: Int) {
    delete_az_users_Organisation(where: {organisationId: {_eq: $id}}) {
      affected_rows
    }
  }
`