/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateOrganization
// ====================================================

export interface UpdateOrganization_update_az_users_Organisation_returning {
  __typename: "az_users_Organisation";
  organisationId: number;
}

export interface UpdateOrganization_update_az_users_Organisation {
  __typename: "az_users_Organisation_mutation_response";
  returning: UpdateOrganization_update_az_users_Organisation_returning[];
}

export interface UpdateOrganization {
  update_az_users_Organisation: UpdateOrganization_update_az_users_Organisation | null;
}

export interface UpdateOrganizationVariables {
  shortName?: string | null;
  rntrc?: any | null;
  registryLink?: string | null;
  organisationRole?: string | null;
  fullName?: string | null;
  country?: string | null;
  actLink?: string | null;
  id?: number | null;
}
