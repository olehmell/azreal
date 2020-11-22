/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddOrganisation
// ====================================================

export interface AddOrganisation_insert_az_users_Organisation_one {
  __typename: "az_users_Organisation";
  organisationId: number;
}

export interface AddOrganisation {
  /**
   * insert a single row into the table: "az_users.Organisation"
   */
  insert_az_users_Organisation_one: AddOrganisation_insert_az_users_Organisation_one | null;
}

export interface AddOrganisationVariables {
  country?: string | null;
  documentId?: number | null;
  fullName?: string | null;
  organisationRole?: string | null;
  registryLink?: string | null;
  rntrc?: any | null;
  shortName?: string | null;
}
