/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetLocation
// ====================================================

export interface GetLocation_az_sensors_Locations {
  __typename: "az_sensors_Locations";
  documentId: number | null;
  address: string | null;
  airlyLink: string | null;
  elevation: any;
  locationId: number;
  locationPoint: any;
  mapsLink: string | null;
}

export interface GetLocation {
  /**
   * fetch data from the table: "az_sensors.Locations"
   */
  az_sensors_Locations: GetLocation_az_sensors_Locations[];
}

export interface GetLocationVariables {
  locationId?: number | null;
}
