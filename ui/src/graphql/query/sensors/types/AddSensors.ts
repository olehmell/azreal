/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddSensors
// ====================================================

export interface AddSensors_insert_az_sensors_Sensors_returning {
  __typename: "az_sensors_Sensors";
  sensorId: number;
}

export interface AddSensors_insert_az_sensors_Sensors {
  __typename: "az_sensors_Sensors_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: AddSensors_insert_az_sensors_Sensors_returning[];
}

export interface AddSensors {
  /**
   * insert data into the table: "az_sensors.Sensors"
   */
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
  documentId?: number | null;
  address?: string | null;
}
