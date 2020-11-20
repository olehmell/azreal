/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateOrganisation
// ====================================================

export interface UpdateOrganisation_update_az_users_Organisation_returning {
  __typename: "az_users_Organisation";
  organisationId: number;
}

export interface UpdateOrganisation_update_az_users_Organisation {
  __typename: "az_users_Organisation_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: UpdateOrganisation_update_az_users_Organisation_returning[];
}

export interface UpdateOrganisation {
  /**
   * update data of the table: "az_users.Organisation"
   */
  update_az_users_Organisation: UpdateOrganisation_update_az_users_Organisation | null;
}

export interface UpdateOrganisationVariables {
  shortName?: string | null;
  rntrc?: any | null;
  registryLink?: string | null;
  organisationRole?: string | null;
  fullName?: string | null;
  country?: string | null;
  documentId?: number | null;
  id?: number | null;
}
