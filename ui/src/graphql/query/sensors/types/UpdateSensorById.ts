/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateSensorById
// ====================================================

export interface UpdateSensorById_insert_az_sensors_Locations_one {
  __typename: "az_sensors_Locations";
  locationId: number;
}

export interface UpdateSensorById_update_az_sensors_Sensors_returning {
  __typename: "az_sensors_Sensors";
  sensorId: number;
}

export interface UpdateSensorById_update_az_sensors_Sensors {
  __typename: "az_sensors_Sensors_mutation_response";
  returning: UpdateSensorById_update_az_sensors_Sensors_returning[];
}

export interface UpdateSensorById {
  insert_az_sensors_Locations_one: UpdateSensorById_insert_az_sensors_Locations_one | null;
  update_az_sensors_Sensors: UpdateSensorById_update_az_sensors_Sensors | null;
}

export interface UpdateSensorByIdVariables {
  mapsLink?: string | null;
  locationPoint?: any | null;
  elevation?: any | null;
  airlyLink?: string | null;
  address?: string | null;
  locationId?: number | null;
  manufacturer?: string | null;
  model?: string | null;
  id?: number | null;
}
