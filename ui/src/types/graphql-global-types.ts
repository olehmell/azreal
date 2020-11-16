/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * unique or primary key constraints on table "az_docs.Documents"
 */
export enum az_docs_Documents_constraint {
  Documents_pkey = "Documents_pkey",
}

/**
 * update columns of table "az_docs.Documents"
 */
export enum az_docs_Documents_update_column {
  documentBody = "documentBody",
  documentId = "documentId",
  documentType = "documentType",
}

/**
 * unique or primary key constraints on table "az_docs.Photo"
 */
export enum az_docs_Photo_constraint {
  Photo_pkey = "Photo_pkey",
}

/**
 * update columns of table "az_docs.Photo"
 */
export enum az_docs_Photo_update_column {
  photoId = "photoId",
  photoSeries = "photoSeries",
}

export enum az_docs_enum_document_type_enum {
  Location = "Location",
  Organisation = "Organisation",
  Sensor = "Sensor",
  Service = "Service",
  User = "User",
}

/**
 * unique or primary key constraints on table "az_sensors.Locations"
 */
export enum az_sensors_Locations_constraint {
  Locations_pkey = "Locations_pkey",
}

/**
 * update columns of table "az_sensors.Locations"
 */
export enum az_sensors_Locations_update_column {
  address = "address",
  airlyLink = "airlyLink",
  documentId = "documentId",
  elevation = "elevation",
  locationId = "locationId",
  locationPoint = "locationPoint",
  mapsLink = "mapsLink",
}

/**
 * unique or primary key constraints on table "az_sensors.PollutionFactors"
 */
export enum az_sensors_PollutionFactors_constraint {
  PollutionFactors_pkey = "PollutionFactors_pkey",
}

/**
 * update columns of table "az_sensors.PollutionFactors"
 */
export enum az_sensors_PollutionFactors_update_column {
  factorId = "factorId",
  label = "label",
  name = "name",
  unit = "unit",
}

/**
 * unique or primary key constraints on table "az_sensors.SensorFactors"
 */
export enum az_sensors_SensorFactors_constraint {
  SensorFactors_sensorId_factorId_key = "SensorFactors_sensorId_factorId_key",
}

/**
 * update columns of table "az_sensors.SensorFactors"
 */
export enum az_sensors_SensorFactors_update_column {
  factorId = "factorId",
  sensorId = "sensorId",
}

/**
 * unique or primary key constraints on table "az_sensors.Sensors"
 */
export enum az_sensors_Sensors_constraint {
  Sensors_pkey = "Sensors_pkey",
  Sensors_sensorId_locationId_key = "Sensors_sensorId_locationId_key",
}

/**
 * update columns of table "az_sensors.Sensors"
 */
export enum az_sensors_Sensors_update_column {
  locationId = "locationId",
  manufacturer = "manufacturer",
  model = "model",
  sensorId = "sensorId",
}

/**
 * unique or primary key constraints on table "az_users.AuthData"
 */
export enum az_users_AuthData_constraint {
  AuthData_userId_key = "AuthData_userId_key",
}

/**
 * update columns of table "az_users.AuthData"
 */
export enum az_users_AuthData_update_column {
  password = "password",
  userId = "userId",
}

/**
 * unique or primary key constraints on table "az_users.Organisation"
 */
export enum az_users_Organisation_constraint {
  Organisation_pkey = "Organisation_pkey",
  Organisation_rntrc_key = "Organisation_rntrc_key",
}

/**
 * update columns of table "az_users.Organisation"
 */
export enum az_users_Organisation_update_column {
  country = "country",
  documentId = "documentId",
  fullName = "fullName",
  organisationId = "organisationId",
  organisationRole = "organisationRole",
  registryLink = "registryLink",
  rntrc = "rntrc",
  shortName = "shortName",
}

/**
 * unique or primary key constraints on table "az_users.Users"
 */
export enum az_users_Users_constraint {
  Users_pkey = "Users_pkey",
}

/**
 * update columns of table "az_users.Users"
 */
export enum az_users_Users_update_column {
  documentId = "documentId",
  email = "email",
  fullName = "fullName",
  organisationId = "organisationId",
  phoneNumber = "phoneNumber",
  userId = "userId",
  userRole = "userRole",
}

/**
 * expression to compare columns of type Int. All fields are combined with logical 'AND'.
 */
export interface Int_comparison_exp {
  _eq?: number | null;
  _gt?: number | null;
  _gte?: number | null;
  _in?: number[] | null;
  _is_null?: boolean | null;
  _lt?: number | null;
  _lte?: number | null;
  _neq?: number | null;
  _nin?: number[] | null;
}

/**
 * expression to compare columns of type String. All fields are combined with logical 'AND'.
 */
export interface String_comparison_exp {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _nlike?: string | null;
  _nsimilar?: string | null;
  _similar?: string | null;
}

/**
 * expression to compare columns of type _bytea. All fields are combined with logical 'AND'.
 */
export interface _bytea_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * expression to compare columns of type _measurement_value. All fields are combined with logical 'AND'.
 */
export interface _measurement_value_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * Boolean expression to filter rows from the table "az_docs.Documents". All fields are combined with a logical 'AND'.
 */
export interface az_docs_Documents_bool_exp {
  Locations?: az_sensors_Locations_bool_exp | null;
  Organisations?: az_users_Organisation_bool_exp | null;
  ServiceLogs?: az_sensors_ServiceLog_bool_exp | null;
  Users?: az_users_Users_bool_exp | null;
  _and?: (az_docs_Documents_bool_exp | null)[] | null;
  _not?: az_docs_Documents_bool_exp | null;
  _or?: (az_docs_Documents_bool_exp | null)[] | null;
  documentBody?: String_comparison_exp | null;
  documentId?: Int_comparison_exp | null;
  documentType?: az_docs_enum_document_type_enum_comparison_exp | null;
}

/**
 * input type for inserting data into table "az_docs.Documents"
 */
export interface az_docs_Documents_insert_input {
  Locations?: az_sensors_Locations_arr_rel_insert_input | null;
  Organisations?: az_users_Organisation_arr_rel_insert_input | null;
  ServiceLogs?: az_sensors_ServiceLog_arr_rel_insert_input | null;
  Users?: az_users_Users_arr_rel_insert_input | null;
  documentBody?: string | null;
  documentId?: number | null;
  documentType?: az_docs_enum_document_type_enum | null;
}

/**
 * input type for inserting object relation for remote table "az_docs.Documents"
 */
export interface az_docs_Documents_obj_rel_insert_input {
  data: az_docs_Documents_insert_input;
  on_conflict?: az_docs_Documents_on_conflict | null;
}

/**
 * on conflict condition type for table "az_docs.Documents"
 */
export interface az_docs_Documents_on_conflict {
  constraint: az_docs_Documents_constraint;
  update_columns: az_docs_Documents_update_column[];
  where?: az_docs_Documents_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "az_docs.Photo". All fields are combined with a logical 'AND'.
 */
export interface az_docs_Photo_bool_exp {
  ServiceLogs?: az_sensors_ServiceLog_bool_exp | null;
  _and?: (az_docs_Photo_bool_exp | null)[] | null;
  _not?: az_docs_Photo_bool_exp | null;
  _or?: (az_docs_Photo_bool_exp | null)[] | null;
  photoId?: Int_comparison_exp | null;
  photoSeries?: _bytea_comparison_exp | null;
}

/**
 * input type for inserting data into table "az_docs.Photo"
 */
export interface az_docs_Photo_insert_input {
  ServiceLogs?: az_sensors_ServiceLog_arr_rel_insert_input | null;
  photoId?: number | null;
  photoSeries?: any | null;
}

/**
 * input type for inserting object relation for remote table "az_docs.Photo"
 */
export interface az_docs_Photo_obj_rel_insert_input {
  data: az_docs_Photo_insert_input;
  on_conflict?: az_docs_Photo_on_conflict | null;
}

/**
 * on conflict condition type for table "az_docs.Photo"
 */
export interface az_docs_Photo_on_conflict {
  constraint: az_docs_Photo_constraint;
  update_columns: az_docs_Photo_update_column[];
  where?: az_docs_Photo_bool_exp | null;
}

/**
 * expression to compare columns of type az_docs_enum_document_type_enum. All fields are combined with logical 'AND'.
 */
export interface az_docs_enum_document_type_enum_comparison_exp {
  _eq?: az_docs_enum_document_type_enum | null;
  _in?: az_docs_enum_document_type_enum[] | null;
  _is_null?: boolean | null;
  _neq?: az_docs_enum_document_type_enum | null;
  _nin?: az_docs_enum_document_type_enum[] | null;
}

/**
 * input type for inserting array relation for remote table "az_measurements.Measurements"
 */
export interface az_measurements_Measurements_arr_rel_insert_input {
  data: az_measurements_Measurements_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "az_measurements.Measurements".
 * All fields are combined with a logical 'AND'.
 */
export interface az_measurements_Measurements_bool_exp {
  Location?: az_sensors_Locations_bool_exp | null;
  Sensor?: az_sensors_Sensors_bool_exp | null;
  _and?: (az_measurements_Measurements_bool_exp | null)[] | null;
  _not?: az_measurements_Measurements_bool_exp | null;
  _or?: (az_measurements_Measurements_bool_exp | null)[] | null;
  locationId?: Int_comparison_exp | null;
  sensorId?: Int_comparison_exp | null;
  timestamp?: timestamp_comparison_exp | null;
  values?: _measurement_value_comparison_exp | null;
}

/**
 * input type for inserting data into table "az_measurements.Measurements"
 */
export interface az_measurements_Measurements_insert_input {
  Location?: az_sensors_Locations_obj_rel_insert_input | null;
  Sensor?: az_sensors_Sensors_obj_rel_insert_input | null;
  locationId?: number | null;
  sensorId?: number | null;
  timestamp?: any | null;
  values?: any | null;
}

/**
 * input type for inserting array relation for remote table "az_sensors.Locations"
 */
export interface az_sensors_Locations_arr_rel_insert_input {
  data: az_sensors_Locations_insert_input[];
  on_conflict?: az_sensors_Locations_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "az_sensors.Locations". All fields are combined with a logical 'AND'.
 */
export interface az_sensors_Locations_bool_exp {
  Document?: az_docs_Documents_bool_exp | null;
  Measurements?: az_measurements_Measurements_bool_exp | null;
  Sensors?: az_sensors_Sensors_bool_exp | null;
  ServiceLogs?: az_sensors_ServiceLog_bool_exp | null;
  _and?: (az_sensors_Locations_bool_exp | null)[] | null;
  _not?: az_sensors_Locations_bool_exp | null;
  _or?: (az_sensors_Locations_bool_exp | null)[] | null;
  address?: String_comparison_exp | null;
  airlyLink?: String_comparison_exp | null;
  documentId?: Int_comparison_exp | null;
  elevation?: float8_comparison_exp | null;
  locationId?: Int_comparison_exp | null;
  locationPoint?: point_comparison_exp | null;
  mapsLink?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "az_sensors.Locations"
 */
export interface az_sensors_Locations_insert_input {
  Document?: az_docs_Documents_obj_rel_insert_input | null;
  Measurements?: az_measurements_Measurements_arr_rel_insert_input | null;
  Sensors?: az_sensors_Sensors_arr_rel_insert_input | null;
  ServiceLogs?: az_sensors_ServiceLog_arr_rel_insert_input | null;
  address?: string | null;
  airlyLink?: string | null;
  documentId?: number | null;
  elevation?: any | null;
  locationId?: number | null;
  locationPoint?: any | null;
  mapsLink?: string | null;
}

/**
 * input type for inserting object relation for remote table "az_sensors.Locations"
 */
export interface az_sensors_Locations_obj_rel_insert_input {
  data: az_sensors_Locations_insert_input;
  on_conflict?: az_sensors_Locations_on_conflict | null;
}

/**
 * on conflict condition type for table "az_sensors.Locations"
 */
export interface az_sensors_Locations_on_conflict {
  constraint: az_sensors_Locations_constraint;
  update_columns: az_sensors_Locations_update_column[];
  where?: az_sensors_Locations_bool_exp | null;
}

/**
 * Boolean expression to filter rows from the table "az_sensors.PollutionFactors".
 * All fields are combined with a logical 'AND'.
 */
export interface az_sensors_PollutionFactors_bool_exp {
  SensorFactors?: az_sensors_SensorFactors_bool_exp | null;
  _and?: (az_sensors_PollutionFactors_bool_exp | null)[] | null;
  _not?: az_sensors_PollutionFactors_bool_exp | null;
  _or?: (az_sensors_PollutionFactors_bool_exp | null)[] | null;
  factorId?: Int_comparison_exp | null;
  label?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  unit?: measurement_unit_comparison_exp | null;
}

/**
 * input type for inserting data into table "az_sensors.PollutionFactors"
 */
export interface az_sensors_PollutionFactors_insert_input {
  SensorFactors?: az_sensors_SensorFactors_arr_rel_insert_input | null;
  factorId?: number | null;
  label?: string | null;
  name?: string | null;
  unit?: any | null;
}

/**
 * input type for inserting object relation for remote table "az_sensors.PollutionFactors"
 */
export interface az_sensors_PollutionFactors_obj_rel_insert_input {
  data: az_sensors_PollutionFactors_insert_input;
  on_conflict?: az_sensors_PollutionFactors_on_conflict | null;
}

/**
 * on conflict condition type for table "az_sensors.PollutionFactors"
 */
export interface az_sensors_PollutionFactors_on_conflict {
  constraint: az_sensors_PollutionFactors_constraint;
  update_columns: az_sensors_PollutionFactors_update_column[];
  where?: az_sensors_PollutionFactors_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "az_sensors.SensorFactors"
 */
export interface az_sensors_SensorFactors_arr_rel_insert_input {
  data: az_sensors_SensorFactors_insert_input[];
  on_conflict?: az_sensors_SensorFactors_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "az_sensors.SensorFactors". All fields are combined with a logical 'AND'.
 */
export interface az_sensors_SensorFactors_bool_exp {
  PollutionFactor?: az_sensors_PollutionFactors_bool_exp | null;
  Sensor?: az_sensors_Sensors_bool_exp | null;
  _and?: (az_sensors_SensorFactors_bool_exp | null)[] | null;
  _not?: az_sensors_SensorFactors_bool_exp | null;
  _or?: (az_sensors_SensorFactors_bool_exp | null)[] | null;
  factorId?: Int_comparison_exp | null;
  sensorId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "az_sensors.SensorFactors"
 */
export interface az_sensors_SensorFactors_insert_input {
  PollutionFactor?: az_sensors_PollutionFactors_obj_rel_insert_input | null;
  Sensor?: az_sensors_Sensors_obj_rel_insert_input | null;
  factorId?: number | null;
  sensorId?: number | null;
}

/**
 * on conflict condition type for table "az_sensors.SensorFactors"
 */
export interface az_sensors_SensorFactors_on_conflict {
  constraint: az_sensors_SensorFactors_constraint;
  update_columns: az_sensors_SensorFactors_update_column[];
  where?: az_sensors_SensorFactors_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "az_sensors.Sensors"
 */
export interface az_sensors_Sensors_arr_rel_insert_input {
  data: az_sensors_Sensors_insert_input[];
  on_conflict?: az_sensors_Sensors_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "az_sensors.Sensors". All fields are combined with a logical 'AND'.
 */
export interface az_sensors_Sensors_bool_exp {
  Location?: az_sensors_Locations_bool_exp | null;
  Measurements?: az_measurements_Measurements_bool_exp | null;
  SensorFactors?: az_sensors_SensorFactors_bool_exp | null;
  ServiceLogs?: az_sensors_ServiceLog_bool_exp | null;
  _and?: (az_sensors_Sensors_bool_exp | null)[] | null;
  _not?: az_sensors_Sensors_bool_exp | null;
  _or?: (az_sensors_Sensors_bool_exp | null)[] | null;
  locationId?: Int_comparison_exp | null;
  manufacturer?: String_comparison_exp | null;
  model?: String_comparison_exp | null;
  sensorId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "az_sensors.Sensors"
 */
export interface az_sensors_Sensors_insert_input {
  Location?: az_sensors_Locations_obj_rel_insert_input | null;
  Measurements?: az_measurements_Measurements_arr_rel_insert_input | null;
  SensorFactors?: az_sensors_SensorFactors_arr_rel_insert_input | null;
  ServiceLogs?: az_sensors_ServiceLog_arr_rel_insert_input | null;
  locationId?: number | null;
  manufacturer?: string | null;
  model?: string | null;
  sensorId?: number | null;
}

/**
 * input type for inserting object relation for remote table "az_sensors.Sensors"
 */
export interface az_sensors_Sensors_obj_rel_insert_input {
  data: az_sensors_Sensors_insert_input;
  on_conflict?: az_sensors_Sensors_on_conflict | null;
}

/**
 * on conflict condition type for table "az_sensors.Sensors"
 */
export interface az_sensors_Sensors_on_conflict {
  constraint: az_sensors_Sensors_constraint;
  update_columns: az_sensors_Sensors_update_column[];
  where?: az_sensors_Sensors_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "az_sensors.ServiceLog"
 */
export interface az_sensors_ServiceLog_arr_rel_insert_input {
  data: az_sensors_ServiceLog_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "az_sensors.ServiceLog". All fields are combined with a logical 'AND'.
 */
export interface az_sensors_ServiceLog_bool_exp {
  Document?: az_docs_Documents_bool_exp | null;
  Location?: az_sensors_Locations_bool_exp | null;
  Photo?: az_docs_Photo_bool_exp | null;
  Sensor?: az_sensors_Sensors_bool_exp | null;
  _and?: (az_sensors_ServiceLog_bool_exp | null)[] | null;
  _not?: az_sensors_ServiceLog_bool_exp | null;
  _or?: (az_sensors_ServiceLog_bool_exp | null)[] | null;
  documentId?: Int_comparison_exp | null;
  locationId?: Int_comparison_exp | null;
  photoId?: Int_comparison_exp | null;
  sensorId?: Int_comparison_exp | null;
  serviceType?: service_type_comparison_exp | null;
  timestamp?: timestamp_comparison_exp | null;
}

/**
 * input type for inserting data into table "az_sensors.ServiceLog"
 */
export interface az_sensors_ServiceLog_insert_input {
  Document?: az_docs_Documents_obj_rel_insert_input | null;
  Location?: az_sensors_Locations_obj_rel_insert_input | null;
  Photo?: az_docs_Photo_obj_rel_insert_input | null;
  Sensor?: az_sensors_Sensors_obj_rel_insert_input | null;
  documentId?: number | null;
  locationId?: number | null;
  photoId?: number | null;
  sensorId?: number | null;
  serviceType?: any | null;
  timestamp?: any | null;
}

/**
 * Boolean expression to filter rows from the table "az_users.AuthData". All fields are combined with a logical 'AND'.
 */
export interface az_users_AuthData_bool_exp {
  User?: az_users_Users_bool_exp | null;
  _and?: (az_users_AuthData_bool_exp | null)[] | null;
  _not?: az_users_AuthData_bool_exp | null;
  _or?: (az_users_AuthData_bool_exp | null)[] | null;
  password?: String_comparison_exp | null;
  userId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "az_users.AuthData"
 */
export interface az_users_AuthData_insert_input {
  User?: az_users_Users_obj_rel_insert_input | null;
  password?: string | null;
  userId?: number | null;
}

/**
 * input type for inserting object relation for remote table "az_users.AuthData"
 */
export interface az_users_AuthData_obj_rel_insert_input {
  data: az_users_AuthData_insert_input;
  on_conflict?: az_users_AuthData_on_conflict | null;
}

/**
 * on conflict condition type for table "az_users.AuthData"
 */
export interface az_users_AuthData_on_conflict {
  constraint: az_users_AuthData_constraint;
  update_columns: az_users_AuthData_update_column[];
  where?: az_users_AuthData_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "az_users.Organisation"
 */
export interface az_users_Organisation_arr_rel_insert_input {
  data: az_users_Organisation_insert_input[];
  on_conflict?: az_users_Organisation_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "az_users.Organisation". All fields are combined with a logical 'AND'.
 */
export interface az_users_Organisation_bool_exp {
  Document?: az_docs_Documents_bool_exp | null;
  Users?: az_users_Users_bool_exp | null;
  _and?: (az_users_Organisation_bool_exp | null)[] | null;
  _not?: az_users_Organisation_bool_exp | null;
  _or?: (az_users_Organisation_bool_exp | null)[] | null;
  country?: String_comparison_exp | null;
  documentId?: Int_comparison_exp | null;
  fullName?: String_comparison_exp | null;
  organisationId?: Int_comparison_exp | null;
  organisationRole?: String_comparison_exp | null;
  registryLink?: String_comparison_exp | null;
  rntrc?: bpchar_comparison_exp | null;
  shortName?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "az_users.Organisation"
 */
export interface az_users_Organisation_insert_input {
  Document?: az_docs_Documents_obj_rel_insert_input | null;
  Users?: az_users_Users_arr_rel_insert_input | null;
  country?: string | null;
  documentId?: number | null;
  fullName?: string | null;
  organisationId?: number | null;
  organisationRole?: string | null;
  registryLink?: string | null;
  rntrc?: any | null;
  shortName?: string | null;
}

/**
 * input type for inserting object relation for remote table "az_users.Organisation"
 */
export interface az_users_Organisation_obj_rel_insert_input {
  data: az_users_Organisation_insert_input;
  on_conflict?: az_users_Organisation_on_conflict | null;
}

/**
 * on conflict condition type for table "az_users.Organisation"
 */
export interface az_users_Organisation_on_conflict {
  constraint: az_users_Organisation_constraint;
  update_columns: az_users_Organisation_update_column[];
  where?: az_users_Organisation_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "az_users.UsageLog"
 */
export interface az_users_UsageLog_arr_rel_insert_input {
  data: az_users_UsageLog_insert_input[];
}

/**
 * Boolean expression to filter rows from the table "az_users.UsageLog". All fields are combined with a logical 'AND'.
 */
export interface az_users_UsageLog_bool_exp {
  User?: az_users_Users_bool_exp | null;
  _and?: (az_users_UsageLog_bool_exp | null)[] | null;
  _not?: az_users_UsageLog_bool_exp | null;
  _or?: (az_users_UsageLog_bool_exp | null)[] | null;
  query?: String_comparison_exp | null;
  queryType?: bpchar_comparison_exp | null;
  timestamp?: timestamp_comparison_exp | null;
  userId?: Int_comparison_exp | null;
}

/**
 * input type for inserting data into table "az_users.UsageLog"
 */
export interface az_users_UsageLog_insert_input {
  User?: az_users_Users_obj_rel_insert_input | null;
  query?: string | null;
  queryType?: any | null;
  timestamp?: any | null;
  userId?: number | null;
}

/**
 * input type for inserting array relation for remote table "az_users.Users"
 */
export interface az_users_Users_arr_rel_insert_input {
  data: az_users_Users_insert_input[];
  on_conflict?: az_users_Users_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "az_users.Users". All fields are combined with a logical 'AND'.
 */
export interface az_users_Users_bool_exp {
  AuthDatum?: az_users_AuthData_bool_exp | null;
  Document?: az_docs_Documents_bool_exp | null;
  Organisation?: az_users_Organisation_bool_exp | null;
  UsageLogs?: az_users_UsageLog_bool_exp | null;
  _and?: (az_users_Users_bool_exp | null)[] | null;
  _not?: az_users_Users_bool_exp | null;
  _or?: (az_users_Users_bool_exp | null)[] | null;
  documentId?: Int_comparison_exp | null;
  email?: String_comparison_exp | null;
  fullName?: String_comparison_exp | null;
  organisationId?: Int_comparison_exp | null;
  phoneNumber?: String_comparison_exp | null;
  userId?: Int_comparison_exp | null;
  userRole?: String_comparison_exp | null;
}

/**
 * input type for inserting data into table "az_users.Users"
 */
export interface az_users_Users_insert_input {
  AuthDatum?: az_users_AuthData_obj_rel_insert_input | null;
  Document?: az_docs_Documents_obj_rel_insert_input | null;
  Organisation?: az_users_Organisation_obj_rel_insert_input | null;
  UsageLogs?: az_users_UsageLog_arr_rel_insert_input | null;
  documentId?: number | null;
  email?: string | null;
  fullName?: string | null;
  organisationId?: number | null;
  phoneNumber?: string | null;
  userId?: number | null;
  userRole?: string | null;
}

/**
 * input type for inserting object relation for remote table "az_users.Users"
 */
export interface az_users_Users_obj_rel_insert_input {
  data: az_users_Users_insert_input;
  on_conflict?: az_users_Users_on_conflict | null;
}

/**
 * on conflict condition type for table "az_users.Users"
 */
export interface az_users_Users_on_conflict {
  constraint: az_users_Users_constraint;
  update_columns: az_users_Users_update_column[];
  where?: az_users_Users_bool_exp | null;
}

/**
 * expression to compare columns of type bpchar. All fields are combined with logical 'AND'.
 */
export interface bpchar_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * expression to compare columns of type float8. All fields are combined with logical 'AND'.
 */
export interface float8_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * expression to compare columns of type measurement_unit. All fields are combined with logical 'AND'.
 */
export interface measurement_unit_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * expression to compare columns of type point. All fields are combined with logical 'AND'.
 */
export interface point_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * expression to compare columns of type service_type. All fields are combined with logical 'AND'.
 */
export interface service_type_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * expression to compare columns of type timestamp. All fields are combined with logical 'AND'.
 */
export interface timestamp_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
