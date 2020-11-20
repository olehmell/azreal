/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateLocationById
// ====================================================

export interface UpdateLocationById_update_az_sensors_Locations_returning {
  __typename: "az_sensors_Locations";
  locationId: number;
}

export interface UpdateLocationById_update_az_sensors_Locations {
  __typename: "az_sensors_Locations_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: UpdateLocationById_update_az_sensors_Locations_returning[];
}

export interface UpdateLocationById {
  /**
   * update data of the table: "az_sensors.Locations"
   */
  update_az_sensors_Locations: UpdateLocationById_update_az_sensors_Locations | null;
}

export interface UpdateLocationByIdVariables {
  id?: number | null;
  documentId?: number | null;
  address?: string | null;
  airlyLink?: string | null;
  elevation?: any | null;
  locationPoint?: any | null;
  mapsLink?: string | null;
}
