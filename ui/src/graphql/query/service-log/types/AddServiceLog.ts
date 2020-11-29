/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { az_sensors_e_service_type_enum } from "./../../../../types/graphql-global-types";

// ====================================================
// GraphQL mutation operation: AddServiceLog
// ====================================================

export interface AddServiceLog_insert_az_sensors_ServiceLog_one {
  __typename: "az_sensors_ServiceLog";
  serviceType: az_sensors_e_service_type_enum;
  timestamp: any;
}

export interface AddServiceLog {
  insert_az_sensors_ServiceLog_one: AddServiceLog_insert_az_sensors_ServiceLog_one | null;
}

export interface AddServiceLogVariables {
  documentIds: any;
  photoIds: any;
  serviceType: az_sensors_e_service_type_enum;
  timestamp: any;
  sensorId: number;
  locationId: number;
}
