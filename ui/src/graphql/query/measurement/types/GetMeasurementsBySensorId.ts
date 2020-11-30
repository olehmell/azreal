/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { az_sensors_e_measurement_unit_enum } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetMeasurementsBySensorId
// ====================================================

export interface GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors_PollutionFactor_Measurements_aggregate_aggregate_avg {
  __typename: "az_measurements_Measurements_avg_fields";
  value: number | null;
}

export interface GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors_PollutionFactor_Measurements_aggregate_aggregate {
  __typename: "az_measurements_Measurements_aggregate_fields";
  avg: GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors_PollutionFactor_Measurements_aggregate_aggregate_avg | null;
}

export interface GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors_PollutionFactor_Measurements_aggregate {
  __typename: "az_measurements_Measurements_aggregate";
  aggregate: GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors_PollutionFactor_Measurements_aggregate_aggregate | null;
}

export interface GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors_PollutionFactor {
  __typename: "az_sensors_PollutionFactors";
  name: string;
  unit: az_sensors_e_measurement_unit_enum | null;
  maxValue: any | null;
  Measurements_aggregate: GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors_PollutionFactor_Measurements_aggregate;
}

export interface GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors {
  __typename: "az_sensors_SensorFactors";
  PollutionFactor: GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors_PollutionFactor;
}

export interface GetMeasurementsBySensorId_az_sensors_Sensors {
  __typename: "az_sensors_Sensors";
  SensorFactors: GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors[];
}

export interface GetMeasurementsBySensorId {
  az_sensors_Sensors: GetMeasurementsBySensorId_az_sensors_Sensors[];
}

export interface GetMeasurementsBySensorIdVariables {
  sensorId: number;
  from: any;
  to: any;
}
