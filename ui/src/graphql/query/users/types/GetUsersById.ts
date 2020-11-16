/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetUsersById
// ====================================================

export interface GetUsersById_az_users_Users_Organisation {
  __typename: "az_users_Organisation";
  shortName: string | null;
  fullName: string;
  organisationId: number;
}

export interface GetUsersById_az_users_Users {
  __typename: "az_users_Users";
  email: string;
  fullName: string | null;
  phoneNumber: string | null;
  userRole: string | null;
  userId: number;
  /**
   * An object relationship
   */
  Organisation: GetUsersById_az_users_Users_Organisation | null;
}

export interface GetUsersById {
  /**
   * fetch data from the table: "az_users.Users"
   */
  az_users_Users: GetUsersById_az_users_Users[];
}

export interface GetUsersByIdVariables {
  userId?: number | null;
}
