/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum az_docs_Documents_constraint {
  Documents_pkey = "Documents_pkey",
}

export enum az_docs_Documents_update_column {
  documentBody = "documentBody",
  documentId = "documentId",
  documentType = "documentType",
}

export enum az_docs_Photo_constraint {
  Photo_pkey = "Photo_pkey",
}

export enum az_docs_Photo_update_column {
  photoId = "photoId",
  photoSeries = "photoSeries",
}

export enum az_docs_e_document_type_constraint {
  e_document_type_pkey = "e_document_type_pkey",
}

export enum az_docs_e_document_type_enum {
  Location = "Location",
  Organisation = "Organisation",
  Sensor = "Sensor",
  Service = "Service",
  User = "User",
}

export enum az_docs_e_document_type_update_column {
  description = "description",
  value = "value",
}

export enum az_sensors_Locations_constraint {
  Locations_pkey = "Locations_pkey",
}

export enum az_sensors_Locations_update_column {
  address = "address",
  airlyLink = "airlyLink",
  documentId = "documentId",
  elevation = "elevation",
  locationId = "locationId",
  locationPoint = "locationPoint",
  mapsLink = "mapsLink",
}

export enum az_sensors_PollutionFactors_constraint {
  PollutionFactors_pkey = "PollutionFactors_pkey",
}

export enum az_sensors_PollutionFactors_update_column {
  factorId = "factorId",
  label = "label",
  name = "name",
  unit = "unit",
}

export enum az_sensors_SensorFactors_constraint {
  SensorFactors_sensorId_factorId_key = "SensorFactors_sensorId_factorId_key",
}

export enum az_sensors_SensorFactors_update_column {
  factorId = "factorId",
  sensorId = "sensorId",
}

export enum az_sensors_Sensors_constraint {
  Sensors_pkey = "Sensors_pkey",
  Sensors_sensorId_locationId_key = "Sensors_sensorId_locationId_key",
}

export enum az_sensors_Sensors_update_column {
  locationId = "locationId",
  manufacturer = "manufacturer",
  model = "model",
  sensorId = "sensorId",
}

export enum az_sensors_e_measurement_unit_constraint {
  e_measurement_unit_pkey = "e_measurement_unit_pkey",
}

export enum az_sensors_e_measurement_unit_enum {
  celsium = "celsium",
  degree = "degree",
  hPa = "hPa",
  kmph = "kmph",
  mcgpcm = "mcgpcm",
  percent = "percent",
}

export enum az_sensors_e_measurement_unit_update_column {
  description = "description",
  value = "value",
}

export enum az_sensors_e_service_type_constraint {
  e_service_type_pkey = "e_service_type_pkey",
}

export enum az_sensors_e_service_type_enum {
  Planned = "Planned",
  Replacement = "Replacement",
  Unscheduled = "Unscheduled",
}

export enum az_sensors_e_service_type_update_column {
  description = "description",
  value = "value",
}

export enum az_users_AuthData_constraint {
  AuthData_pkey = "AuthData_pkey",
}

export enum az_users_AuthData_update_column {
  password = "password",
  userId = "userId",
}

export enum az_users_Organisation_constraint {
  Organisation_pkey = "Organisation_pkey",
  Organisation_rntrc_key = "Organisation_rntrc_key",
}

export enum az_users_Organisation_update_column {
  country = "country",
  documentId = "documentId",
  fullName = "fullName",
  organisationId = "organisationId",
  organisationRole = "organisationRole",
  rntrc = "rntrc",
  shortName = "shortName",
}

export enum az_users_Users_constraint {
  Users_email_key = "Users_email_key",
  Users_phoneNumber_key = "Users_phoneNumber_key",
  Users_pkey = "Users_pkey",
}

export enum az_users_Users_update_column {
  documentId = "documentId",
  email = "email",
  fullName = "fullName",
  organisationId = "organisationId",
  phoneNumber = "phoneNumber",
  userId = "userId",
  userRole = "userRole",
}

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

export interface az_docs_Documents_arr_rel_insert_input {
  data: az_docs_Documents_insert_input[];
  on_conflict?: az_docs_Documents_on_conflict | null;
}

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
  documentType?: az_docs_e_document_type_enum_comparison_exp | null;
  e_document_type?: az_docs_e_document_type_bool_exp | null;
}

export interface az_docs_Documents_insert_input {
  Locations?: az_sensors_Locations_arr_rel_insert_input | null;
  Organisations?: az_users_Organisation_arr_rel_insert_input | null;
  ServiceLogs?: az_sensors_ServiceLog_arr_rel_insert_input | null;
  Users?: az_users_Users_arr_rel_insert_input | null;
  documentBody?: string | null;
  documentId?: number | null;
  documentType?: az_docs_e_document_type_enum | null;
  e_document_type?: az_docs_e_document_type_obj_rel_insert_input | null;
}

export interface az_docs_Documents_obj_rel_insert_input {
  data: az_docs_Documents_insert_input;
  on_conflict?: az_docs_Documents_on_conflict | null;
}

export interface az_docs_Documents_on_conflict {
  constraint: az_docs_Documents_constraint;
  update_columns: az_docs_Documents_update_column[];
  where?: az_docs_Documents_bool_exp | null;
}

export interface az_docs_Photo_bool_exp {
  ServiceLogs?: az_sensors_ServiceLog_bool_exp | null;
  _and?: (az_docs_Photo_bool_exp | null)[] | null;
  _not?: az_docs_Photo_bool_exp | null;
  _or?: (az_docs_Photo_bool_exp | null)[] | null;
  photoId?: Int_comparison_exp | null;
  photoSeries?: _bytea_comparison_exp | null;
}

export interface az_docs_Photo_insert_input {
  ServiceLogs?: az_sensors_ServiceLog_arr_rel_insert_input | null;
  photoId?: number | null;
  photoSeries?: any | null;
}

export interface az_docs_Photo_obj_rel_insert_input {
  data: az_docs_Photo_insert_input;
  on_conflict?: az_docs_Photo_on_conflict | null;
}

export interface az_docs_Photo_on_conflict {
  constraint: az_docs_Photo_constraint;
  update_columns: az_docs_Photo_update_column[];
  where?: az_docs_Photo_bool_exp | null;
}

export interface az_docs_e_document_type_bool_exp {
  Documents?: az_docs_Documents_bool_exp | null;
  _and?: (az_docs_e_document_type_bool_exp | null)[] | null;
  _not?: az_docs_e_document_type_bool_exp | null;
  _or?: (az_docs_e_document_type_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  value?: String_comparison_exp | null;
}

export interface az_docs_e_document_type_enum_comparison_exp {
  _eq?: az_docs_e_document_type_enum | null;
  _in?: az_docs_e_document_type_enum[] | null;
  _is_null?: boolean | null;
  _neq?: az_docs_e_document_type_enum | null;
  _nin?: az_docs_e_document_type_enum[] | null;
}

export interface az_docs_e_document_type_insert_input {
  Documents?: az_docs_Documents_arr_rel_insert_input | null;
  description?: string | null;
  value?: string | null;
}

export interface az_docs_e_document_type_obj_rel_insert_input {
  data: az_docs_e_document_type_insert_input;
  on_conflict?: az_docs_e_document_type_on_conflict | null;
}

export interface az_docs_e_document_type_on_conflict {
  constraint: az_docs_e_document_type_constraint;
  update_columns: az_docs_e_document_type_update_column[];
  where?: az_docs_e_document_type_bool_exp | null;
}

export interface az_sensors_Locations_arr_rel_insert_input {
  data: az_sensors_Locations_insert_input[];
  on_conflict?: az_sensors_Locations_on_conflict | null;
}

export interface az_sensors_Locations_bool_exp {
  Document?: az_docs_Documents_bool_exp | null;
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

export interface az_sensors_Locations_insert_input {
  Document?: az_docs_Documents_obj_rel_insert_input | null;
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

export interface az_sensors_Locations_obj_rel_insert_input {
  data: az_sensors_Locations_insert_input;
  on_conflict?: az_sensors_Locations_on_conflict | null;
}

export interface az_sensors_Locations_on_conflict {
  constraint: az_sensors_Locations_constraint;
  update_columns: az_sensors_Locations_update_column[];
  where?: az_sensors_Locations_bool_exp | null;
}

export interface az_sensors_PollutionFactors_arr_rel_insert_input {
  data: az_sensors_PollutionFactors_insert_input[];
  on_conflict?: az_sensors_PollutionFactors_on_conflict | null;
}

export interface az_sensors_PollutionFactors_bool_exp {
  SensorFactors?: az_sensors_SensorFactors_bool_exp | null;
  _and?: (az_sensors_PollutionFactors_bool_exp | null)[] | null;
  _not?: az_sensors_PollutionFactors_bool_exp | null;
  _or?: (az_sensors_PollutionFactors_bool_exp | null)[] | null;
  e_measurement_unit?: az_sensors_e_measurement_unit_bool_exp | null;
  factorId?: Int_comparison_exp | null;
  label?: String_comparison_exp | null;
  name?: String_comparison_exp | null;
  unit?: az_sensors_e_measurement_unit_enum_comparison_exp | null;
}

export interface az_sensors_PollutionFactors_insert_input {
  SensorFactors?: az_sensors_SensorFactors_arr_rel_insert_input | null;
  e_measurement_unit?: az_sensors_e_measurement_unit_obj_rel_insert_input | null;
  factorId?: number | null;
  label?: string | null;
  name?: string | null;
  unit?: az_sensors_e_measurement_unit_enum | null;
}

export interface az_sensors_PollutionFactors_obj_rel_insert_input {
  data: az_sensors_PollutionFactors_insert_input;
  on_conflict?: az_sensors_PollutionFactors_on_conflict | null;
}

export interface az_sensors_PollutionFactors_on_conflict {
  constraint: az_sensors_PollutionFactors_constraint;
  update_columns: az_sensors_PollutionFactors_update_column[];
  where?: az_sensors_PollutionFactors_bool_exp | null;
}

export interface az_sensors_SensorFactors_arr_rel_insert_input {
  data: az_sensors_SensorFactors_insert_input[];
  on_conflict?: az_sensors_SensorFactors_on_conflict | null;
}

export interface az_sensors_SensorFactors_bool_exp {
  PollutionFactor?: az_sensors_PollutionFactors_bool_exp | null;
  Sensor?: az_sensors_Sensors_bool_exp | null;
  _and?: (az_sensors_SensorFactors_bool_exp | null)[] | null;
  _not?: az_sensors_SensorFactors_bool_exp | null;
  _or?: (az_sensors_SensorFactors_bool_exp | null)[] | null;
  factorId?: Int_comparison_exp | null;
  sensorId?: Int_comparison_exp | null;
}

export interface az_sensors_SensorFactors_insert_input {
  PollutionFactor?: az_sensors_PollutionFactors_obj_rel_insert_input | null;
  Sensor?: az_sensors_Sensors_obj_rel_insert_input | null;
  factorId?: number | null;
  sensorId?: number | null;
}

export interface az_sensors_SensorFactors_on_conflict {
  constraint: az_sensors_SensorFactors_constraint;
  update_columns: az_sensors_SensorFactors_update_column[];
  where?: az_sensors_SensorFactors_bool_exp | null;
}

export interface az_sensors_Sensors_arr_rel_insert_input {
  data: az_sensors_Sensors_insert_input[];
  on_conflict?: az_sensors_Sensors_on_conflict | null;
}

export interface az_sensors_Sensors_bool_exp {
  Location?: az_sensors_Locations_bool_exp | null;
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

export interface az_sensors_Sensors_insert_input {
  Location?: az_sensors_Locations_obj_rel_insert_input | null;
  SensorFactors?: az_sensors_SensorFactors_arr_rel_insert_input | null;
  ServiceLogs?: az_sensors_ServiceLog_arr_rel_insert_input | null;
  locationId?: number | null;
  manufacturer?: string | null;
  model?: string | null;
  sensorId?: number | null;
}

export interface az_sensors_Sensors_obj_rel_insert_input {
  data: az_sensors_Sensors_insert_input;
  on_conflict?: az_sensors_Sensors_on_conflict | null;
}

export interface az_sensors_Sensors_on_conflict {
  constraint: az_sensors_Sensors_constraint;
  update_columns: az_sensors_Sensors_update_column[];
  where?: az_sensors_Sensors_bool_exp | null;
}

export interface az_sensors_ServiceLog_arr_rel_insert_input {
  data: az_sensors_ServiceLog_insert_input[];
}

export interface az_sensors_ServiceLog_bool_exp {
  Document?: az_docs_Documents_bool_exp | null;
  Location?: az_sensors_Locations_bool_exp | null;
  Photo?: az_docs_Photo_bool_exp | null;
  Sensor?: az_sensors_Sensors_bool_exp | null;
  _and?: (az_sensors_ServiceLog_bool_exp | null)[] | null;
  _not?: az_sensors_ServiceLog_bool_exp | null;
  _or?: (az_sensors_ServiceLog_bool_exp | null)[] | null;
  documentId?: Int_comparison_exp | null;
  e_service_type?: az_sensors_e_service_type_bool_exp | null;
  locationId?: Int_comparison_exp | null;
  photoId?: Int_comparison_exp | null;
  sensorId?: Int_comparison_exp | null;
  serviceType?: az_sensors_e_service_type_enum_comparison_exp | null;
  timestamp?: timestamp_comparison_exp | null;
}

export interface az_sensors_ServiceLog_insert_input {
  Document?: az_docs_Documents_obj_rel_insert_input | null;
  Location?: az_sensors_Locations_obj_rel_insert_input | null;
  Photo?: az_docs_Photo_obj_rel_insert_input | null;
  Sensor?: az_sensors_Sensors_obj_rel_insert_input | null;
  documentId?: number | null;
  e_service_type?: az_sensors_e_service_type_obj_rel_insert_input | null;
  locationId?: number | null;
  photoId?: number | null;
  sensorId?: number | null;
  serviceType?: az_sensors_e_service_type_enum | null;
  timestamp?: any | null;
}

export interface az_sensors_e_measurement_unit_bool_exp {
  PollutionFactors?: az_sensors_PollutionFactors_bool_exp | null;
  _and?: (az_sensors_e_measurement_unit_bool_exp | null)[] | null;
  _not?: az_sensors_e_measurement_unit_bool_exp | null;
  _or?: (az_sensors_e_measurement_unit_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  value?: String_comparison_exp | null;
}

export interface az_sensors_e_measurement_unit_enum_comparison_exp {
  _eq?: az_sensors_e_measurement_unit_enum | null;
  _in?: az_sensors_e_measurement_unit_enum[] | null;
  _is_null?: boolean | null;
  _neq?: az_sensors_e_measurement_unit_enum | null;
  _nin?: az_sensors_e_measurement_unit_enum[] | null;
}

export interface az_sensors_e_measurement_unit_insert_input {
  PollutionFactors?: az_sensors_PollutionFactors_arr_rel_insert_input | null;
  description?: string | null;
  value?: string | null;
}

export interface az_sensors_e_measurement_unit_obj_rel_insert_input {
  data: az_sensors_e_measurement_unit_insert_input;
  on_conflict?: az_sensors_e_measurement_unit_on_conflict | null;
}

export interface az_sensors_e_measurement_unit_on_conflict {
  constraint: az_sensors_e_measurement_unit_constraint;
  update_columns: az_sensors_e_measurement_unit_update_column[];
  where?: az_sensors_e_measurement_unit_bool_exp | null;
}

export interface az_sensors_e_service_type_bool_exp {
  ServiceLogs?: az_sensors_ServiceLog_bool_exp | null;
  _and?: (az_sensors_e_service_type_bool_exp | null)[] | null;
  _not?: az_sensors_e_service_type_bool_exp | null;
  _or?: (az_sensors_e_service_type_bool_exp | null)[] | null;
  description?: String_comparison_exp | null;
  value?: String_comparison_exp | null;
}

export interface az_sensors_e_service_type_enum_comparison_exp {
  _eq?: az_sensors_e_service_type_enum | null;
  _in?: az_sensors_e_service_type_enum[] | null;
  _is_null?: boolean | null;
  _neq?: az_sensors_e_service_type_enum | null;
  _nin?: az_sensors_e_service_type_enum[] | null;
}

export interface az_sensors_e_service_type_insert_input {
  ServiceLogs?: az_sensors_ServiceLog_arr_rel_insert_input | null;
  description?: string | null;
  value?: string | null;
}

export interface az_sensors_e_service_type_obj_rel_insert_input {
  data: az_sensors_e_service_type_insert_input;
  on_conflict?: az_sensors_e_service_type_on_conflict | null;
}

export interface az_sensors_e_service_type_on_conflict {
  constraint: az_sensors_e_service_type_constraint;
  update_columns: az_sensors_e_service_type_update_column[];
  where?: az_sensors_e_service_type_bool_exp | null;
}

export interface az_users_AuthData_arr_rel_insert_input {
  data: az_users_AuthData_insert_input[];
  on_conflict?: az_users_AuthData_on_conflict | null;
}

export interface az_users_AuthData_bool_exp {
  User?: az_users_Users_bool_exp | null;
  _and?: (az_users_AuthData_bool_exp | null)[] | null;
  _not?: az_users_AuthData_bool_exp | null;
  _or?: (az_users_AuthData_bool_exp | null)[] | null;
  password?: String_comparison_exp | null;
  userId?: Int_comparison_exp | null;
}

export interface az_users_AuthData_insert_input {
  User?: az_users_Users_obj_rel_insert_input | null;
  password?: string | null;
  userId?: number | null;
}

export interface az_users_AuthData_on_conflict {
  constraint: az_users_AuthData_constraint;
  update_columns: az_users_AuthData_update_column[];
  where?: az_users_AuthData_bool_exp | null;
}

export interface az_users_Organisation_arr_rel_insert_input {
  data: az_users_Organisation_insert_input[];
  on_conflict?: az_users_Organisation_on_conflict | null;
}

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
  rntrc?: String_comparison_exp | null;
  shortName?: String_comparison_exp | null;
}

export interface az_users_Organisation_insert_input {
  Document?: az_docs_Documents_obj_rel_insert_input | null;
  Users?: az_users_Users_arr_rel_insert_input | null;
  country?: string | null;
  documentId?: number | null;
  fullName?: string | null;
  organisationId?: number | null;
  organisationRole?: string | null;
  rntrc?: string | null;
  shortName?: string | null;
}

export interface az_users_Organisation_obj_rel_insert_input {
  data: az_users_Organisation_insert_input;
  on_conflict?: az_users_Organisation_on_conflict | null;
}

export interface az_users_Organisation_on_conflict {
  constraint: az_users_Organisation_constraint;
  update_columns: az_users_Organisation_update_column[];
  where?: az_users_Organisation_bool_exp | null;
}

export interface az_users_UsageLog_arr_rel_insert_input {
  data: az_users_UsageLog_insert_input[];
}

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

export interface az_users_UsageLog_insert_input {
  User?: az_users_Users_obj_rel_insert_input | null;
  query?: string | null;
  queryType?: any | null;
  timestamp?: any | null;
  userId?: number | null;
}

export interface az_users_Users_arr_rel_insert_input {
  data: az_users_Users_insert_input[];
  on_conflict?: az_users_Users_on_conflict | null;
}

export interface az_users_Users_bool_exp {
  AuthData?: az_users_AuthData_bool_exp | null;
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

export interface az_users_Users_insert_input {
  AuthData?: az_users_AuthData_arr_rel_insert_input | null;
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

export interface az_users_Users_obj_rel_insert_input {
  data: az_users_Users_insert_input;
  on_conflict?: az_users_Users_on_conflict | null;
}

export interface az_users_Users_on_conflict {
  constraint: az_users_Users_constraint;
  update_columns: az_users_Users_update_column[];
  where?: az_users_Users_bool_exp | null;
}

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
