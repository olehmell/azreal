/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUserById
// ====================================================

export interface GetUserById_az_users_Users_Organisation {
  __typename: "az_users_Organisation";
  shortName: string | null;
  fullName: string;
  organisationId: number;
}

export interface GetUserById_az_users_Users {
  __typename: "az_users_Users";
  email: string;
  fullName: string | null;
  phoneNumber: string | null;
  userRole: string | null;
  userId: number;
  documentId: number;
  /**
   * An object relationship
   */
  Organisation: GetUserById_az_users_Users_Organisation | null;
}

export interface GetUserById {
  /**
   * fetch data from the table: "az_users.Users"
   */
  az_users_Users: GetUserById_az_users_Users[];
}

export interface GetUserByIdVariables {
  userId?: number | null;
}
