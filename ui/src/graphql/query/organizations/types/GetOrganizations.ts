/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetOrganizations
// ====================================================

export interface GetOrganizations_az_users_Organisation {
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

export interface GetOrganizations {
  /**
   * fetch data from the table: "az_users.Organisation"
   */
  az_users_Organisation: GetOrganizations_az_users_Organisation[];
}
