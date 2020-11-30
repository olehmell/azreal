/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { az_sensors_e_measurement_unit_enum } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetSensorById
// ====================================================

export interface GetSensorById_az_sensors_Sensors_Location_ServiceLogs_Document {
  __typename: "az_docs_Documents";
  fileIds: any;
}

export interface GetSensorById_az_sensors_Sensors_Location_ServiceLogs {
  __typename: "az_sensors_ServiceLog";
  Document: GetSensorById_az_sensors_Sensors_Location_ServiceLogs_Document;
}

export interface GetSensorById_az_sensors_Sensors_Location {
  __typename: "az_sensors_Locations";
  address: string | null;
  airlyLink: string | null;
  locationPoint: any;
  locationId: number;
  elevation: any;
  ServiceLogs: GetSensorById_az_sensors_Sensors_Location_ServiceLogs[];
}

export interface GetSensorById_az_sensors_Sensors_SensorFactors_PollutionFactor {
  __typename: "az_sensors_PollutionFactors";
  unit: az_sensors_e_measurement_unit_enum;
  label: string;
}

export interface GetSensorById_az_sensors_Sensors_SensorFactors {
  __typename: "az_sensors_SensorFactors";
  PollutionFactor: GetSensorById_az_sensors_Sensors_SensorFactors_PollutionFactor;
}

export interface GetSensorById_az_sensors_Sensors {
  __typename: "az_sensors_Sensors";
  sensorId: number;
  model: string | null;
  manufacturer: string | null;
  Location: GetSensorById_az_sensors_Sensors_Location;
  SensorFactors: GetSensorById_az_sensors_Sensors_SensorFactors[];
}

export interface GetSensorById {
  az_sensors_Sensors: GetSensorById_az_sensors_Sensors[];
}

export interface GetSensorByIdVariables {
  id?: number | null;
}
