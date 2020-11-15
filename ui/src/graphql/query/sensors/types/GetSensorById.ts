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

export interface GetSensorById_az_sensors_Sensors_SensorFactors_PollutionFactor {
  __typename: "az_sensors_PollutionFactors";
  unit: any;
  label: string;
}

export interface GetSensorById_az_sensors_Sensors_SensorFactors {
  __typename: "az_sensors_SensorFactors";
  /**
   * An object relationship
   */
  PollutionFactor: GetSensorById_az_sensors_Sensors_SensorFactors_PollutionFactor | null;
}

export interface GetSensorById_az_sensors_Sensors {
  __typename: "az_sensors_Sensors";
  sensorId: number;
  model: string | null;
  manufacturer: string | null;
  /**
   * An object relationship
   */
  Location: GetSensorById_az_sensors_Sensors_Location;
  /**
   * An array relationship
   */
  SensorFactors: GetSensorById_az_sensors_Sensors_SensorFactors[];
}

export interface GetSensorById {
  /**
   * fetch data from the table: "az_sensors.Sensors"
   */
  az_sensors_Sensors: GetSensorById_az_sensors_Sensors[];
}

export interface GetSensorByIdVariables {
  id?: number | null;
}
