/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLocations
// ====================================================

export interface GetLocations_az_sensors_Locations_aggregate_nodes {
  __typename: "az_sensors_Locations";
  mapsLink: string | null;
  locationPoint: any;
  locationId: number;
  elevation: any;
  address: string | null;
  airlyLink: string | null;
  documentId: number | null;
}

export interface GetLocations_az_sensors_Locations_aggregate {
  __typename: "az_sensors_Locations_aggregate";
  nodes: GetLocations_az_sensors_Locations_aggregate_nodes[];
}

export interface GetLocations {
  /**
   * fetch aggregated fields from the table: "az_sensors.Locations"
   */
  az_sensors_Locations_aggregate: GetLocations_az_sensors_Locations_aggregate;
}
