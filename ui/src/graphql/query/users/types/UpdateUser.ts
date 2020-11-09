/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UpdateUser
// ====================================================

export interface UpdateUser_az_users_Users {
  __typename: "az_users_Users";
  userRole: string | null;
  phoneNumber: string | null;
  organisationId: number | null;
  fullName: string;
  email: string | null;
  actLink: string | null;
}

export interface UpdateUser {
  az_users_Users: UpdateUser_az_users_Users[];
}

export interface UpdateUserVariables {
  id?: number | null;
}
