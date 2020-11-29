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
  insert_az_users_Organisation_one: AddOrganisation_insert_az_users_Organisation_one | null;
}

export interface AddOrganisationVariables {
  country?: string | null;
  fullName?: string | null;
  organisationRole?: string | null;
  rntrc?: string | null;
  shortName?: string | null;
  fileIds?: any | null;
}
