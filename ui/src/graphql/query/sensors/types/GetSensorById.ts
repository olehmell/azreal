/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSensorById
// ====================================================

export interface GetSensorById_az_sensors_Sensors_Location {
  __typename: "az_sensors_Locations";
  address: string | null;
  airlyLink: string | null;
  locationPoint: any;
  locationId: number;
  elevation: any;
}

export interface GetSensorById_az_sensors_Sensors {
  __typename: "az_sensors_Sensors";
  sensorId: number;
  model: string | null;
  manufacturer: string | null;
  Location: GetSensorById_az_sensors_Sensors_Location | null;
}

export interface GetSensorById {
  az_sensors_Sensors: GetSensorById_az_sensors_Sensors[];
}

export interface GetSensorByIdVariables {
  id?: number | null;
}
