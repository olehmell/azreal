import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { UpdateUser, UpdateUserVariables } from "./types/UpdateUser";

const UPDATE_USER = gql`
  query UpdateUser($id: Int) {
    az_users_Users(where: {userId: {_eq: $id}}) {
      userRole
      phoneNumber
      organisationId
      fullName
      email
      documentId
    }
  }
`

export const useUpdateUser = (id: number) => useMutation<UpdateUser, UpdateUserVariables>(UPDATE_USER, { variables: { id }})
