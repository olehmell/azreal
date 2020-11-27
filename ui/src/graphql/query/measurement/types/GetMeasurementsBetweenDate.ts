/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMeasurementsBetweenDate
// ====================================================

export interface GetMeasurementsBetweenDate_az_measurements_Measurements {
  __typename: "az_measurements_Measurements";
  timestamp: any;
  sensorId: number;
}

export interface GetMeasurementsBetweenDate {
  az_measurements_Measurements: GetMeasurementsBetweenDate_az_measurements_Measurements[];
}

export interface GetMeasurementsBetweenDateVariables {
  from?: any | null;
  to?: any | null;
  sensorId?: number | null;
}
