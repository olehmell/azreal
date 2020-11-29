/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: addSensor
// ====================================================

export interface addSensor_insert_az_sensors_Locations_one {
  __typename: "az_sensors_Locations";
  locationId: number;
}

export interface addSensor_insert_az_sensors_Sensors_one {
  __typename: "az_sensors_Sensors";
  sensorId: number;
}

export interface addSensor {
  insert_az_sensors_Locations_one: addSensor_insert_az_sensors_Locations_one | null;
  insert_az_sensors_Sensors_one: addSensor_insert_az_sensors_Sensors_one | null;
}

export interface addSensorVariables {
  mapsLink?: string | null;
  locationPoint?: any | null;
  locationId: number;
  elevation?: any | null;
  airlyLink?: string | null;
  address?: string | null;
  sensorId: number;
  model?: string | null;
  manufacturer?: string | null;
  timestamp: any;
  documentIds?: any | null;
  photoIds?: any | null;
}
