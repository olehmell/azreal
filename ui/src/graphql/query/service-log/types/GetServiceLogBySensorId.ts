/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { az_sensors_e_service_type_enum } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL query operation: GetServiceLogBySensorId
// ====================================================

export interface GetServiceLogBySensorId_az_sensors_ServiceLog_Location {
  __typename: "az_sensors_Locations";
  address: string | null;
  mapsLink: string | null;
}

export interface GetServiceLogBySensorId_az_sensors_ServiceLog_Document {
  __typename: "az_docs_Documents";
  fileIds: any;
}

export interface GetServiceLogBySensorId_az_sensors_ServiceLog_Photo {
  __typename: "az_docs_Photo";
  fileIds: any;
}

export interface GetServiceLogBySensorId_az_sensors_ServiceLog {
  __typename: "az_sensors_ServiceLog";
  timestamp: any;
  serviceType: az_sensors_e_service_type_enum;
  sensorId: number;
  Location: GetServiceLogBySensorId_az_sensors_ServiceLog_Location | null;
  Document: GetServiceLogBySensorId_az_sensors_ServiceLog_Document;
  Photo: GetServiceLogBySensorId_az_sensors_ServiceLog_Photo | null;
}

export interface GetServiceLogBySensorId {
  az_sensors_ServiceLog: GetServiceLogBySensorId_az_sensors_ServiceLog[];
}

export interface GetServiceLogBySensorIdVariables {
  sensorId: number;
}
