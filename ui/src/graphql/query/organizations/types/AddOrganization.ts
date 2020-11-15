/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddOrganization
// ====================================================

export interface AddOrganization_insert_az_users_Organisation_returning {
  __typename: "az_users_Organisation";
  organisationId: number;
}

export interface AddOrganization_insert_az_users_Organisation {
  __typename: "az_users_Organisation_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: AddOrganization_insert_az_users_Organisation_returning[];
}

export interface AddOrganization {
  /**
   * insert data into the table: "az_users.Organisation"
   */
  insert_az_users_Organisation: AddOrganization_insert_az_users_Organisation | null;
}

export interface AddOrganizationVariables {
  fullName?: string | null;
  documentId?: number | null;
  country?: string | null;
  organisationRole?: string | null;
  registryLink?: string | null;
  rntrc?: any | null;
  shortName?: string | null;
}
