/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFactorsWithSensors
// ====================================================

export interface GetFactorsWithSensors_az_sensors_PollutionFactors_aggregate_nodes_SensorFactors_Sensor {
  __typename: "az_sensors_Sensors";
  sensorId: number;
  model: string | null;
}

export interface GetFactorsWithSensors_az_sensors_PollutionFactors_aggregate_nodes_SensorFactors {
  __typename: "az_sensors_SensorFactors";
  Sensor: GetFactorsWithSensors_az_sensors_PollutionFactors_aggregate_nodes_SensorFactors_Sensor;
}

export interface GetFactorsWithSensors_az_sensors_PollutionFactors_aggregate_nodes {
  __typename: "az_sensors_PollutionFactors";
  label: string;
  maxValues: any | null;
  unit: any;
  SensorFactors: GetFactorsWithSensors_az_sensors_PollutionFactors_aggregate_nodes_SensorFactors[];
}

export interface GetFactorsWithSensors_az_sensors_PollutionFactors_aggregate {
  __typename: "az_sensors_PollutionFactors_aggregate";
  nodes: GetFactorsWithSensors_az_sensors_PollutionFactors_aggregate_nodes[];
}

export interface GetFactorsWithSensors {
  az_sensors_PollutionFactors_aggregate: GetFactorsWithSensors_az_sensors_PollutionFactors_aggregate;
}
