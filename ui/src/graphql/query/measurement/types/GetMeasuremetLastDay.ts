/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMeasuremetLastDay
// ====================================================

export type Value = {
  name: string,
  value: number
}

export interface GetMeasuremetLastDay_az_measurements_Measurements_aggregate_nodes {
  __typename: "az_measurements_Measurements";
  timestamp: Date;
  values: Value[];
  sensorId: number;
  locationId: number;
}

export interface GetMeasuremetLastDay_az_measurements_Measurements_aggregate {
  __typename: "az_measurements_Measurements_aggregate";
  nodes: GetMeasuremetLastDay_az_measurements_Measurements_aggregate_nodes[];
}

export interface GetMeasuremetLastDay {
  az_measurements_Measurements_aggregate: GetMeasuremetLastDay_az_measurements_Measurements_aggregate;
}
