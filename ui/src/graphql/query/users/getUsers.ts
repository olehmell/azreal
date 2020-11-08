import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { GetUsers } from "./types/GetUsers";

const GET_USERS = gql`
  query GetUsers {
    az_users_Users {
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

export const useGetUsers = () => useQuery<GetUsers>(GET_USERS)