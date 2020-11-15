/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUser
// ====================================================

export interface GetUser_az_users_Users {
  __typename: "az_users_Users";
  documentId: number;
  email: string;
  fullName: string | null;
  organisationId: number | null;
  phoneNumber: string | null;
  userId: number;
  userRole: string | null;
}

export interface GetUser {
  /**
   * fetch data from the table: "az_users.Users"
   */
  az_users_Users: GetUser_az_users_Users[];
}

export interface GetUserVariables {
  id?: number | null;
}
