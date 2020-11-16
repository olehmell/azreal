/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddUser
// ====================================================

export interface AddUser_insert_az_users_Users_returning {
  __typename: "az_users_Users";
  userId: number;
}

export interface AddUser_insert_az_users_Users {
  __typename: "az_users_Users_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: AddUser_insert_az_users_Users_returning[];
}

export interface AddUser {
  /**
   * insert data into the table: "az_users.Users"
   */
  insert_az_users_Users: AddUser_insert_az_users_Users | null;
}

export interface AddUserVariables {
  userRole?: string | null;
  phoneNumber?: string | null;
  organisationId?: number | null;
  fullName?: string | null;
  email?: string | null;
  documentId?: number | null;
  password?: string | null;
}
