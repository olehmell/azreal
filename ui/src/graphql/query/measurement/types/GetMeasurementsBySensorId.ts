/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMeasurementsBySensorId
// ====================================================

export interface GetMeasurementsBySensorId_az_measurements_Measurements_PollutionFactor_Measurements_aggregate_aggregate_avg {
  __typename: "az_measurements_Measurements_avg_fields";
  value: number | null;
}

export interface GetMeasurementsBySensorId_az_measurements_Measurements_PollutionFactor_Measurements_aggregate_aggregate {
  __typename: "az_measurements_Measurements_aggregate_fields";
  avg: GetMeasurementsBySensorId_az_measurements_Measurements_PollutionFactor_Measurements_aggregate_aggregate_avg | null;
}

export interface GetMeasurementsBySensorId_az_measurements_Measurements_PollutionFactor_Measurements_aggregate {
  __typename: "az_measurements_Measurements_aggregate";
  aggregate: GetMeasurementsBySensorId_az_measurements_Measurements_PollutionFactor_Measurements_aggregate_aggregate | null;
}

export interface GetMeasurementsBySensorId_az_measurements_Measurements_PollutionFactor_e_measurement_unit {
  __typename: "az_sensors_e_measurement_unit";
  description: string | null;
}

export interface GetMeasurementsBySensorId_az_measurements_Measurements_PollutionFactor {
  __typename: "az_sensors_PollutionFactors";
  maxValue: any | null;
  label: string;
  Measurements_aggregate: GetMeasurementsBySensorId_az_measurements_Measurements_PollutionFactor_Measurements_aggregate;
  e_measurement_unit: GetMeasurementsBySensorId_az_measurements_Measurements_PollutionFactor_e_measurement_unit | null;
}

export interface GetMeasurementsBySensorId_az_measurements_Measurements {
  __typename: "az_measurements_Measurements";
  PollutionFactor: GetMeasurementsBySensorId_az_measurements_Measurements_PollutionFactor;
  sensorId: number;
  timestamp: any;
}

export interface GetMeasurementsBySensorId {
  az_measurements_Measurements: GetMeasurementsBySensorId_az_measurements_Measurements[];
}

export interface GetMeasurementsBySensorIdVariables {
  from?: any | null;
  to?: any | null;
  sensorId?: number | null;
}
