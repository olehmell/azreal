import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { GetUser, GetUserVariables } from "./types/GetUser";

const GET_USER_BY_ID = gql`
  query GetUser($id: Int) {
    az_users_Users(where: {userId: {_eq: $id}}) {
      actLink
      email
      fullName
      organisationId
      phoneNumber
      userId
      userRole
    }
  }
`

export const useGetUsersById = (id: number) => useQuery<GetUser, GetUserVariables>(GET_USER_BY_ID, { variables: { id }})