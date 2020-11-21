/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOrganisation
// ====================================================

export interface GetOrganisation_az_users_Organisation {
  __typename: "az_users_Organisation";
  shortName: string | null;
  rntrc: any;
  registryLink: string | null;
  organisationRole: string | null;
  organisationId: number;
  fullName: string;
  country: string | null;
  documentId: number;
}

export interface GetOrganisation {
  /**
   * fetch data from the table: "az_users.Organisation"
   */
  az_users_Organisation: GetOrganisation_az_users_Organisation[];
}

export interface GetOrganisationVariables {
  id?: number | null;
}
