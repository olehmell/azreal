/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpsertOrganisation
// ====================================================

export interface UpsertOrganisation_insert_az_users_Organisation_one {
  __typename: "az_users_Organisation";
  organisationId: number;
}

export interface UpsertOrganisation {
  insert_az_users_Organisation_one: UpsertOrganisation_insert_az_users_Organisation_one | null;
}

export interface UpsertOrganisationVariables {
  shortName: string;
  rntrc: string;
  organisationRole: string;
  fullName: string;
  country?: string | null;
  documentIds?: any | null;
  organisationId: number;
}
