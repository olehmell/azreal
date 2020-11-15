/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSensors
// ====================================================

export interface GetSensors_az_sensors_Sensors_Location {
  __typename: "az_sensors_Locations";
  documentId: number | null;
  address: string | null;
  airlyLink: string | null;
  elevation: any;
  locationId: number;
  locationPoint: any;
  mapsLink: string | null;
}

export interface GetSensors_az_sensors_Sensors {
  __typename: "az_sensors_Sensors";
  locationId: number;
  manufacturer: string | null;
  model: string | null;
  sensorId: number;
  /**
   * An object relationship
   */
  Location: GetSensors_az_sensors_Sensors_Location;
}

export interface GetSensors {
  /**
   * fetch data from the table: "az_sensors.Sensors"
   */
  az_sensors_Sensors: GetSensors_az_sensors_Sensors[];
}
