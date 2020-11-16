import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { UpsetUser, UpsetUserVariables } from "./types/UpsetUser";

export const UPSET_USER = gql`
  mutation AddUser($userRole: String = "user", $phoneNumber: String, $organisationId: Int, $fullName: String, $email: String, $documentId: Int, $password: String) {
    insert_az_users_Users(objects: {documentId: $documentId, email: $email, fullName: $fullName, organisationId: $organisationId, phoneNumber: $phoneNumber, userRole: $userRole, AuthDatum: {data: {password: $password}}}) {
      returning {
        userId
      }
    }
  }
`

const ADD_USER = gql`
  mutation UpsetUser($userRole: String = "user", $phoneNumber: String, $fullName: String, $email: String, $documentId: Int, $userId: Int, $organisationId: Int) {
    insert_az_users_Users(objects: {documentId: $documentId, email: $email, fullName: $fullName, phoneNumber: $phoneNumber, userRole: $userRole, organisationId: $organisationId, userId: $userId}, on_conflict: {constraint: Users_pkey, update_columns: [documentId, email, userRole, phoneNumber, fullName, organisationId], where: {userId: {_is_null: false}}}) {
      returning {
        userId
      }
    }
  }
`

export const useUpsetUser = (id?: number) => useMutation<UpsetUser, UpsetUserVariables>(id ? UPSET_USER : ADD_USER, { variables: { userId: id }})
