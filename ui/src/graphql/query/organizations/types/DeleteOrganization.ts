/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteOrganization
// ====================================================

export interface DeleteOrganization_insert_az_users_Organisation_returning {
  __typename: "az_users_Organisation";
  organisationId: number;
}

export interface DeleteOrganization_insert_az_users_Organisation {
  __typename: "az_users_Organisation_mutation_response";
  returning: DeleteOrganization_insert_az_users_Organisation_returning[];
}

export interface DeleteOrganization {
  insert_az_users_Organisation: DeleteOrganization_insert_az_users_Organisation | null;
}

export interface DeleteOrganizationVariables {
  fullName?: string | null;
  organisationRole?: string | null;
  registryLink?: string | null;
  rntrc?: any | null;
  shortName?: string | null;
}
