/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMeasurementsBetweenDate
// ====================================================

export interface GetMeasurementsBetweenDate_az_measurements_Measurements {
  __typename: "az_measurements_Measurements";
  values: any;
  timestamp: any;
  sensorId: number;
}

export interface GetMeasurementsBetweenDate {
  /**
   * fetch data from the table: "az_measurements.Measurements"
   */
  az_measurements_Measurements: GetMeasurementsBetweenDate_az_measurements_Measurements[];
}

export interface GetMeasurementsBetweenDateVariables {
  from?: any | null;
  to?: any | null;
  sensorId?: number | null;
}
