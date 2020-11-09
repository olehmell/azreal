/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsers
// ====================================================

export interface GetUsers_az_users_Users {
  __typename: "az_users_Users";
  actLink: string | null;
  email: string | null;
  fullName: string;
  organisationId: number | null;
  phoneNumber: string | null;
  userId: number;
  userRole: string | null;
}

export interface GetUsers {
  az_users_Users: GetUsers_az_users_Users[];
}
