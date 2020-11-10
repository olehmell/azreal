/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL subscription operation: SubscribeSensorById
// ====================================================

export interface SubscribeSensorById_az_sensors_Sensors_Location {
  __typename: "az_sensors_Locations";
  address: string | null;
  locationPoint: any;
  airlyLink: string | null;
}

export interface SubscribeSensorById_az_sensors_Sensors_SensorFactors_PollutionFactor {
  __typename: "az_sensors_PollutionFactors";
  unit: any;
  maxValues: any | null;
  label: string;
}

export interface SubscribeSensorById_az_sensors_Sensors_SensorFactors {
  __typename: "az_sensors_SensorFactors";
  PollutionFactor: SubscribeSensorById_az_sensors_Sensors_SensorFactors_PollutionFactor | null;
}

export interface SubscribeSensorById_az_sensors_Sensors {
  __typename: "az_sensors_Sensors";
  sensorId: number;
  model: string | null;
  manufacturer: string | null;
  locationId: number | null;
  Location: SubscribeSensorById_az_sensors_Sensors_Location | null;
  SensorFactors: SubscribeSensorById_az_sensors_Sensors_SensorFactors[];
}

export interface SubscribeSensorById {
  az_sensors_Sensors: SubscribeSensorById_az_sensors_Sensors[];
}

export interface SubscribeSensorByIdVariables {
  id?: number | null;
}
