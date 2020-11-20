/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSensorsWithFactors
// ====================================================

export interface GetSensorsWithFactors_az_sensors_Sensors_aggregate_nodes_SensorFactors_PollutionFactor {
  __typename: "az_sensors_PollutionFactors";
  label: string;
  unit: any;
}

export interface GetSensorsWithFactors_az_sensors_Sensors_aggregate_nodes_SensorFactors {
  __typename: "az_sensors_SensorFactors";
  /**
   * An object relationship
   */
  PollutionFactor: GetSensorsWithFactors_az_sensors_Sensors_aggregate_nodes_SensorFactors_PollutionFactor | null;
}

export interface GetSensorsWithFactors_az_sensors_Sensors_aggregate_nodes {
  __typename: "az_sensors_Sensors";
  /**
   * An array relationship
   */
  SensorFactors: GetSensorsWithFactors_az_sensors_Sensors_aggregate_nodes_SensorFactors[];
  sensorId: number;
  model: string | null;
  manufacturer: string | null;
}

export interface GetSensorsWithFactors_az_sensors_Sensors_aggregate {
  __typename: "az_sensors_Sensors_aggregate";
  nodes: GetSensorsWithFactors_az_sensors_Sensors_aggregate_nodes[];
}

export interface GetSensorsWithFactors {
  /**
   * fetch aggregated fields from the table: "az_sensors.Sensors"
   */
  az_sensors_Sensors_aggregate: GetSensorsWithFactors_az_sensors_Sensors_aggregate;
}
