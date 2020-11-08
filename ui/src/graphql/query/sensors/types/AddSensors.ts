/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddSensors
// ====================================================

export interface AddSensors_insert_az_sensors_Sensors_returning {
  __typename: "az_sensors_Sensors";
  sensorId: number | null;
}

export interface AddSensors_insert_az_sensors_Sensors {
  __typename: "az_sensors_Sensors_mutation_response";
  returning: AddSensors_insert_az_sensors_Sensors_returning[];
}

export interface AddSensors {
  insert_az_sensors_Sensors: AddSensors_insert_az_sensors_Sensors | null;
}

export interface AddSensorsVariables {
  locationId?: number | null;
  manufacturer?: string | null;
  model?: string | null;
  sensorId?: number | null;
  locationPoint?: any | null;
  mapsLink?: string | null;
  elevation?: any | null;
  airlyLink?: string | null;
  actLink?: string | null;
  address?: string | null;
}
