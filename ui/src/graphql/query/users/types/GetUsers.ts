/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsers
// ====================================================

export interface GetUsers_az_users_Users {
  __typename: "az_users_Users";
  documentId: number;
  email: string;
  fullName: string | null;
  organisationId: number | null;
  phoneNumber: string | null;
  userId: number;
  userRole: string | null;
}

export interface GetUsers {
  /**
   * fetch data from the table: "az_users.Users"
   */
  az_users_Users: GetUsers_az_users_Users[];
}
