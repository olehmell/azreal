import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _bytea: any;
  _measurement_value: any;
  bpchar: any;
  float8: any;
  measurement_unit: any;
  measurement_value: any;
  point: any;
  service_type: any;
  timestamp: any;
};


export type _Bytea_Comparison_Exp = {
  _eq?: Maybe<Scalars['_bytea']>;
  _gt?: Maybe<Scalars['_bytea']>;
  _gte?: Maybe<Scalars['_bytea']>;
  _in?: Maybe<Array<Scalars['_bytea']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_bytea']>;
  _lte?: Maybe<Scalars['_bytea']>;
  _neq?: Maybe<Scalars['_bytea']>;
  _nin?: Maybe<Array<Scalars['_bytea']>>;
};


export type _Measurement_Value_Comparison_Exp = {
  _eq?: Maybe<Scalars['_measurement_value']>;
  _gt?: Maybe<Scalars['_measurement_value']>;
  _gte?: Maybe<Scalars['_measurement_value']>;
  _in?: Maybe<Array<Scalars['_measurement_value']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['_measurement_value']>;
  _lte?: Maybe<Scalars['_measurement_value']>;
  _neq?: Maybe<Scalars['_measurement_value']>;
  _nin?: Maybe<Array<Scalars['_measurement_value']>>;
};

export type Az_Docs_Documents = {
  __typename?: 'az_docs_Documents';
  documentBody?: Maybe<Scalars['String']>;
  documentId: Scalars['Int'];
};

export type Az_Docs_Documents_Aggregate = {
  __typename?: 'az_docs_Documents_aggregate';
  aggregate?: Maybe<Az_Docs_Documents_Aggregate_Fields>;
  nodes: Array<Az_Docs_Documents>;
};

export type Az_Docs_Documents_Aggregate_Fields = {
  __typename?: 'az_docs_Documents_aggregate_fields';
  avg?: Maybe<Az_Docs_Documents_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Az_Docs_Documents_Max_Fields>;
  min?: Maybe<Az_Docs_Documents_Min_Fields>;
  stddev?: Maybe<Az_Docs_Documents_Stddev_Fields>;
  stddev_pop?: Maybe<Az_Docs_Documents_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Az_Docs_Documents_Stddev_Samp_Fields>;
  sum?: Maybe<Az_Docs_Documents_Sum_Fields>;
  var_pop?: Maybe<Az_Docs_Documents_Var_Pop_Fields>;
  var_samp?: Maybe<Az_Docs_Documents_Var_Samp_Fields>;
  variance?: Maybe<Az_Docs_Documents_Variance_Fields>;
};


export type Az_Docs_Documents_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Az_Docs_Documents_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Az_Docs_Documents_Aggregate_Order_By = {
  avg?: Maybe<Az_Docs_Documents_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Az_Docs_Documents_Max_Order_By>;
  min?: Maybe<Az_Docs_Documents_Min_Order_By>;
  stddev?: Maybe<Az_Docs_Documents_Stddev_Order_By>;
  stddev_pop?: Maybe<Az_Docs_Documents_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Az_Docs_Documents_Stddev_Samp_Order_By>;
  sum?: Maybe<Az_Docs_Documents_Sum_Order_By>;
  var_pop?: Maybe<Az_Docs_Documents_Var_Pop_Order_By>;
  var_samp?: Maybe<Az_Docs_Documents_Var_Samp_Order_By>;
  variance?: Maybe<Az_Docs_Documents_Variance_Order_By>;
};

export type Az_Docs_Documents_Arr_Rel_Insert_Input = {
  data: Array<Az_Docs_Documents_Insert_Input>;
  on_conflict?: Maybe<Az_Docs_Documents_On_Conflict>;
};

export type Az_Docs_Documents_Avg_Fields = {
  __typename?: 'az_docs_Documents_avg_fields';
  documentId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Documents_Avg_Order_By = {
  documentId?: Maybe<Order_By>;
};

export type Az_Docs_Documents_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Az_Docs_Documents_Bool_Exp>>>;
  _not?: Maybe<Az_Docs_Documents_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Az_Docs_Documents_Bool_Exp>>>;
  documentBody?: Maybe<String_Comparison_Exp>;
  documentId?: Maybe<Int_Comparison_Exp>;
};

export enum Az_Docs_Documents_Constraint {
  DocumentsPkey = 'Documents_pkey'
}

export type Az_Docs_Documents_Inc_Input = {
  documentId?: Maybe<Scalars['Int']>;
};

export type Az_Docs_Documents_Insert_Input = {
  documentBody?: Maybe<Scalars['String']>;
  documentId?: Maybe<Scalars['Int']>;
};

export type Az_Docs_Documents_Max_Fields = {
  __typename?: 'az_docs_Documents_max_fields';
  documentBody?: Maybe<Scalars['String']>;
  documentId?: Maybe<Scalars['Int']>;
};

export type Az_Docs_Documents_Max_Order_By = {
  documentBody?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
};

export type Az_Docs_Documents_Min_Fields = {
  __typename?: 'az_docs_Documents_min_fields';
  documentBody?: Maybe<Scalars['String']>;
  documentId?: Maybe<Scalars['Int']>;
};

export type Az_Docs_Documents_Min_Order_By = {
  documentBody?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
};

export type Az_Docs_Documents_Mutation_Response = {
  __typename?: 'az_docs_Documents_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Az_Docs_Documents>;
};

export type Az_Docs_Documents_Obj_Rel_Insert_Input = {
  data: Az_Docs_Documents_Insert_Input;
  on_conflict?: Maybe<Az_Docs_Documents_On_Conflict>;
};

export type Az_Docs_Documents_On_Conflict = {
  constraint: Az_Docs_Documents_Constraint;
  update_columns: Array<Az_Docs_Documents_Update_Column>;
  where?: Maybe<Az_Docs_Documents_Bool_Exp>;
};

export type Az_Docs_Documents_Order_By = {
  documentBody?: Maybe<Order_By>;
  documentId?: Maybe<Order_By>;
};

export type Az_Docs_Documents_Pk_Columns_Input = {
  documentId: Scalars['Int'];
};

export enum Az_Docs_Documents_Select_Column {
  DocumentBody = 'documentBody',
  DocumentId = 'documentId'
}

export type Az_Docs_Documents_Set_Input = {
  documentBody?: Maybe<Scalars['String']>;
  documentId?: Maybe<Scalars['Int']>;
};

export type Az_Docs_Documents_Stddev_Fields = {
  __typename?: 'az_docs_Documents_stddev_fields';
  documentId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Documents_Stddev_Order_By = {
  documentId?: Maybe<Order_By>;
};

export type Az_Docs_Documents_Stddev_Pop_Fields = {
  __typename?: 'az_docs_Documents_stddev_pop_fields';
  documentId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Documents_Stddev_Pop_Order_By = {
  documentId?: Maybe<Order_By>;
};

export type Az_Docs_Documents_Stddev_Samp_Fields = {
  __typename?: 'az_docs_Documents_stddev_samp_fields';
  documentId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Documents_Stddev_Samp_Order_By = {
  documentId?: Maybe<Order_By>;
};

export type Az_Docs_Documents_Sum_Fields = {
  __typename?: 'az_docs_Documents_sum_fields';
  documentId?: Maybe<Scalars['Int']>;
};

export type Az_Docs_Documents_Sum_Order_By = {
  documentId?: Maybe<Order_By>;
};

export enum Az_Docs_Documents_Update_Column {
  DocumentBody = 'documentBody',
  DocumentId = 'documentId'
}

export type Az_Docs_Documents_Var_Pop_Fields = {
  __typename?: 'az_docs_Documents_var_pop_fields';
  documentId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Documents_Var_Pop_Order_By = {
  documentId?: Maybe<Order_By>;
};

export type Az_Docs_Documents_Var_Samp_Fields = {
  __typename?: 'az_docs_Documents_var_samp_fields';
  documentId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Documents_Var_Samp_Order_By = {
  documentId?: Maybe<Order_By>;
};

export type Az_Docs_Documents_Variance_Fields = {
  __typename?: 'az_docs_Documents_variance_fields';
  documentId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Documents_Variance_Order_By = {
  documentId?: Maybe<Order_By>;
};

export type Az_Docs_Photo = {
  __typename?: 'az_docs_Photo';
  photoId: Scalars['Int'];
  photoSeries: Scalars['_bytea'];
};

export type Az_Docs_Photo_Aggregate = {
  __typename?: 'az_docs_Photo_aggregate';
  aggregate?: Maybe<Az_Docs_Photo_Aggregate_Fields>;
  nodes: Array<Az_Docs_Photo>;
};

export type Az_Docs_Photo_Aggregate_Fields = {
  __typename?: 'az_docs_Photo_aggregate_fields';
  avg?: Maybe<Az_Docs_Photo_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Az_Docs_Photo_Max_Fields>;
  min?: Maybe<Az_Docs_Photo_Min_Fields>;
  stddev?: Maybe<Az_Docs_Photo_Stddev_Fields>;
  stddev_pop?: Maybe<Az_Docs_Photo_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Az_Docs_Photo_Stddev_Samp_Fields>;
  sum?: Maybe<Az_Docs_Photo_Sum_Fields>;
  var_pop?: Maybe<Az_Docs_Photo_Var_Pop_Fields>;
  var_samp?: Maybe<Az_Docs_Photo_Var_Samp_Fields>;
  variance?: Maybe<Az_Docs_Photo_Variance_Fields>;
};


export type Az_Docs_Photo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Az_Docs_Photo_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Az_Docs_Photo_Aggregate_Order_By = {
  avg?: Maybe<Az_Docs_Photo_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Az_Docs_Photo_Max_Order_By>;
  min?: Maybe<Az_Docs_Photo_Min_Order_By>;
  stddev?: Maybe<Az_Docs_Photo_Stddev_Order_By>;
  stddev_pop?: Maybe<Az_Docs_Photo_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Az_Docs_Photo_Stddev_Samp_Order_By>;
  sum?: Maybe<Az_Docs_Photo_Sum_Order_By>;
  var_pop?: Maybe<Az_Docs_Photo_Var_Pop_Order_By>;
  var_samp?: Maybe<Az_Docs_Photo_Var_Samp_Order_By>;
  variance?: Maybe<Az_Docs_Photo_Variance_Order_By>;
};

export type Az_Docs_Photo_Arr_Rel_Insert_Input = {
  data: Array<Az_Docs_Photo_Insert_Input>;
  on_conflict?: Maybe<Az_Docs_Photo_On_Conflict>;
};

export type Az_Docs_Photo_Avg_Fields = {
  __typename?: 'az_docs_Photo_avg_fields';
  photoId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Photo_Avg_Order_By = {
  photoId?: Maybe<Order_By>;
};

export type Az_Docs_Photo_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Az_Docs_Photo_Bool_Exp>>>;
  _not?: Maybe<Az_Docs_Photo_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Az_Docs_Photo_Bool_Exp>>>;
  photoId?: Maybe<Int_Comparison_Exp>;
  photoSeries?: Maybe<_Bytea_Comparison_Exp>;
};

export enum Az_Docs_Photo_Constraint {
  PhotoPkey = 'Photo_pkey'
}

export type Az_Docs_Photo_Inc_Input = {
  photoId?: Maybe<Scalars['Int']>;
};

export type Az_Docs_Photo_Insert_Input = {
  photoId?: Maybe<Scalars['Int']>;
  photoSeries?: Maybe<Scalars['_bytea']>;
};

export type Az_Docs_Photo_Max_Fields = {
  __typename?: 'az_docs_Photo_max_fields';
  photoId?: Maybe<Scalars['Int']>;
};

export type Az_Docs_Photo_Max_Order_By = {
  photoId?: Maybe<Order_By>;
};

export type Az_Docs_Photo_Min_Fields = {
  __typename?: 'az_docs_Photo_min_fields';
  photoId?: Maybe<Scalars['Int']>;
};

export type Az_Docs_Photo_Min_Order_By = {
  photoId?: Maybe<Order_By>;
};

export type Az_Docs_Photo_Mutation_Response = {
  __typename?: 'az_docs_Photo_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Az_Docs_Photo>;
};

export type Az_Docs_Photo_Obj_Rel_Insert_Input = {
  data: Az_Docs_Photo_Insert_Input;
  on_conflict?: Maybe<Az_Docs_Photo_On_Conflict>;
};

export type Az_Docs_Photo_On_Conflict = {
  constraint: Az_Docs_Photo_Constraint;
  update_columns: Array<Az_Docs_Photo_Update_Column>;
  where?: Maybe<Az_Docs_Photo_Bool_Exp>;
};

export type Az_Docs_Photo_Order_By = {
  photoId?: Maybe<Order_By>;
  photoSeries?: Maybe<Order_By>;
};

export type Az_Docs_Photo_Pk_Columns_Input = {
  photoId: Scalars['Int'];
};

export enum Az_Docs_Photo_Select_Column {
  PhotoId = 'photoId',
  PhotoSeries = 'photoSeries'
}

export type Az_Docs_Photo_Set_Input = {
  photoId?: Maybe<Scalars['Int']>;
  photoSeries?: Maybe<Scalars['_bytea']>;
};

export type Az_Docs_Photo_Stddev_Fields = {
  __typename?: 'az_docs_Photo_stddev_fields';
  photoId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Photo_Stddev_Order_By = {
  photoId?: Maybe<Order_By>;
};

export type Az_Docs_Photo_Stddev_Pop_Fields = {
  __typename?: 'az_docs_Photo_stddev_pop_fields';
  photoId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Photo_Stddev_Pop_Order_By = {
  photoId?: Maybe<Order_By>;
};

export type Az_Docs_Photo_Stddev_Samp_Fields = {
  __typename?: 'az_docs_Photo_stddev_samp_fields';
  photoId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Photo_Stddev_Samp_Order_By = {
  photoId?: Maybe<Order_By>;
};

export type Az_Docs_Photo_Sum_Fields = {
  __typename?: 'az_docs_Photo_sum_fields';
  photoId?: Maybe<Scalars['Int']>;
};

export type Az_Docs_Photo_Sum_Order_By = {
  photoId?: Maybe<Order_By>;
};

export enum Az_Docs_Photo_Update_Column {
  PhotoId = 'photoId',
  PhotoSeries = 'photoSeries'
}

export type Az_Docs_Photo_Var_Pop_Fields = {
  __typename?: 'az_docs_Photo_var_pop_fields';
  photoId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Photo_Var_Pop_Order_By = {
  photoId?: Maybe<Order_By>;
};

export type Az_Docs_Photo_Var_Samp_Fields = {
  __typename?: 'az_docs_Photo_var_samp_fields';
  photoId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Photo_Var_Samp_Order_By = {
  photoId?: Maybe<Order_By>;
};

export type Az_Docs_Photo_Variance_Fields = {
  __typename?: 'az_docs_Photo_variance_fields';
  photoId?: Maybe<Scalars['Float']>;
};

export type Az_Docs_Photo_Variance_Order_By = {
  photoId?: Maybe<Order_By>;
};

export type Az_Measurements_Measurements = {
  __typename?: 'az_measurements_Measurements';
  Location: Az_Sensors_Locations;
  Sensor: Az_Sensors_Sensors;
  locationId: Scalars['Int'];
  sensorId: Scalars['Int'];
  timestamp: Scalars['timestamp'];
  values: Scalars['_measurement_value'];
};

export type Az_Measurements_Measurements_Aggregate = {
  __typename?: 'az_measurements_Measurements_aggregate';
  aggregate?: Maybe<Az_Measurements_Measurements_Aggregate_Fields>;
  nodes: Array<Az_Measurements_Measurements>;
};

export type Az_Measurements_Measurements_Aggregate_Fields = {
  __typename?: 'az_measurements_Measurements_aggregate_fields';
  avg?: Maybe<Az_Measurements_Measurements_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Az_Measurements_Measurements_Max_Fields>;
  min?: Maybe<Az_Measurements_Measurements_Min_Fields>;
  stddev?: Maybe<Az_Measurements_Measurements_Stddev_Fields>;
  stddev_pop?: Maybe<Az_Measurements_Measurements_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Az_Measurements_Measurements_Stddev_Samp_Fields>;
  sum?: Maybe<Az_Measurements_Measurements_Sum_Fields>;
  var_pop?: Maybe<Az_Measurements_Measurements_Var_Pop_Fields>;
  var_samp?: Maybe<Az_Measurements_Measurements_Var_Samp_Fields>;
  variance?: Maybe<Az_Measurements_Measurements_Variance_Fields>;
};


export type Az_Measurements_Measurements_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Az_Measurements_Measurements_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Az_Measurements_Measurements_Aggregate_Order_By = {
  avg?: Maybe<Az_Measurements_Measurements_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Az_Measurements_Measurements_Max_Order_By>;
  min?: Maybe<Az_Measurements_Measurements_Min_Order_By>;
  stddev?: Maybe<Az_Measurements_Measurements_Stddev_Order_By>;
  stddev_pop?: Maybe<Az_Measurements_Measurements_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Az_Measurements_Measurements_Stddev_Samp_Order_By>;
  sum?: Maybe<Az_Measurements_Measurements_Sum_Order_By>;
  var_pop?: Maybe<Az_Measurements_Measurements_Var_Pop_Order_By>;
  var_samp?: Maybe<Az_Measurements_Measurements_Var_Samp_Order_By>;
  variance?: Maybe<Az_Measurements_Measurements_Variance_Order_By>;
};

export type Az_Measurements_Measurements_Arr_Rel_Insert_Input = {
  data: Array<Az_Measurements_Measurements_Insert_Input>;
};

export type Az_Measurements_Measurements_Avg_Fields = {
  __typename?: 'az_measurements_Measurements_avg_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Measurements_Measurements_Avg_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Measurements_Measurements_Bool_Exp = {
  Location?: Maybe<Az_Sensors_Locations_Bool_Exp>;
  Sensor?: Maybe<Az_Sensors_Sensors_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Az_Measurements_Measurements_Bool_Exp>>>;
  _not?: Maybe<Az_Measurements_Measurements_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Az_Measurements_Measurements_Bool_Exp>>>;
  locationId?: Maybe<Int_Comparison_Exp>;
  sensorId?: Maybe<Int_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  values?: Maybe<_Measurement_Value_Comparison_Exp>;
};

export type Az_Measurements_Measurements_Inc_Input = {
  locationId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Measurements_Measurements_Insert_Input = {
  Location?: Maybe<Az_Sensors_Locations_Obj_Rel_Insert_Input>;
  Sensor?: Maybe<Az_Sensors_Sensors_Obj_Rel_Insert_Input>;
  locationId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  values?: Maybe<Scalars['_measurement_value']>;
};

export type Az_Measurements_Measurements_Max_Fields = {
  __typename?: 'az_measurements_Measurements_max_fields';
  locationId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

export type Az_Measurements_Measurements_Max_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

export type Az_Measurements_Measurements_Min_Fields = {
  __typename?: 'az_measurements_Measurements_min_fields';
  locationId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

export type Az_Measurements_Measurements_Min_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

export type Az_Measurements_Measurements_Mutation_Response = {
  __typename?: 'az_measurements_Measurements_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Az_Measurements_Measurements>;
};

export type Az_Measurements_Measurements_Obj_Rel_Insert_Input = {
  data: Az_Measurements_Measurements_Insert_Input;
};

export type Az_Measurements_Measurements_Order_By = {
  Location?: Maybe<Az_Sensors_Locations_Order_By>;
  Sensor?: Maybe<Az_Sensors_Sensors_Order_By>;
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  values?: Maybe<Order_By>;
};

export enum Az_Measurements_Measurements_Select_Column {
  LocationId = 'locationId',
  SensorId = 'sensorId',
  Timestamp = 'timestamp',
  Values = 'values'
}

export type Az_Measurements_Measurements_Set_Input = {
  locationId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  values?: Maybe<Scalars['_measurement_value']>;
};

export type Az_Measurements_Measurements_Stddev_Fields = {
  __typename?: 'az_measurements_Measurements_stddev_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Measurements_Measurements_Stddev_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Measurements_Measurements_Stddev_Pop_Fields = {
  __typename?: 'az_measurements_Measurements_stddev_pop_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Measurements_Measurements_Stddev_Pop_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Measurements_Measurements_Stddev_Samp_Fields = {
  __typename?: 'az_measurements_Measurements_stddev_samp_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Measurements_Measurements_Stddev_Samp_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Measurements_Measurements_Sum_Fields = {
  __typename?: 'az_measurements_Measurements_sum_fields';
  locationId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Measurements_Measurements_Sum_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Measurements_Measurements_Var_Pop_Fields = {
  __typename?: 'az_measurements_Measurements_var_pop_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Measurements_Measurements_Var_Pop_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Measurements_Measurements_Var_Samp_Fields = {
  __typename?: 'az_measurements_Measurements_var_samp_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Measurements_Measurements_Var_Samp_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Measurements_Measurements_Variance_Fields = {
  __typename?: 'az_measurements_Measurements_variance_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Measurements_Measurements_Variance_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_Locations = {
  __typename?: 'az_sensors_Locations';
  Sensors: Array<Az_Sensors_Sensors>;
  Sensors_aggregate: Az_Sensors_Sensors_Aggregate;
  ServiceLogs: Array<Az_Sensors_ServiceLog>;
  ServiceLogs_aggregate: Az_Sensors_ServiceLog_Aggregate;
  actLink?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  airlyLink?: Maybe<Scalars['String']>;
  elevation: Scalars['float8'];
  locationId: Scalars['Int'];
  locationPoint: Scalars['point'];
  mapsLink?: Maybe<Scalars['String']>;
};


export type Az_Sensors_LocationsSensorsArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_Sensors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_Sensors_Order_By>>;
  where?: Maybe<Az_Sensors_Sensors_Bool_Exp>;
};


export type Az_Sensors_LocationsSensors_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_Sensors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_Sensors_Order_By>>;
  where?: Maybe<Az_Sensors_Sensors_Bool_Exp>;
};


export type Az_Sensors_LocationsServiceLogsArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_ServiceLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_ServiceLog_Order_By>>;
  where?: Maybe<Az_Sensors_ServiceLog_Bool_Exp>;
};


export type Az_Sensors_LocationsServiceLogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_ServiceLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_ServiceLog_Order_By>>;
  where?: Maybe<Az_Sensors_ServiceLog_Bool_Exp>;
};

export type Az_Sensors_Locations_Aggregate = {
  __typename?: 'az_sensors_Locations_aggregate';
  aggregate?: Maybe<Az_Sensors_Locations_Aggregate_Fields>;
  nodes: Array<Az_Sensors_Locations>;
};

export type Az_Sensors_Locations_Aggregate_Fields = {
  __typename?: 'az_sensors_Locations_aggregate_fields';
  avg?: Maybe<Az_Sensors_Locations_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Az_Sensors_Locations_Max_Fields>;
  min?: Maybe<Az_Sensors_Locations_Min_Fields>;
  stddev?: Maybe<Az_Sensors_Locations_Stddev_Fields>;
  stddev_pop?: Maybe<Az_Sensors_Locations_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Az_Sensors_Locations_Stddev_Samp_Fields>;
  sum?: Maybe<Az_Sensors_Locations_Sum_Fields>;
  var_pop?: Maybe<Az_Sensors_Locations_Var_Pop_Fields>;
  var_samp?: Maybe<Az_Sensors_Locations_Var_Samp_Fields>;
  variance?: Maybe<Az_Sensors_Locations_Variance_Fields>;
};


export type Az_Sensors_Locations_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Az_Sensors_Locations_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Az_Sensors_Locations_Aggregate_Order_By = {
  avg?: Maybe<Az_Sensors_Locations_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Az_Sensors_Locations_Max_Order_By>;
  min?: Maybe<Az_Sensors_Locations_Min_Order_By>;
  stddev?: Maybe<Az_Sensors_Locations_Stddev_Order_By>;
  stddev_pop?: Maybe<Az_Sensors_Locations_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Az_Sensors_Locations_Stddev_Samp_Order_By>;
  sum?: Maybe<Az_Sensors_Locations_Sum_Order_By>;
  var_pop?: Maybe<Az_Sensors_Locations_Var_Pop_Order_By>;
  var_samp?: Maybe<Az_Sensors_Locations_Var_Samp_Order_By>;
  variance?: Maybe<Az_Sensors_Locations_Variance_Order_By>;
};

export type Az_Sensors_Locations_Arr_Rel_Insert_Input = {
  data: Array<Az_Sensors_Locations_Insert_Input>;
  on_conflict?: Maybe<Az_Sensors_Locations_On_Conflict>;
};

export type Az_Sensors_Locations_Avg_Fields = {
  __typename?: 'az_sensors_Locations_avg_fields';
  elevation?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Locations_Avg_Order_By = {
  elevation?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
};

export type Az_Sensors_Locations_Bool_Exp = {
  Sensors?: Maybe<Az_Sensors_Sensors_Bool_Exp>;
  ServiceLogs?: Maybe<Az_Sensors_ServiceLog_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Az_Sensors_Locations_Bool_Exp>>>;
  _not?: Maybe<Az_Sensors_Locations_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Az_Sensors_Locations_Bool_Exp>>>;
  actLink?: Maybe<String_Comparison_Exp>;
  address?: Maybe<String_Comparison_Exp>;
  airlyLink?: Maybe<String_Comparison_Exp>;
  elevation?: Maybe<Float8_Comparison_Exp>;
  locationId?: Maybe<Int_Comparison_Exp>;
  locationPoint?: Maybe<Point_Comparison_Exp>;
  mapsLink?: Maybe<String_Comparison_Exp>;
};

export enum Az_Sensors_Locations_Constraint {
  LocationsPkey = 'Locations_pkey'
}

export type Az_Sensors_Locations_Inc_Input = {
  elevation?: Maybe<Scalars['float8']>;
  locationId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_Locations_Insert_Input = {
  Sensors?: Maybe<Az_Sensors_Sensors_Arr_Rel_Insert_Input>;
  ServiceLogs?: Maybe<Az_Sensors_ServiceLog_Arr_Rel_Insert_Input>;
  actLink?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  airlyLink?: Maybe<Scalars['String']>;
  elevation?: Maybe<Scalars['float8']>;
  locationId?: Maybe<Scalars['Int']>;
  locationPoint?: Maybe<Scalars['point']>;
  mapsLink?: Maybe<Scalars['String']>;
};

export type Az_Sensors_Locations_Max_Fields = {
  __typename?: 'az_sensors_Locations_max_fields';
  actLink?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  airlyLink?: Maybe<Scalars['String']>;
  elevation?: Maybe<Scalars['float8']>;
  locationId?: Maybe<Scalars['Int']>;
  mapsLink?: Maybe<Scalars['String']>;
};

export type Az_Sensors_Locations_Max_Order_By = {
  actLink?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  airlyLink?: Maybe<Order_By>;
  elevation?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  mapsLink?: Maybe<Order_By>;
};

export type Az_Sensors_Locations_Min_Fields = {
  __typename?: 'az_sensors_Locations_min_fields';
  actLink?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  airlyLink?: Maybe<Scalars['String']>;
  elevation?: Maybe<Scalars['float8']>;
  locationId?: Maybe<Scalars['Int']>;
  mapsLink?: Maybe<Scalars['String']>;
};

export type Az_Sensors_Locations_Min_Order_By = {
  actLink?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  airlyLink?: Maybe<Order_By>;
  elevation?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  mapsLink?: Maybe<Order_By>;
};

export type Az_Sensors_Locations_Mutation_Response = {
  __typename?: 'az_sensors_Locations_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Az_Sensors_Locations>;
};

export type Az_Sensors_Locations_Obj_Rel_Insert_Input = {
  data: Az_Sensors_Locations_Insert_Input;
  on_conflict?: Maybe<Az_Sensors_Locations_On_Conflict>;
};

export type Az_Sensors_Locations_On_Conflict = {
  constraint: Az_Sensors_Locations_Constraint;
  update_columns: Array<Az_Sensors_Locations_Update_Column>;
  where?: Maybe<Az_Sensors_Locations_Bool_Exp>;
};

export type Az_Sensors_Locations_Order_By = {
  Sensors_aggregate?: Maybe<Az_Sensors_Sensors_Aggregate_Order_By>;
  ServiceLogs_aggregate?: Maybe<Az_Sensors_ServiceLog_Aggregate_Order_By>;
  actLink?: Maybe<Order_By>;
  address?: Maybe<Order_By>;
  airlyLink?: Maybe<Order_By>;
  elevation?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  locationPoint?: Maybe<Order_By>;
  mapsLink?: Maybe<Order_By>;
};

export type Az_Sensors_Locations_Pk_Columns_Input = {
  locationId: Scalars['Int'];
};

export enum Az_Sensors_Locations_Select_Column {
  ActLink = 'actLink',
  Address = 'address',
  AirlyLink = 'airlyLink',
  Elevation = 'elevation',
  LocationId = 'locationId',
  LocationPoint = 'locationPoint',
  MapsLink = 'mapsLink'
}

export type Az_Sensors_Locations_Set_Input = {
  actLink?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  airlyLink?: Maybe<Scalars['String']>;
  elevation?: Maybe<Scalars['float8']>;
  locationId?: Maybe<Scalars['Int']>;
  locationPoint?: Maybe<Scalars['point']>;
  mapsLink?: Maybe<Scalars['String']>;
};

export type Az_Sensors_Locations_Stddev_Fields = {
  __typename?: 'az_sensors_Locations_stddev_fields';
  elevation?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Locations_Stddev_Order_By = {
  elevation?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
};

export type Az_Sensors_Locations_Stddev_Pop_Fields = {
  __typename?: 'az_sensors_Locations_stddev_pop_fields';
  elevation?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Locations_Stddev_Pop_Order_By = {
  elevation?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
};

export type Az_Sensors_Locations_Stddev_Samp_Fields = {
  __typename?: 'az_sensors_Locations_stddev_samp_fields';
  elevation?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Locations_Stddev_Samp_Order_By = {
  elevation?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
};

export type Az_Sensors_Locations_Sum_Fields = {
  __typename?: 'az_sensors_Locations_sum_fields';
  elevation?: Maybe<Scalars['float8']>;
  locationId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_Locations_Sum_Order_By = {
  elevation?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
};

export enum Az_Sensors_Locations_Update_Column {
  ActLink = 'actLink',
  Address = 'address',
  AirlyLink = 'airlyLink',
  Elevation = 'elevation',
  LocationId = 'locationId',
  LocationPoint = 'locationPoint',
  MapsLink = 'mapsLink'
}

export type Az_Sensors_Locations_Var_Pop_Fields = {
  __typename?: 'az_sensors_Locations_var_pop_fields';
  elevation?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Locations_Var_Pop_Order_By = {
  elevation?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
};

export type Az_Sensors_Locations_Var_Samp_Fields = {
  __typename?: 'az_sensors_Locations_var_samp_fields';
  elevation?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Locations_Var_Samp_Order_By = {
  elevation?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
};

export type Az_Sensors_Locations_Variance_Fields = {
  __typename?: 'az_sensors_Locations_variance_fields';
  elevation?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Locations_Variance_Order_By = {
  elevation?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
};

export type Az_Sensors_PollutionFactors = {
  __typename?: 'az_sensors_PollutionFactors';
  SensorFactors: Array<Az_Sensors_SensorFactors>;
  SensorFactors_aggregate: Az_Sensors_SensorFactors_Aggregate;
  factorId: Scalars['Int'];
  label: Scalars['String'];
  maxValues?: Maybe<Scalars['measurement_value']>;
  name: Scalars['String'];
  unit: Scalars['measurement_unit'];
};


export type Az_Sensors_PollutionFactorsSensorFactorsArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_SensorFactors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_SensorFactors_Order_By>>;
  where?: Maybe<Az_Sensors_SensorFactors_Bool_Exp>;
};


export type Az_Sensors_PollutionFactorsSensorFactors_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_SensorFactors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_SensorFactors_Order_By>>;
  where?: Maybe<Az_Sensors_SensorFactors_Bool_Exp>;
};

export type Az_Sensors_PollutionFactors_Aggregate = {
  __typename?: 'az_sensors_PollutionFactors_aggregate';
  aggregate?: Maybe<Az_Sensors_PollutionFactors_Aggregate_Fields>;
  nodes: Array<Az_Sensors_PollutionFactors>;
};

export type Az_Sensors_PollutionFactors_Aggregate_Fields = {
  __typename?: 'az_sensors_PollutionFactors_aggregate_fields';
  avg?: Maybe<Az_Sensors_PollutionFactors_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Az_Sensors_PollutionFactors_Max_Fields>;
  min?: Maybe<Az_Sensors_PollutionFactors_Min_Fields>;
  stddev?: Maybe<Az_Sensors_PollutionFactors_Stddev_Fields>;
  stddev_pop?: Maybe<Az_Sensors_PollutionFactors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Az_Sensors_PollutionFactors_Stddev_Samp_Fields>;
  sum?: Maybe<Az_Sensors_PollutionFactors_Sum_Fields>;
  var_pop?: Maybe<Az_Sensors_PollutionFactors_Var_Pop_Fields>;
  var_samp?: Maybe<Az_Sensors_PollutionFactors_Var_Samp_Fields>;
  variance?: Maybe<Az_Sensors_PollutionFactors_Variance_Fields>;
};


export type Az_Sensors_PollutionFactors_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Az_Sensors_PollutionFactors_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Az_Sensors_PollutionFactors_Aggregate_Order_By = {
  avg?: Maybe<Az_Sensors_PollutionFactors_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Az_Sensors_PollutionFactors_Max_Order_By>;
  min?: Maybe<Az_Sensors_PollutionFactors_Min_Order_By>;
  stddev?: Maybe<Az_Sensors_PollutionFactors_Stddev_Order_By>;
  stddev_pop?: Maybe<Az_Sensors_PollutionFactors_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Az_Sensors_PollutionFactors_Stddev_Samp_Order_By>;
  sum?: Maybe<Az_Sensors_PollutionFactors_Sum_Order_By>;
  var_pop?: Maybe<Az_Sensors_PollutionFactors_Var_Pop_Order_By>;
  var_samp?: Maybe<Az_Sensors_PollutionFactors_Var_Samp_Order_By>;
  variance?: Maybe<Az_Sensors_PollutionFactors_Variance_Order_By>;
};

export type Az_Sensors_PollutionFactors_Arr_Rel_Insert_Input = {
  data: Array<Az_Sensors_PollutionFactors_Insert_Input>;
  on_conflict?: Maybe<Az_Sensors_PollutionFactors_On_Conflict>;
};

export type Az_Sensors_PollutionFactors_Avg_Fields = {
  __typename?: 'az_sensors_PollutionFactors_avg_fields';
  factorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_PollutionFactors_Avg_Order_By = {
  factorId?: Maybe<Order_By>;
};

export type Az_Sensors_PollutionFactors_Bool_Exp = {
  SensorFactors?: Maybe<Az_Sensors_SensorFactors_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Az_Sensors_PollutionFactors_Bool_Exp>>>;
  _not?: Maybe<Az_Sensors_PollutionFactors_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Az_Sensors_PollutionFactors_Bool_Exp>>>;
  factorId?: Maybe<Int_Comparison_Exp>;
  label?: Maybe<String_Comparison_Exp>;
  maxValues?: Maybe<Measurement_Value_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  unit?: Maybe<Measurement_Unit_Comparison_Exp>;
};

export enum Az_Sensors_PollutionFactors_Constraint {
  PollutionFactorsPkey = 'PollutionFactors_pkey'
}

export type Az_Sensors_PollutionFactors_Inc_Input = {
  factorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_PollutionFactors_Insert_Input = {
  SensorFactors?: Maybe<Az_Sensors_SensorFactors_Arr_Rel_Insert_Input>;
  factorId?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  maxValues?: Maybe<Scalars['measurement_value']>;
  name?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['measurement_unit']>;
};

export type Az_Sensors_PollutionFactors_Max_Fields = {
  __typename?: 'az_sensors_PollutionFactors_max_fields';
  factorId?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Az_Sensors_PollutionFactors_Max_Order_By = {
  factorId?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Az_Sensors_PollutionFactors_Min_Fields = {
  __typename?: 'az_sensors_PollutionFactors_min_fields';
  factorId?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Az_Sensors_PollutionFactors_Min_Order_By = {
  factorId?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

export type Az_Sensors_PollutionFactors_Mutation_Response = {
  __typename?: 'az_sensors_PollutionFactors_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Az_Sensors_PollutionFactors>;
};

export type Az_Sensors_PollutionFactors_Obj_Rel_Insert_Input = {
  data: Az_Sensors_PollutionFactors_Insert_Input;
  on_conflict?: Maybe<Az_Sensors_PollutionFactors_On_Conflict>;
};

export type Az_Sensors_PollutionFactors_On_Conflict = {
  constraint: Az_Sensors_PollutionFactors_Constraint;
  update_columns: Array<Az_Sensors_PollutionFactors_Update_Column>;
  where?: Maybe<Az_Sensors_PollutionFactors_Bool_Exp>;
};

export type Az_Sensors_PollutionFactors_Order_By = {
  SensorFactors_aggregate?: Maybe<Az_Sensors_SensorFactors_Aggregate_Order_By>;
  factorId?: Maybe<Order_By>;
  label?: Maybe<Order_By>;
  maxValues?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
};

export type Az_Sensors_PollutionFactors_Pk_Columns_Input = {
  factorId: Scalars['Int'];
};

export enum Az_Sensors_PollutionFactors_Select_Column {
  FactorId = 'factorId',
  Label = 'label',
  MaxValues = 'maxValues',
  Name = 'name',
  Unit = 'unit'
}

export type Az_Sensors_PollutionFactors_Set_Input = {
  factorId?: Maybe<Scalars['Int']>;
  label?: Maybe<Scalars['String']>;
  maxValues?: Maybe<Scalars['measurement_value']>;
  name?: Maybe<Scalars['String']>;
  unit?: Maybe<Scalars['measurement_unit']>;
};

export type Az_Sensors_PollutionFactors_Stddev_Fields = {
  __typename?: 'az_sensors_PollutionFactors_stddev_fields';
  factorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_PollutionFactors_Stddev_Order_By = {
  factorId?: Maybe<Order_By>;
};

export type Az_Sensors_PollutionFactors_Stddev_Pop_Fields = {
  __typename?: 'az_sensors_PollutionFactors_stddev_pop_fields';
  factorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_PollutionFactors_Stddev_Pop_Order_By = {
  factorId?: Maybe<Order_By>;
};

export type Az_Sensors_PollutionFactors_Stddev_Samp_Fields = {
  __typename?: 'az_sensors_PollutionFactors_stddev_samp_fields';
  factorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_PollutionFactors_Stddev_Samp_Order_By = {
  factorId?: Maybe<Order_By>;
};

export type Az_Sensors_PollutionFactors_Sum_Fields = {
  __typename?: 'az_sensors_PollutionFactors_sum_fields';
  factorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_PollutionFactors_Sum_Order_By = {
  factorId?: Maybe<Order_By>;
};

export enum Az_Sensors_PollutionFactors_Update_Column {
  FactorId = 'factorId',
  Label = 'label',
  MaxValues = 'maxValues',
  Name = 'name',
  Unit = 'unit'
}

export type Az_Sensors_PollutionFactors_Var_Pop_Fields = {
  __typename?: 'az_sensors_PollutionFactors_var_pop_fields';
  factorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_PollutionFactors_Var_Pop_Order_By = {
  factorId?: Maybe<Order_By>;
};

export type Az_Sensors_PollutionFactors_Var_Samp_Fields = {
  __typename?: 'az_sensors_PollutionFactors_var_samp_fields';
  factorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_PollutionFactors_Var_Samp_Order_By = {
  factorId?: Maybe<Order_By>;
};

export type Az_Sensors_PollutionFactors_Variance_Fields = {
  __typename?: 'az_sensors_PollutionFactors_variance_fields';
  factorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_PollutionFactors_Variance_Order_By = {
  factorId?: Maybe<Order_By>;
};

export type Az_Sensors_SensorFactors = {
  __typename?: 'az_sensors_SensorFactors';
  PollutionFactor?: Maybe<Az_Sensors_PollutionFactors>;
  Sensor: Az_Sensors_Sensors;
  factorId?: Maybe<Scalars['Int']>;
  sensorId: Scalars['Int'];
};

export type Az_Sensors_SensorFactors_Aggregate = {
  __typename?: 'az_sensors_SensorFactors_aggregate';
  aggregate?: Maybe<Az_Sensors_SensorFactors_Aggregate_Fields>;
  nodes: Array<Az_Sensors_SensorFactors>;
};

export type Az_Sensors_SensorFactors_Aggregate_Fields = {
  __typename?: 'az_sensors_SensorFactors_aggregate_fields';
  avg?: Maybe<Az_Sensors_SensorFactors_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Az_Sensors_SensorFactors_Max_Fields>;
  min?: Maybe<Az_Sensors_SensorFactors_Min_Fields>;
  stddev?: Maybe<Az_Sensors_SensorFactors_Stddev_Fields>;
  stddev_pop?: Maybe<Az_Sensors_SensorFactors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Az_Sensors_SensorFactors_Stddev_Samp_Fields>;
  sum?: Maybe<Az_Sensors_SensorFactors_Sum_Fields>;
  var_pop?: Maybe<Az_Sensors_SensorFactors_Var_Pop_Fields>;
  var_samp?: Maybe<Az_Sensors_SensorFactors_Var_Samp_Fields>;
  variance?: Maybe<Az_Sensors_SensorFactors_Variance_Fields>;
};


export type Az_Sensors_SensorFactors_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Az_Sensors_SensorFactors_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Az_Sensors_SensorFactors_Aggregate_Order_By = {
  avg?: Maybe<Az_Sensors_SensorFactors_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Az_Sensors_SensorFactors_Max_Order_By>;
  min?: Maybe<Az_Sensors_SensorFactors_Min_Order_By>;
  stddev?: Maybe<Az_Sensors_SensorFactors_Stddev_Order_By>;
  stddev_pop?: Maybe<Az_Sensors_SensorFactors_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Az_Sensors_SensorFactors_Stddev_Samp_Order_By>;
  sum?: Maybe<Az_Sensors_SensorFactors_Sum_Order_By>;
  var_pop?: Maybe<Az_Sensors_SensorFactors_Var_Pop_Order_By>;
  var_samp?: Maybe<Az_Sensors_SensorFactors_Var_Samp_Order_By>;
  variance?: Maybe<Az_Sensors_SensorFactors_Variance_Order_By>;
};

export type Az_Sensors_SensorFactors_Arr_Rel_Insert_Input = {
  data: Array<Az_Sensors_SensorFactors_Insert_Input>;
  on_conflict?: Maybe<Az_Sensors_SensorFactors_On_Conflict>;
};

export type Az_Sensors_SensorFactors_Avg_Fields = {
  __typename?: 'az_sensors_SensorFactors_avg_fields';
  factorId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_SensorFactors_Avg_Order_By = {
  factorId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_SensorFactors_Bool_Exp = {
  PollutionFactor?: Maybe<Az_Sensors_PollutionFactors_Bool_Exp>;
  Sensor?: Maybe<Az_Sensors_Sensors_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Az_Sensors_SensorFactors_Bool_Exp>>>;
  _not?: Maybe<Az_Sensors_SensorFactors_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Az_Sensors_SensorFactors_Bool_Exp>>>;
  factorId?: Maybe<Int_Comparison_Exp>;
  sensorId?: Maybe<Int_Comparison_Exp>;
};

export enum Az_Sensors_SensorFactors_Constraint {
  SensorFactorsSensorIdFactorIdKey = 'SensorFactors_sensorId_factorId_key'
}

export type Az_Sensors_SensorFactors_Inc_Input = {
  factorId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_SensorFactors_Insert_Input = {
  PollutionFactor?: Maybe<Az_Sensors_PollutionFactors_Obj_Rel_Insert_Input>;
  Sensor?: Maybe<Az_Sensors_Sensors_Obj_Rel_Insert_Input>;
  factorId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_SensorFactors_Max_Fields = {
  __typename?: 'az_sensors_SensorFactors_max_fields';
  factorId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_SensorFactors_Max_Order_By = {
  factorId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_SensorFactors_Min_Fields = {
  __typename?: 'az_sensors_SensorFactors_min_fields';
  factorId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_SensorFactors_Min_Order_By = {
  factorId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_SensorFactors_Mutation_Response = {
  __typename?: 'az_sensors_SensorFactors_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Az_Sensors_SensorFactors>;
};

export type Az_Sensors_SensorFactors_Obj_Rel_Insert_Input = {
  data: Az_Sensors_SensorFactors_Insert_Input;
  on_conflict?: Maybe<Az_Sensors_SensorFactors_On_Conflict>;
};

export type Az_Sensors_SensorFactors_On_Conflict = {
  constraint: Az_Sensors_SensorFactors_Constraint;
  update_columns: Array<Az_Sensors_SensorFactors_Update_Column>;
  where?: Maybe<Az_Sensors_SensorFactors_Bool_Exp>;
};

export type Az_Sensors_SensorFactors_Order_By = {
  PollutionFactor?: Maybe<Az_Sensors_PollutionFactors_Order_By>;
  Sensor?: Maybe<Az_Sensors_Sensors_Order_By>;
  factorId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export enum Az_Sensors_SensorFactors_Select_Column {
  FactorId = 'factorId',
  SensorId = 'sensorId'
}

export type Az_Sensors_SensorFactors_Set_Input = {
  factorId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_SensorFactors_Stddev_Fields = {
  __typename?: 'az_sensors_SensorFactors_stddev_fields';
  factorId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_SensorFactors_Stddev_Order_By = {
  factorId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_SensorFactors_Stddev_Pop_Fields = {
  __typename?: 'az_sensors_SensorFactors_stddev_pop_fields';
  factorId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_SensorFactors_Stddev_Pop_Order_By = {
  factorId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_SensorFactors_Stddev_Samp_Fields = {
  __typename?: 'az_sensors_SensorFactors_stddev_samp_fields';
  factorId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_SensorFactors_Stddev_Samp_Order_By = {
  factorId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_SensorFactors_Sum_Fields = {
  __typename?: 'az_sensors_SensorFactors_sum_fields';
  factorId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_SensorFactors_Sum_Order_By = {
  factorId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export enum Az_Sensors_SensorFactors_Update_Column {
  FactorId = 'factorId',
  SensorId = 'sensorId'
}

export type Az_Sensors_SensorFactors_Var_Pop_Fields = {
  __typename?: 'az_sensors_SensorFactors_var_pop_fields';
  factorId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_SensorFactors_Var_Pop_Order_By = {
  factorId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_SensorFactors_Var_Samp_Fields = {
  __typename?: 'az_sensors_SensorFactors_var_samp_fields';
  factorId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_SensorFactors_Var_Samp_Order_By = {
  factorId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_SensorFactors_Variance_Fields = {
  __typename?: 'az_sensors_SensorFactors_variance_fields';
  factorId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_SensorFactors_Variance_Order_By = {
  factorId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_Sensors = {
  __typename?: 'az_sensors_Sensors';
  Location?: Maybe<Az_Sensors_Locations>;
  SensorFactors: Array<Az_Sensors_SensorFactors>;
  SensorFactors_aggregate: Az_Sensors_SensorFactors_Aggregate;
  ServiceLogs: Array<Az_Sensors_ServiceLog>;
  ServiceLogs_aggregate: Az_Sensors_ServiceLog_Aggregate;
  locationId?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  sensorId: Scalars['Int'];
};


export type Az_Sensors_SensorsSensorFactorsArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_SensorFactors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_SensorFactors_Order_By>>;
  where?: Maybe<Az_Sensors_SensorFactors_Bool_Exp>;
};


export type Az_Sensors_SensorsSensorFactors_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_SensorFactors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_SensorFactors_Order_By>>;
  where?: Maybe<Az_Sensors_SensorFactors_Bool_Exp>;
};


export type Az_Sensors_SensorsServiceLogsArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_ServiceLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_ServiceLog_Order_By>>;
  where?: Maybe<Az_Sensors_ServiceLog_Bool_Exp>;
};


export type Az_Sensors_SensorsServiceLogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_ServiceLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_ServiceLog_Order_By>>;
  where?: Maybe<Az_Sensors_ServiceLog_Bool_Exp>;
};

export type Az_Sensors_Sensors_Aggregate = {
  __typename?: 'az_sensors_Sensors_aggregate';
  aggregate?: Maybe<Az_Sensors_Sensors_Aggregate_Fields>;
  nodes: Array<Az_Sensors_Sensors>;
};

export type Az_Sensors_Sensors_Aggregate_Fields = {
  __typename?: 'az_sensors_Sensors_aggregate_fields';
  avg?: Maybe<Az_Sensors_Sensors_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Az_Sensors_Sensors_Max_Fields>;
  min?: Maybe<Az_Sensors_Sensors_Min_Fields>;
  stddev?: Maybe<Az_Sensors_Sensors_Stddev_Fields>;
  stddev_pop?: Maybe<Az_Sensors_Sensors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Az_Sensors_Sensors_Stddev_Samp_Fields>;
  sum?: Maybe<Az_Sensors_Sensors_Sum_Fields>;
  var_pop?: Maybe<Az_Sensors_Sensors_Var_Pop_Fields>;
  var_samp?: Maybe<Az_Sensors_Sensors_Var_Samp_Fields>;
  variance?: Maybe<Az_Sensors_Sensors_Variance_Fields>;
};


export type Az_Sensors_Sensors_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Az_Sensors_Sensors_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Az_Sensors_Sensors_Aggregate_Order_By = {
  avg?: Maybe<Az_Sensors_Sensors_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Az_Sensors_Sensors_Max_Order_By>;
  min?: Maybe<Az_Sensors_Sensors_Min_Order_By>;
  stddev?: Maybe<Az_Sensors_Sensors_Stddev_Order_By>;
  stddev_pop?: Maybe<Az_Sensors_Sensors_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Az_Sensors_Sensors_Stddev_Samp_Order_By>;
  sum?: Maybe<Az_Sensors_Sensors_Sum_Order_By>;
  var_pop?: Maybe<Az_Sensors_Sensors_Var_Pop_Order_By>;
  var_samp?: Maybe<Az_Sensors_Sensors_Var_Samp_Order_By>;
  variance?: Maybe<Az_Sensors_Sensors_Variance_Order_By>;
};

export type Az_Sensors_Sensors_Arr_Rel_Insert_Input = {
  data: Array<Az_Sensors_Sensors_Insert_Input>;
  on_conflict?: Maybe<Az_Sensors_Sensors_On_Conflict>;
};

export type Az_Sensors_Sensors_Avg_Fields = {
  __typename?: 'az_sensors_Sensors_avg_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Sensors_Avg_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_Sensors_Bool_Exp = {
  Location?: Maybe<Az_Sensors_Locations_Bool_Exp>;
  SensorFactors?: Maybe<Az_Sensors_SensorFactors_Bool_Exp>;
  ServiceLogs?: Maybe<Az_Sensors_ServiceLog_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Az_Sensors_Sensors_Bool_Exp>>>;
  _not?: Maybe<Az_Sensors_Sensors_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Az_Sensors_Sensors_Bool_Exp>>>;
  locationId?: Maybe<Int_Comparison_Exp>;
  manufacturer?: Maybe<String_Comparison_Exp>;
  model?: Maybe<String_Comparison_Exp>;
  sensorId?: Maybe<Int_Comparison_Exp>;
};

export enum Az_Sensors_Sensors_Constraint {
  SensorsPkey = 'Sensors_pkey',
  SensorsSensorIdLocationIdKey = 'Sensors_sensorId_locationId_key'
}

export type Az_Sensors_Sensors_Inc_Input = {
  locationId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_Sensors_Insert_Input = {
  Location?: Maybe<Az_Sensors_Locations_Obj_Rel_Insert_Input>;
  SensorFactors?: Maybe<Az_Sensors_SensorFactors_Arr_Rel_Insert_Input>;
  ServiceLogs?: Maybe<Az_Sensors_ServiceLog_Arr_Rel_Insert_Input>;
  locationId?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_Sensors_Max_Fields = {
  __typename?: 'az_sensors_Sensors_max_fields';
  locationId?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_Sensors_Max_Order_By = {
  locationId?: Maybe<Order_By>;
  manufacturer?: Maybe<Order_By>;
  model?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_Sensors_Min_Fields = {
  __typename?: 'az_sensors_Sensors_min_fields';
  locationId?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_Sensors_Min_Order_By = {
  locationId?: Maybe<Order_By>;
  manufacturer?: Maybe<Order_By>;
  model?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_Sensors_Mutation_Response = {
  __typename?: 'az_sensors_Sensors_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Az_Sensors_Sensors>;
};

export type Az_Sensors_Sensors_Obj_Rel_Insert_Input = {
  data: Az_Sensors_Sensors_Insert_Input;
  on_conflict?: Maybe<Az_Sensors_Sensors_On_Conflict>;
};

export type Az_Sensors_Sensors_On_Conflict = {
  constraint: Az_Sensors_Sensors_Constraint;
  update_columns: Array<Az_Sensors_Sensors_Update_Column>;
  where?: Maybe<Az_Sensors_Sensors_Bool_Exp>;
};

export type Az_Sensors_Sensors_Order_By = {
  Location?: Maybe<Az_Sensors_Locations_Order_By>;
  SensorFactors_aggregate?: Maybe<Az_Sensors_SensorFactors_Aggregate_Order_By>;
  ServiceLogs_aggregate?: Maybe<Az_Sensors_ServiceLog_Aggregate_Order_By>;
  locationId?: Maybe<Order_By>;
  manufacturer?: Maybe<Order_By>;
  model?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_Sensors_Pk_Columns_Input = {
  sensorId: Scalars['Int'];
};

export enum Az_Sensors_Sensors_Select_Column {
  LocationId = 'locationId',
  Manufacturer = 'manufacturer',
  Model = 'model',
  SensorId = 'sensorId'
}

export type Az_Sensors_Sensors_Set_Input = {
  locationId?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_Sensors_Stddev_Fields = {
  __typename?: 'az_sensors_Sensors_stddev_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Sensors_Stddev_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_Sensors_Stddev_Pop_Fields = {
  __typename?: 'az_sensors_Sensors_stddev_pop_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Sensors_Stddev_Pop_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_Sensors_Stddev_Samp_Fields = {
  __typename?: 'az_sensors_Sensors_stddev_samp_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Sensors_Stddev_Samp_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_Sensors_Sum_Fields = {
  __typename?: 'az_sensors_Sensors_sum_fields';
  locationId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_Sensors_Sum_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export enum Az_Sensors_Sensors_Update_Column {
  LocationId = 'locationId',
  Manufacturer = 'manufacturer',
  Model = 'model',
  SensorId = 'sensorId'
}

export type Az_Sensors_Sensors_Var_Pop_Fields = {
  __typename?: 'az_sensors_Sensors_var_pop_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Sensors_Var_Pop_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_Sensors_Var_Samp_Fields = {
  __typename?: 'az_sensors_Sensors_var_samp_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Sensors_Var_Samp_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_Sensors_Variance_Fields = {
  __typename?: 'az_sensors_Sensors_variance_fields';
  locationId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_Sensors_Variance_Order_By = {
  locationId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_ServiceLog = {
  __typename?: 'az_sensors_ServiceLog';
  Document?: Maybe<Az_Docs_Documents>;
  Location?: Maybe<Az_Sensors_Locations>;
  Photo?: Maybe<Az_Docs_Photo>;
  Sensor: Az_Sensors_Sensors;
  documentId?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  photoId?: Maybe<Scalars['Int']>;
  sensorId: Scalars['Int'];
  serviceType: Scalars['service_type'];
  timestamp: Scalars['timestamp'];
};

export type Az_Sensors_ServiceLog_Aggregate = {
  __typename?: 'az_sensors_ServiceLog_aggregate';
  aggregate?: Maybe<Az_Sensors_ServiceLog_Aggregate_Fields>;
  nodes: Array<Az_Sensors_ServiceLog>;
};

export type Az_Sensors_ServiceLog_Aggregate_Fields = {
  __typename?: 'az_sensors_ServiceLog_aggregate_fields';
  avg?: Maybe<Az_Sensors_ServiceLog_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Az_Sensors_ServiceLog_Max_Fields>;
  min?: Maybe<Az_Sensors_ServiceLog_Min_Fields>;
  stddev?: Maybe<Az_Sensors_ServiceLog_Stddev_Fields>;
  stddev_pop?: Maybe<Az_Sensors_ServiceLog_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Az_Sensors_ServiceLog_Stddev_Samp_Fields>;
  sum?: Maybe<Az_Sensors_ServiceLog_Sum_Fields>;
  var_pop?: Maybe<Az_Sensors_ServiceLog_Var_Pop_Fields>;
  var_samp?: Maybe<Az_Sensors_ServiceLog_Var_Samp_Fields>;
  variance?: Maybe<Az_Sensors_ServiceLog_Variance_Fields>;
};


export type Az_Sensors_ServiceLog_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Az_Sensors_ServiceLog_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Az_Sensors_ServiceLog_Aggregate_Order_By = {
  avg?: Maybe<Az_Sensors_ServiceLog_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Az_Sensors_ServiceLog_Max_Order_By>;
  min?: Maybe<Az_Sensors_ServiceLog_Min_Order_By>;
  stddev?: Maybe<Az_Sensors_ServiceLog_Stddev_Order_By>;
  stddev_pop?: Maybe<Az_Sensors_ServiceLog_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Az_Sensors_ServiceLog_Stddev_Samp_Order_By>;
  sum?: Maybe<Az_Sensors_ServiceLog_Sum_Order_By>;
  var_pop?: Maybe<Az_Sensors_ServiceLog_Var_Pop_Order_By>;
  var_samp?: Maybe<Az_Sensors_ServiceLog_Var_Samp_Order_By>;
  variance?: Maybe<Az_Sensors_ServiceLog_Variance_Order_By>;
};

export type Az_Sensors_ServiceLog_Arr_Rel_Insert_Input = {
  data: Array<Az_Sensors_ServiceLog_Insert_Input>;
};

export type Az_Sensors_ServiceLog_Avg_Fields = {
  __typename?: 'az_sensors_ServiceLog_avg_fields';
  documentId?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  photoId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_ServiceLog_Avg_Order_By = {
  documentId?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  photoId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_ServiceLog_Bool_Exp = {
  Document?: Maybe<Az_Docs_Documents_Bool_Exp>;
  Location?: Maybe<Az_Sensors_Locations_Bool_Exp>;
  Photo?: Maybe<Az_Docs_Photo_Bool_Exp>;
  Sensor?: Maybe<Az_Sensors_Sensors_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Az_Sensors_ServiceLog_Bool_Exp>>>;
  _not?: Maybe<Az_Sensors_ServiceLog_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Az_Sensors_ServiceLog_Bool_Exp>>>;
  documentId?: Maybe<Int_Comparison_Exp>;
  locationId?: Maybe<Int_Comparison_Exp>;
  photoId?: Maybe<Int_Comparison_Exp>;
  sensorId?: Maybe<Int_Comparison_Exp>;
  serviceType?: Maybe<Service_Type_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
};

export type Az_Sensors_ServiceLog_Inc_Input = {
  documentId?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  photoId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_ServiceLog_Insert_Input = {
  Document?: Maybe<Az_Docs_Documents_Obj_Rel_Insert_Input>;
  Location?: Maybe<Az_Sensors_Locations_Obj_Rel_Insert_Input>;
  Photo?: Maybe<Az_Docs_Photo_Obj_Rel_Insert_Input>;
  Sensor?: Maybe<Az_Sensors_Sensors_Obj_Rel_Insert_Input>;
  documentId?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  photoId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
  serviceType?: Maybe<Scalars['service_type']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

export type Az_Sensors_ServiceLog_Max_Fields = {
  __typename?: 'az_sensors_ServiceLog_max_fields';
  documentId?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  photoId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

export type Az_Sensors_ServiceLog_Max_Order_By = {
  documentId?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  photoId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

export type Az_Sensors_ServiceLog_Min_Fields = {
  __typename?: 'az_sensors_ServiceLog_min_fields';
  documentId?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  photoId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

export type Az_Sensors_ServiceLog_Min_Order_By = {
  documentId?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  photoId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

export type Az_Sensors_ServiceLog_Mutation_Response = {
  __typename?: 'az_sensors_ServiceLog_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Az_Sensors_ServiceLog>;
};

export type Az_Sensors_ServiceLog_Obj_Rel_Insert_Input = {
  data: Az_Sensors_ServiceLog_Insert_Input;
};

export type Az_Sensors_ServiceLog_Order_By = {
  Document?: Maybe<Az_Docs_Documents_Order_By>;
  Location?: Maybe<Az_Sensors_Locations_Order_By>;
  Photo?: Maybe<Az_Docs_Photo_Order_By>;
  Sensor?: Maybe<Az_Sensors_Sensors_Order_By>;
  documentId?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  photoId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
  serviceType?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
};

export enum Az_Sensors_ServiceLog_Select_Column {
  DocumentId = 'documentId',
  LocationId = 'locationId',
  PhotoId = 'photoId',
  SensorId = 'sensorId',
  ServiceType = 'serviceType',
  Timestamp = 'timestamp'
}

export type Az_Sensors_ServiceLog_Set_Input = {
  documentId?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  photoId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
  serviceType?: Maybe<Scalars['service_type']>;
  timestamp?: Maybe<Scalars['timestamp']>;
};

export type Az_Sensors_ServiceLog_Stddev_Fields = {
  __typename?: 'az_sensors_ServiceLog_stddev_fields';
  documentId?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  photoId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_ServiceLog_Stddev_Order_By = {
  documentId?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  photoId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_ServiceLog_Stddev_Pop_Fields = {
  __typename?: 'az_sensors_ServiceLog_stddev_pop_fields';
  documentId?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  photoId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_ServiceLog_Stddev_Pop_Order_By = {
  documentId?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  photoId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_ServiceLog_Stddev_Samp_Fields = {
  __typename?: 'az_sensors_ServiceLog_stddev_samp_fields';
  documentId?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  photoId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_ServiceLog_Stddev_Samp_Order_By = {
  documentId?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  photoId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_ServiceLog_Sum_Fields = {
  __typename?: 'az_sensors_ServiceLog_sum_fields';
  documentId?: Maybe<Scalars['Int']>;
  locationId?: Maybe<Scalars['Int']>;
  photoId?: Maybe<Scalars['Int']>;
  sensorId?: Maybe<Scalars['Int']>;
};

export type Az_Sensors_ServiceLog_Sum_Order_By = {
  documentId?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  photoId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_ServiceLog_Var_Pop_Fields = {
  __typename?: 'az_sensors_ServiceLog_var_pop_fields';
  documentId?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  photoId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_ServiceLog_Var_Pop_Order_By = {
  documentId?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  photoId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_ServiceLog_Var_Samp_Fields = {
  __typename?: 'az_sensors_ServiceLog_var_samp_fields';
  documentId?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  photoId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_ServiceLog_Var_Samp_Order_By = {
  documentId?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  photoId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Sensors_ServiceLog_Variance_Fields = {
  __typename?: 'az_sensors_ServiceLog_variance_fields';
  documentId?: Maybe<Scalars['Float']>;
  locationId?: Maybe<Scalars['Float']>;
  photoId?: Maybe<Scalars['Float']>;
  sensorId?: Maybe<Scalars['Float']>;
};

export type Az_Sensors_ServiceLog_Variance_Order_By = {
  documentId?: Maybe<Order_By>;
  locationId?: Maybe<Order_By>;
  photoId?: Maybe<Order_By>;
  sensorId?: Maybe<Order_By>;
};

export type Az_Users_Organisation = {
  __typename?: 'az_users_Organisation';
  Users: Array<Az_Users_Users>;
  Users_aggregate: Az_Users_Users_Aggregate;
  actLink?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  organisationId: Scalars['Int'];
  organisationRole?: Maybe<Scalars['String']>;
  registryLink?: Maybe<Scalars['String']>;
  rntrc: Scalars['bpchar'];
  shortName?: Maybe<Scalars['String']>;
};


export type Az_Users_OrganisationUsersArgs = {
  distinct_on?: Maybe<Array<Az_Users_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_Users_Order_By>>;
  where?: Maybe<Az_Users_Users_Bool_Exp>;
};


export type Az_Users_OrganisationUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Users_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_Users_Order_By>>;
  where?: Maybe<Az_Users_Users_Bool_Exp>;
};

export type Az_Users_Organisation_Aggregate = {
  __typename?: 'az_users_Organisation_aggregate';
  aggregate?: Maybe<Az_Users_Organisation_Aggregate_Fields>;
  nodes: Array<Az_Users_Organisation>;
};

export type Az_Users_Organisation_Aggregate_Fields = {
  __typename?: 'az_users_Organisation_aggregate_fields';
  avg?: Maybe<Az_Users_Organisation_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Az_Users_Organisation_Max_Fields>;
  min?: Maybe<Az_Users_Organisation_Min_Fields>;
  stddev?: Maybe<Az_Users_Organisation_Stddev_Fields>;
  stddev_pop?: Maybe<Az_Users_Organisation_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Az_Users_Organisation_Stddev_Samp_Fields>;
  sum?: Maybe<Az_Users_Organisation_Sum_Fields>;
  var_pop?: Maybe<Az_Users_Organisation_Var_Pop_Fields>;
  var_samp?: Maybe<Az_Users_Organisation_Var_Samp_Fields>;
  variance?: Maybe<Az_Users_Organisation_Variance_Fields>;
};


export type Az_Users_Organisation_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Az_Users_Organisation_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Az_Users_Organisation_Aggregate_Order_By = {
  avg?: Maybe<Az_Users_Organisation_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Az_Users_Organisation_Max_Order_By>;
  min?: Maybe<Az_Users_Organisation_Min_Order_By>;
  stddev?: Maybe<Az_Users_Organisation_Stddev_Order_By>;
  stddev_pop?: Maybe<Az_Users_Organisation_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Az_Users_Organisation_Stddev_Samp_Order_By>;
  sum?: Maybe<Az_Users_Organisation_Sum_Order_By>;
  var_pop?: Maybe<Az_Users_Organisation_Var_Pop_Order_By>;
  var_samp?: Maybe<Az_Users_Organisation_Var_Samp_Order_By>;
  variance?: Maybe<Az_Users_Organisation_Variance_Order_By>;
};

export type Az_Users_Organisation_Arr_Rel_Insert_Input = {
  data: Array<Az_Users_Organisation_Insert_Input>;
  on_conflict?: Maybe<Az_Users_Organisation_On_Conflict>;
};

export type Az_Users_Organisation_Avg_Fields = {
  __typename?: 'az_users_Organisation_avg_fields';
  organisationId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Organisation_Avg_Order_By = {
  organisationId?: Maybe<Order_By>;
};

export type Az_Users_Organisation_Bool_Exp = {
  Users?: Maybe<Az_Users_Users_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Az_Users_Organisation_Bool_Exp>>>;
  _not?: Maybe<Az_Users_Organisation_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Az_Users_Organisation_Bool_Exp>>>;
  actLink?: Maybe<String_Comparison_Exp>;
  country?: Maybe<String_Comparison_Exp>;
  fullName?: Maybe<String_Comparison_Exp>;
  organisationId?: Maybe<Int_Comparison_Exp>;
  organisationRole?: Maybe<String_Comparison_Exp>;
  registryLink?: Maybe<String_Comparison_Exp>;
  rntrc?: Maybe<Bpchar_Comparison_Exp>;
  shortName?: Maybe<String_Comparison_Exp>;
};

export enum Az_Users_Organisation_Constraint {
  OrganisationPkey = 'Organisation_pkey',
  OrganisationRntrcKey = 'Organisation_rntrc_key'
}

export type Az_Users_Organisation_Inc_Input = {
  organisationId?: Maybe<Scalars['Int']>;
};

export type Az_Users_Organisation_Insert_Input = {
  Users?: Maybe<Az_Users_Users_Arr_Rel_Insert_Input>;
  actLink?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  organisationId?: Maybe<Scalars['Int']>;
  organisationRole?: Maybe<Scalars['String']>;
  registryLink?: Maybe<Scalars['String']>;
  rntrc?: Maybe<Scalars['bpchar']>;
  shortName?: Maybe<Scalars['String']>;
};

export type Az_Users_Organisation_Max_Fields = {
  __typename?: 'az_users_Organisation_max_fields';
  actLink?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  organisationId?: Maybe<Scalars['Int']>;
  organisationRole?: Maybe<Scalars['String']>;
  registryLink?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
};

export type Az_Users_Organisation_Max_Order_By = {
  actLink?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  fullName?: Maybe<Order_By>;
  organisationId?: Maybe<Order_By>;
  organisationRole?: Maybe<Order_By>;
  registryLink?: Maybe<Order_By>;
  shortName?: Maybe<Order_By>;
};

export type Az_Users_Organisation_Min_Fields = {
  __typename?: 'az_users_Organisation_min_fields';
  actLink?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  organisationId?: Maybe<Scalars['Int']>;
  organisationRole?: Maybe<Scalars['String']>;
  registryLink?: Maybe<Scalars['String']>;
  shortName?: Maybe<Scalars['String']>;
};

export type Az_Users_Organisation_Min_Order_By = {
  actLink?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  fullName?: Maybe<Order_By>;
  organisationId?: Maybe<Order_By>;
  organisationRole?: Maybe<Order_By>;
  registryLink?: Maybe<Order_By>;
  shortName?: Maybe<Order_By>;
};

export type Az_Users_Organisation_Mutation_Response = {
  __typename?: 'az_users_Organisation_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Az_Users_Organisation>;
};

export type Az_Users_Organisation_Obj_Rel_Insert_Input = {
  data: Az_Users_Organisation_Insert_Input;
  on_conflict?: Maybe<Az_Users_Organisation_On_Conflict>;
};

export type Az_Users_Organisation_On_Conflict = {
  constraint: Az_Users_Organisation_Constraint;
  update_columns: Array<Az_Users_Organisation_Update_Column>;
  where?: Maybe<Az_Users_Organisation_Bool_Exp>;
};

export type Az_Users_Organisation_Order_By = {
  Users_aggregate?: Maybe<Az_Users_Users_Aggregate_Order_By>;
  actLink?: Maybe<Order_By>;
  country?: Maybe<Order_By>;
  fullName?: Maybe<Order_By>;
  organisationId?: Maybe<Order_By>;
  organisationRole?: Maybe<Order_By>;
  registryLink?: Maybe<Order_By>;
  rntrc?: Maybe<Order_By>;
  shortName?: Maybe<Order_By>;
};

export type Az_Users_Organisation_Pk_Columns_Input = {
  organisationId: Scalars['Int'];
};

export enum Az_Users_Organisation_Select_Column {
  ActLink = 'actLink',
  Country = 'country',
  FullName = 'fullName',
  OrganisationId = 'organisationId',
  OrganisationRole = 'organisationRole',
  RegistryLink = 'registryLink',
  Rntrc = 'rntrc',
  ShortName = 'shortName'
}

export type Az_Users_Organisation_Set_Input = {
  actLink?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  organisationId?: Maybe<Scalars['Int']>;
  organisationRole?: Maybe<Scalars['String']>;
  registryLink?: Maybe<Scalars['String']>;
  rntrc?: Maybe<Scalars['bpchar']>;
  shortName?: Maybe<Scalars['String']>;
};

export type Az_Users_Organisation_Stddev_Fields = {
  __typename?: 'az_users_Organisation_stddev_fields';
  organisationId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Organisation_Stddev_Order_By = {
  organisationId?: Maybe<Order_By>;
};

export type Az_Users_Organisation_Stddev_Pop_Fields = {
  __typename?: 'az_users_Organisation_stddev_pop_fields';
  organisationId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Organisation_Stddev_Pop_Order_By = {
  organisationId?: Maybe<Order_By>;
};

export type Az_Users_Organisation_Stddev_Samp_Fields = {
  __typename?: 'az_users_Organisation_stddev_samp_fields';
  organisationId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Organisation_Stddev_Samp_Order_By = {
  organisationId?: Maybe<Order_By>;
};

export type Az_Users_Organisation_Sum_Fields = {
  __typename?: 'az_users_Organisation_sum_fields';
  organisationId?: Maybe<Scalars['Int']>;
};

export type Az_Users_Organisation_Sum_Order_By = {
  organisationId?: Maybe<Order_By>;
};

export enum Az_Users_Organisation_Update_Column {
  ActLink = 'actLink',
  Country = 'country',
  FullName = 'fullName',
  OrganisationId = 'organisationId',
  OrganisationRole = 'organisationRole',
  RegistryLink = 'registryLink',
  Rntrc = 'rntrc',
  ShortName = 'shortName'
}

export type Az_Users_Organisation_Var_Pop_Fields = {
  __typename?: 'az_users_Organisation_var_pop_fields';
  organisationId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Organisation_Var_Pop_Order_By = {
  organisationId?: Maybe<Order_By>;
};

export type Az_Users_Organisation_Var_Samp_Fields = {
  __typename?: 'az_users_Organisation_var_samp_fields';
  organisationId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Organisation_Var_Samp_Order_By = {
  organisationId?: Maybe<Order_By>;
};

export type Az_Users_Organisation_Variance_Fields = {
  __typename?: 'az_users_Organisation_variance_fields';
  organisationId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Organisation_Variance_Order_By = {
  organisationId?: Maybe<Order_By>;
};

export type Az_Users_UsageLog = {
  __typename?: 'az_users_UsageLog';
  User?: Maybe<Az_Users_Users>;
  query: Scalars['String'];
  queryType: Scalars['bpchar'];
  timestamp: Scalars['timestamp'];
  userId?: Maybe<Scalars['Int']>;
};

export type Az_Users_UsageLog_Aggregate = {
  __typename?: 'az_users_UsageLog_aggregate';
  aggregate?: Maybe<Az_Users_UsageLog_Aggregate_Fields>;
  nodes: Array<Az_Users_UsageLog>;
};

export type Az_Users_UsageLog_Aggregate_Fields = {
  __typename?: 'az_users_UsageLog_aggregate_fields';
  avg?: Maybe<Az_Users_UsageLog_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Az_Users_UsageLog_Max_Fields>;
  min?: Maybe<Az_Users_UsageLog_Min_Fields>;
  stddev?: Maybe<Az_Users_UsageLog_Stddev_Fields>;
  stddev_pop?: Maybe<Az_Users_UsageLog_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Az_Users_UsageLog_Stddev_Samp_Fields>;
  sum?: Maybe<Az_Users_UsageLog_Sum_Fields>;
  var_pop?: Maybe<Az_Users_UsageLog_Var_Pop_Fields>;
  var_samp?: Maybe<Az_Users_UsageLog_Var_Samp_Fields>;
  variance?: Maybe<Az_Users_UsageLog_Variance_Fields>;
};


export type Az_Users_UsageLog_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Az_Users_UsageLog_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Az_Users_UsageLog_Aggregate_Order_By = {
  avg?: Maybe<Az_Users_UsageLog_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Az_Users_UsageLog_Max_Order_By>;
  min?: Maybe<Az_Users_UsageLog_Min_Order_By>;
  stddev?: Maybe<Az_Users_UsageLog_Stddev_Order_By>;
  stddev_pop?: Maybe<Az_Users_UsageLog_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Az_Users_UsageLog_Stddev_Samp_Order_By>;
  sum?: Maybe<Az_Users_UsageLog_Sum_Order_By>;
  var_pop?: Maybe<Az_Users_UsageLog_Var_Pop_Order_By>;
  var_samp?: Maybe<Az_Users_UsageLog_Var_Samp_Order_By>;
  variance?: Maybe<Az_Users_UsageLog_Variance_Order_By>;
};

export type Az_Users_UsageLog_Arr_Rel_Insert_Input = {
  data: Array<Az_Users_UsageLog_Insert_Input>;
};

export type Az_Users_UsageLog_Avg_Fields = {
  __typename?: 'az_users_UsageLog_avg_fields';
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_UsageLog_Avg_Order_By = {
  userId?: Maybe<Order_By>;
};

export type Az_Users_UsageLog_Bool_Exp = {
  User?: Maybe<Az_Users_Users_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Az_Users_UsageLog_Bool_Exp>>>;
  _not?: Maybe<Az_Users_UsageLog_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Az_Users_UsageLog_Bool_Exp>>>;
  query?: Maybe<String_Comparison_Exp>;
  queryType?: Maybe<Bpchar_Comparison_Exp>;
  timestamp?: Maybe<Timestamp_Comparison_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
};

export type Az_Users_UsageLog_Inc_Input = {
  userId?: Maybe<Scalars['Int']>;
};

export type Az_Users_UsageLog_Insert_Input = {
  User?: Maybe<Az_Users_Users_Obj_Rel_Insert_Input>;
  query?: Maybe<Scalars['String']>;
  queryType?: Maybe<Scalars['bpchar']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['Int']>;
};

export type Az_Users_UsageLog_Max_Fields = {
  __typename?: 'az_users_UsageLog_max_fields';
  query?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['Int']>;
};

export type Az_Users_UsageLog_Max_Order_By = {
  query?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type Az_Users_UsageLog_Min_Fields = {
  __typename?: 'az_users_UsageLog_min_fields';
  query?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['Int']>;
};

export type Az_Users_UsageLog_Min_Order_By = {
  query?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type Az_Users_UsageLog_Mutation_Response = {
  __typename?: 'az_users_UsageLog_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Az_Users_UsageLog>;
};

export type Az_Users_UsageLog_Obj_Rel_Insert_Input = {
  data: Az_Users_UsageLog_Insert_Input;
};

export type Az_Users_UsageLog_Order_By = {
  User?: Maybe<Az_Users_Users_Order_By>;
  query?: Maybe<Order_By>;
  queryType?: Maybe<Order_By>;
  timestamp?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export enum Az_Users_UsageLog_Select_Column {
  Query = 'query',
  QueryType = 'queryType',
  Timestamp = 'timestamp',
  UserId = 'userId'
}

export type Az_Users_UsageLog_Set_Input = {
  query?: Maybe<Scalars['String']>;
  queryType?: Maybe<Scalars['bpchar']>;
  timestamp?: Maybe<Scalars['timestamp']>;
  userId?: Maybe<Scalars['Int']>;
};

export type Az_Users_UsageLog_Stddev_Fields = {
  __typename?: 'az_users_UsageLog_stddev_fields';
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_UsageLog_Stddev_Order_By = {
  userId?: Maybe<Order_By>;
};

export type Az_Users_UsageLog_Stddev_Pop_Fields = {
  __typename?: 'az_users_UsageLog_stddev_pop_fields';
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_UsageLog_Stddev_Pop_Order_By = {
  userId?: Maybe<Order_By>;
};

export type Az_Users_UsageLog_Stddev_Samp_Fields = {
  __typename?: 'az_users_UsageLog_stddev_samp_fields';
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_UsageLog_Stddev_Samp_Order_By = {
  userId?: Maybe<Order_By>;
};

export type Az_Users_UsageLog_Sum_Fields = {
  __typename?: 'az_users_UsageLog_sum_fields';
  userId?: Maybe<Scalars['Int']>;
};

export type Az_Users_UsageLog_Sum_Order_By = {
  userId?: Maybe<Order_By>;
};

export type Az_Users_UsageLog_Var_Pop_Fields = {
  __typename?: 'az_users_UsageLog_var_pop_fields';
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_UsageLog_Var_Pop_Order_By = {
  userId?: Maybe<Order_By>;
};

export type Az_Users_UsageLog_Var_Samp_Fields = {
  __typename?: 'az_users_UsageLog_var_samp_fields';
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_UsageLog_Var_Samp_Order_By = {
  userId?: Maybe<Order_By>;
};

export type Az_Users_UsageLog_Variance_Fields = {
  __typename?: 'az_users_UsageLog_variance_fields';
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_UsageLog_Variance_Order_By = {
  userId?: Maybe<Order_By>;
};

export type Az_Users_Users = {
  __typename?: 'az_users_Users';
  Organisation?: Maybe<Az_Users_Organisation>;
  UsageLogs: Array<Az_Users_UsageLog>;
  UsageLogs_aggregate: Az_Users_UsageLog_Aggregate;
  actLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName: Scalars['String'];
  organisationId?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
  userRole?: Maybe<Scalars['String']>;
};


export type Az_Users_UsersUsageLogsArgs = {
  distinct_on?: Maybe<Array<Az_Users_UsageLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_UsageLog_Order_By>>;
  where?: Maybe<Az_Users_UsageLog_Bool_Exp>;
};


export type Az_Users_UsersUsageLogs_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Users_UsageLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_UsageLog_Order_By>>;
  where?: Maybe<Az_Users_UsageLog_Bool_Exp>;
};

export type Az_Users_Users_Aggregate = {
  __typename?: 'az_users_Users_aggregate';
  aggregate?: Maybe<Az_Users_Users_Aggregate_Fields>;
  nodes: Array<Az_Users_Users>;
};

export type Az_Users_Users_Aggregate_Fields = {
  __typename?: 'az_users_Users_aggregate_fields';
  avg?: Maybe<Az_Users_Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Az_Users_Users_Max_Fields>;
  min?: Maybe<Az_Users_Users_Min_Fields>;
  stddev?: Maybe<Az_Users_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Az_Users_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Az_Users_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Az_Users_Users_Sum_Fields>;
  var_pop?: Maybe<Az_Users_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Az_Users_Users_Var_Samp_Fields>;
  variance?: Maybe<Az_Users_Users_Variance_Fields>;
};


export type Az_Users_Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Az_Users_Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Az_Users_Users_Aggregate_Order_By = {
  avg?: Maybe<Az_Users_Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Az_Users_Users_Max_Order_By>;
  min?: Maybe<Az_Users_Users_Min_Order_By>;
  stddev?: Maybe<Az_Users_Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Az_Users_Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Az_Users_Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Az_Users_Users_Sum_Order_By>;
  var_pop?: Maybe<Az_Users_Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Az_Users_Users_Var_Samp_Order_By>;
  variance?: Maybe<Az_Users_Users_Variance_Order_By>;
};

export type Az_Users_Users_Arr_Rel_Insert_Input = {
  data: Array<Az_Users_Users_Insert_Input>;
  on_conflict?: Maybe<Az_Users_Users_On_Conflict>;
};

export type Az_Users_Users_Avg_Fields = {
  __typename?: 'az_users_Users_avg_fields';
  organisationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Users_Avg_Order_By = {
  organisationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type Az_Users_Users_Bool_Exp = {
  Organisation?: Maybe<Az_Users_Organisation_Bool_Exp>;
  UsageLogs?: Maybe<Az_Users_UsageLog_Bool_Exp>;
  _and?: Maybe<Array<Maybe<Az_Users_Users_Bool_Exp>>>;
  _not?: Maybe<Az_Users_Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Az_Users_Users_Bool_Exp>>>;
  actLink?: Maybe<String_Comparison_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  fullName?: Maybe<String_Comparison_Exp>;
  organisationId?: Maybe<Int_Comparison_Exp>;
  phoneNumber?: Maybe<String_Comparison_Exp>;
  userId?: Maybe<Int_Comparison_Exp>;
  userRole?: Maybe<String_Comparison_Exp>;
};

export enum Az_Users_Users_Constraint {
  UsersPkey = 'Users_pkey'
}

export type Az_Users_Users_Inc_Input = {
  organisationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type Az_Users_Users_Insert_Input = {
  Organisation?: Maybe<Az_Users_Organisation_Obj_Rel_Insert_Input>;
  UsageLogs?: Maybe<Az_Users_UsageLog_Arr_Rel_Insert_Input>;
  actLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  organisationId?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
};

export type Az_Users_Users_Max_Fields = {
  __typename?: 'az_users_Users_max_fields';
  actLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  organisationId?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
};

export type Az_Users_Users_Max_Order_By = {
  actLink?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  fullName?: Maybe<Order_By>;
  organisationId?: Maybe<Order_By>;
  phoneNumber?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  userRole?: Maybe<Order_By>;
};

export type Az_Users_Users_Min_Fields = {
  __typename?: 'az_users_Users_min_fields';
  actLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  organisationId?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
};

export type Az_Users_Users_Min_Order_By = {
  actLink?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  fullName?: Maybe<Order_By>;
  organisationId?: Maybe<Order_By>;
  phoneNumber?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  userRole?: Maybe<Order_By>;
};

export type Az_Users_Users_Mutation_Response = {
  __typename?: 'az_users_Users_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Az_Users_Users>;
};

export type Az_Users_Users_Obj_Rel_Insert_Input = {
  data: Az_Users_Users_Insert_Input;
  on_conflict?: Maybe<Az_Users_Users_On_Conflict>;
};

export type Az_Users_Users_On_Conflict = {
  constraint: Az_Users_Users_Constraint;
  update_columns: Array<Az_Users_Users_Update_Column>;
  where?: Maybe<Az_Users_Users_Bool_Exp>;
};

export type Az_Users_Users_Order_By = {
  Organisation?: Maybe<Az_Users_Organisation_Order_By>;
  UsageLogs_aggregate?: Maybe<Az_Users_UsageLog_Aggregate_Order_By>;
  actLink?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  fullName?: Maybe<Order_By>;
  organisationId?: Maybe<Order_By>;
  phoneNumber?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
  userRole?: Maybe<Order_By>;
};

export type Az_Users_Users_Pk_Columns_Input = {
  userId: Scalars['Int'];
};

export enum Az_Users_Users_Select_Column {
  ActLink = 'actLink',
  Email = 'email',
  FullName = 'fullName',
  OrganisationId = 'organisationId',
  PhoneNumber = 'phoneNumber',
  UserId = 'userId',
  UserRole = 'userRole'
}

export type Az_Users_Users_Set_Input = {
  actLink?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  organisationId?: Maybe<Scalars['Int']>;
  phoneNumber?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
};

export type Az_Users_Users_Stddev_Fields = {
  __typename?: 'az_users_Users_stddev_fields';
  organisationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Users_Stddev_Order_By = {
  organisationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type Az_Users_Users_Stddev_Pop_Fields = {
  __typename?: 'az_users_Users_stddev_pop_fields';
  organisationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Users_Stddev_Pop_Order_By = {
  organisationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type Az_Users_Users_Stddev_Samp_Fields = {
  __typename?: 'az_users_Users_stddev_samp_fields';
  organisationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Users_Stddev_Samp_Order_By = {
  organisationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type Az_Users_Users_Sum_Fields = {
  __typename?: 'az_users_Users_sum_fields';
  organisationId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type Az_Users_Users_Sum_Order_By = {
  organisationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export enum Az_Users_Users_Update_Column {
  ActLink = 'actLink',
  Email = 'email',
  FullName = 'fullName',
  OrganisationId = 'organisationId',
  PhoneNumber = 'phoneNumber',
  UserId = 'userId',
  UserRole = 'userRole'
}

export type Az_Users_Users_Var_Pop_Fields = {
  __typename?: 'az_users_Users_var_pop_fields';
  organisationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Users_Var_Pop_Order_By = {
  organisationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type Az_Users_Users_Var_Samp_Fields = {
  __typename?: 'az_users_Users_var_samp_fields';
  organisationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Users_Var_Samp_Order_By = {
  organisationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type Az_Users_Users_Variance_Fields = {
  __typename?: 'az_users_Users_variance_fields';
  organisationId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type Az_Users_Users_Variance_Order_By = {
  organisationId?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};


export type Bpchar_Comparison_Exp = {
  _eq?: Maybe<Scalars['bpchar']>;
  _gt?: Maybe<Scalars['bpchar']>;
  _gte?: Maybe<Scalars['bpchar']>;
  _in?: Maybe<Array<Scalars['bpchar']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bpchar']>;
  _lte?: Maybe<Scalars['bpchar']>;
  _neq?: Maybe<Scalars['bpchar']>;
  _nin?: Maybe<Array<Scalars['bpchar']>>;
};


export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>;
  _gt?: Maybe<Scalars['float8']>;
  _gte?: Maybe<Scalars['float8']>;
  _in?: Maybe<Array<Scalars['float8']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['float8']>;
  _lte?: Maybe<Scalars['float8']>;
  _neq?: Maybe<Scalars['float8']>;
  _nin?: Maybe<Array<Scalars['float8']>>;
};

export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};


export type Measurement_Unit_Comparison_Exp = {
  _eq?: Maybe<Scalars['measurement_unit']>;
  _gt?: Maybe<Scalars['measurement_unit']>;
  _gte?: Maybe<Scalars['measurement_unit']>;
  _in?: Maybe<Array<Scalars['measurement_unit']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['measurement_unit']>;
  _lte?: Maybe<Scalars['measurement_unit']>;
  _neq?: Maybe<Scalars['measurement_unit']>;
  _nin?: Maybe<Array<Scalars['measurement_unit']>>;
};


export type Measurement_Value_Comparison_Exp = {
  _eq?: Maybe<Scalars['measurement_value']>;
  _gt?: Maybe<Scalars['measurement_value']>;
  _gte?: Maybe<Scalars['measurement_value']>;
  _in?: Maybe<Array<Scalars['measurement_value']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['measurement_value']>;
  _lte?: Maybe<Scalars['measurement_value']>;
  _neq?: Maybe<Scalars['measurement_value']>;
  _nin?: Maybe<Array<Scalars['measurement_value']>>;
};

export type Mutation_Root = {
  __typename?: 'mutation_root';
  delete_az_docs_Documents?: Maybe<Az_Docs_Documents_Mutation_Response>;
  delete_az_docs_Documents_by_pk?: Maybe<Az_Docs_Documents>;
  delete_az_docs_Photo?: Maybe<Az_Docs_Photo_Mutation_Response>;
  delete_az_docs_Photo_by_pk?: Maybe<Az_Docs_Photo>;
  delete_az_measurements_Measurements?: Maybe<Az_Measurements_Measurements_Mutation_Response>;
  delete_az_sensors_Locations?: Maybe<Az_Sensors_Locations_Mutation_Response>;
  delete_az_sensors_Locations_by_pk?: Maybe<Az_Sensors_Locations>;
  delete_az_sensors_PollutionFactors?: Maybe<Az_Sensors_PollutionFactors_Mutation_Response>;
  delete_az_sensors_PollutionFactors_by_pk?: Maybe<Az_Sensors_PollutionFactors>;
  delete_az_sensors_SensorFactors?: Maybe<Az_Sensors_SensorFactors_Mutation_Response>;
  delete_az_sensors_Sensors?: Maybe<Az_Sensors_Sensors_Mutation_Response>;
  delete_az_sensors_Sensors_by_pk?: Maybe<Az_Sensors_Sensors>;
  delete_az_sensors_ServiceLog?: Maybe<Az_Sensors_ServiceLog_Mutation_Response>;
  delete_az_users_Organisation?: Maybe<Az_Users_Organisation_Mutation_Response>;
  delete_az_users_Organisation_by_pk?: Maybe<Az_Users_Organisation>;
  delete_az_users_UsageLog?: Maybe<Az_Users_UsageLog_Mutation_Response>;
  delete_az_users_Users?: Maybe<Az_Users_Users_Mutation_Response>;
  delete_az_users_Users_by_pk?: Maybe<Az_Users_Users>;
  insert_az_docs_Documents?: Maybe<Az_Docs_Documents_Mutation_Response>;
  insert_az_docs_Documents_one?: Maybe<Az_Docs_Documents>;
  insert_az_docs_Photo?: Maybe<Az_Docs_Photo_Mutation_Response>;
  insert_az_docs_Photo_one?: Maybe<Az_Docs_Photo>;
  insert_az_measurements_Measurements?: Maybe<Az_Measurements_Measurements_Mutation_Response>;
  insert_az_measurements_Measurements_one?: Maybe<Az_Measurements_Measurements>;
  insert_az_sensors_Locations?: Maybe<Az_Sensors_Locations_Mutation_Response>;
  insert_az_sensors_Locations_one?: Maybe<Az_Sensors_Locations>;
  insert_az_sensors_PollutionFactors?: Maybe<Az_Sensors_PollutionFactors_Mutation_Response>;
  insert_az_sensors_PollutionFactors_one?: Maybe<Az_Sensors_PollutionFactors>;
  insert_az_sensors_SensorFactors?: Maybe<Az_Sensors_SensorFactors_Mutation_Response>;
  insert_az_sensors_SensorFactors_one?: Maybe<Az_Sensors_SensorFactors>;
  insert_az_sensors_Sensors?: Maybe<Az_Sensors_Sensors_Mutation_Response>;
  insert_az_sensors_Sensors_one?: Maybe<Az_Sensors_Sensors>;
  insert_az_sensors_ServiceLog?: Maybe<Az_Sensors_ServiceLog_Mutation_Response>;
  insert_az_sensors_ServiceLog_one?: Maybe<Az_Sensors_ServiceLog>;
  insert_az_users_Organisation?: Maybe<Az_Users_Organisation_Mutation_Response>;
  insert_az_users_Organisation_one?: Maybe<Az_Users_Organisation>;
  insert_az_users_UsageLog?: Maybe<Az_Users_UsageLog_Mutation_Response>;
  insert_az_users_UsageLog_one?: Maybe<Az_Users_UsageLog>;
  insert_az_users_Users?: Maybe<Az_Users_Users_Mutation_Response>;
  insert_az_users_Users_one?: Maybe<Az_Users_Users>;
  update_az_docs_Documents?: Maybe<Az_Docs_Documents_Mutation_Response>;
  update_az_docs_Documents_by_pk?: Maybe<Az_Docs_Documents>;
  update_az_docs_Photo?: Maybe<Az_Docs_Photo_Mutation_Response>;
  update_az_docs_Photo_by_pk?: Maybe<Az_Docs_Photo>;
  update_az_measurements_Measurements?: Maybe<Az_Measurements_Measurements_Mutation_Response>;
  update_az_sensors_Locations?: Maybe<Az_Sensors_Locations_Mutation_Response>;
  update_az_sensors_Locations_by_pk?: Maybe<Az_Sensors_Locations>;
  update_az_sensors_PollutionFactors?: Maybe<Az_Sensors_PollutionFactors_Mutation_Response>;
  update_az_sensors_PollutionFactors_by_pk?: Maybe<Az_Sensors_PollutionFactors>;
  update_az_sensors_SensorFactors?: Maybe<Az_Sensors_SensorFactors_Mutation_Response>;
  update_az_sensors_Sensors?: Maybe<Az_Sensors_Sensors_Mutation_Response>;
  update_az_sensors_Sensors_by_pk?: Maybe<Az_Sensors_Sensors>;
  update_az_sensors_ServiceLog?: Maybe<Az_Sensors_ServiceLog_Mutation_Response>;
  update_az_users_Organisation?: Maybe<Az_Users_Organisation_Mutation_Response>;
  update_az_users_Organisation_by_pk?: Maybe<Az_Users_Organisation>;
  update_az_users_UsageLog?: Maybe<Az_Users_UsageLog_Mutation_Response>;
  update_az_users_Users?: Maybe<Az_Users_Users_Mutation_Response>;
  update_az_users_Users_by_pk?: Maybe<Az_Users_Users>;
};


export type Mutation_RootDelete_Az_Docs_DocumentsArgs = {
  where: Az_Docs_Documents_Bool_Exp;
};


export type Mutation_RootDelete_Az_Docs_Documents_By_PkArgs = {
  documentId: Scalars['Int'];
};


export type Mutation_RootDelete_Az_Docs_PhotoArgs = {
  where: Az_Docs_Photo_Bool_Exp;
};


export type Mutation_RootDelete_Az_Docs_Photo_By_PkArgs = {
  photoId: Scalars['Int'];
};


export type Mutation_RootDelete_Az_Measurements_MeasurementsArgs = {
  where: Az_Measurements_Measurements_Bool_Exp;
};


export type Mutation_RootDelete_Az_Sensors_LocationsArgs = {
  where: Az_Sensors_Locations_Bool_Exp;
};


export type Mutation_RootDelete_Az_Sensors_Locations_By_PkArgs = {
  locationId: Scalars['Int'];
};


export type Mutation_RootDelete_Az_Sensors_PollutionFactorsArgs = {
  where: Az_Sensors_PollutionFactors_Bool_Exp;
};


export type Mutation_RootDelete_Az_Sensors_PollutionFactors_By_PkArgs = {
  factorId: Scalars['Int'];
};


export type Mutation_RootDelete_Az_Sensors_SensorFactorsArgs = {
  where: Az_Sensors_SensorFactors_Bool_Exp;
};


export type Mutation_RootDelete_Az_Sensors_SensorsArgs = {
  where: Az_Sensors_Sensors_Bool_Exp;
};


export type Mutation_RootDelete_Az_Sensors_Sensors_By_PkArgs = {
  sensorId: Scalars['Int'];
};


export type Mutation_RootDelete_Az_Sensors_ServiceLogArgs = {
  where: Az_Sensors_ServiceLog_Bool_Exp;
};


export type Mutation_RootDelete_Az_Users_OrganisationArgs = {
  where: Az_Users_Organisation_Bool_Exp;
};


export type Mutation_RootDelete_Az_Users_Organisation_By_PkArgs = {
  organisationId: Scalars['Int'];
};


export type Mutation_RootDelete_Az_Users_UsageLogArgs = {
  where: Az_Users_UsageLog_Bool_Exp;
};


export type Mutation_RootDelete_Az_Users_UsersArgs = {
  where: Az_Users_Users_Bool_Exp;
};


export type Mutation_RootDelete_Az_Users_Users_By_PkArgs = {
  userId: Scalars['Int'];
};


export type Mutation_RootInsert_Az_Docs_DocumentsArgs = {
  objects: Array<Az_Docs_Documents_Insert_Input>;
  on_conflict?: Maybe<Az_Docs_Documents_On_Conflict>;
};


export type Mutation_RootInsert_Az_Docs_Documents_OneArgs = {
  object: Az_Docs_Documents_Insert_Input;
  on_conflict?: Maybe<Az_Docs_Documents_On_Conflict>;
};


export type Mutation_RootInsert_Az_Docs_PhotoArgs = {
  objects: Array<Az_Docs_Photo_Insert_Input>;
  on_conflict?: Maybe<Az_Docs_Photo_On_Conflict>;
};


export type Mutation_RootInsert_Az_Docs_Photo_OneArgs = {
  object: Az_Docs_Photo_Insert_Input;
  on_conflict?: Maybe<Az_Docs_Photo_On_Conflict>;
};


export type Mutation_RootInsert_Az_Measurements_MeasurementsArgs = {
  objects: Array<Az_Measurements_Measurements_Insert_Input>;
};


export type Mutation_RootInsert_Az_Measurements_Measurements_OneArgs = {
  object: Az_Measurements_Measurements_Insert_Input;
};


export type Mutation_RootInsert_Az_Sensors_LocationsArgs = {
  objects: Array<Az_Sensors_Locations_Insert_Input>;
  on_conflict?: Maybe<Az_Sensors_Locations_On_Conflict>;
};


export type Mutation_RootInsert_Az_Sensors_Locations_OneArgs = {
  object: Az_Sensors_Locations_Insert_Input;
  on_conflict?: Maybe<Az_Sensors_Locations_On_Conflict>;
};


export type Mutation_RootInsert_Az_Sensors_PollutionFactorsArgs = {
  objects: Array<Az_Sensors_PollutionFactors_Insert_Input>;
  on_conflict?: Maybe<Az_Sensors_PollutionFactors_On_Conflict>;
};


export type Mutation_RootInsert_Az_Sensors_PollutionFactors_OneArgs = {
  object: Az_Sensors_PollutionFactors_Insert_Input;
  on_conflict?: Maybe<Az_Sensors_PollutionFactors_On_Conflict>;
};


export type Mutation_RootInsert_Az_Sensors_SensorFactorsArgs = {
  objects: Array<Az_Sensors_SensorFactors_Insert_Input>;
  on_conflict?: Maybe<Az_Sensors_SensorFactors_On_Conflict>;
};


export type Mutation_RootInsert_Az_Sensors_SensorFactors_OneArgs = {
  object: Az_Sensors_SensorFactors_Insert_Input;
  on_conflict?: Maybe<Az_Sensors_SensorFactors_On_Conflict>;
};


export type Mutation_RootInsert_Az_Sensors_SensorsArgs = {
  objects: Array<Az_Sensors_Sensors_Insert_Input>;
  on_conflict?: Maybe<Az_Sensors_Sensors_On_Conflict>;
};


export type Mutation_RootInsert_Az_Sensors_Sensors_OneArgs = {
  object: Az_Sensors_Sensors_Insert_Input;
  on_conflict?: Maybe<Az_Sensors_Sensors_On_Conflict>;
};


export type Mutation_RootInsert_Az_Sensors_ServiceLogArgs = {
  objects: Array<Az_Sensors_ServiceLog_Insert_Input>;
};


export type Mutation_RootInsert_Az_Sensors_ServiceLog_OneArgs = {
  object: Az_Sensors_ServiceLog_Insert_Input;
};


export type Mutation_RootInsert_Az_Users_OrganisationArgs = {
  objects: Array<Az_Users_Organisation_Insert_Input>;
  on_conflict?: Maybe<Az_Users_Organisation_On_Conflict>;
};


export type Mutation_RootInsert_Az_Users_Organisation_OneArgs = {
  object: Az_Users_Organisation_Insert_Input;
  on_conflict?: Maybe<Az_Users_Organisation_On_Conflict>;
};


export type Mutation_RootInsert_Az_Users_UsageLogArgs = {
  objects: Array<Az_Users_UsageLog_Insert_Input>;
};


export type Mutation_RootInsert_Az_Users_UsageLog_OneArgs = {
  object: Az_Users_UsageLog_Insert_Input;
};


export type Mutation_RootInsert_Az_Users_UsersArgs = {
  objects: Array<Az_Users_Users_Insert_Input>;
  on_conflict?: Maybe<Az_Users_Users_On_Conflict>;
};


export type Mutation_RootInsert_Az_Users_Users_OneArgs = {
  object: Az_Users_Users_Insert_Input;
  on_conflict?: Maybe<Az_Users_Users_On_Conflict>;
};


export type Mutation_RootUpdate_Az_Docs_DocumentsArgs = {
  _inc?: Maybe<Az_Docs_Documents_Inc_Input>;
  _set?: Maybe<Az_Docs_Documents_Set_Input>;
  where: Az_Docs_Documents_Bool_Exp;
};


export type Mutation_RootUpdate_Az_Docs_Documents_By_PkArgs = {
  _inc?: Maybe<Az_Docs_Documents_Inc_Input>;
  _set?: Maybe<Az_Docs_Documents_Set_Input>;
  pk_columns: Az_Docs_Documents_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Az_Docs_PhotoArgs = {
  _inc?: Maybe<Az_Docs_Photo_Inc_Input>;
  _set?: Maybe<Az_Docs_Photo_Set_Input>;
  where: Az_Docs_Photo_Bool_Exp;
};


export type Mutation_RootUpdate_Az_Docs_Photo_By_PkArgs = {
  _inc?: Maybe<Az_Docs_Photo_Inc_Input>;
  _set?: Maybe<Az_Docs_Photo_Set_Input>;
  pk_columns: Az_Docs_Photo_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Az_Measurements_MeasurementsArgs = {
  _inc?: Maybe<Az_Measurements_Measurements_Inc_Input>;
  _set?: Maybe<Az_Measurements_Measurements_Set_Input>;
  where: Az_Measurements_Measurements_Bool_Exp;
};


export type Mutation_RootUpdate_Az_Sensors_LocationsArgs = {
  _inc?: Maybe<Az_Sensors_Locations_Inc_Input>;
  _set?: Maybe<Az_Sensors_Locations_Set_Input>;
  where: Az_Sensors_Locations_Bool_Exp;
};


export type Mutation_RootUpdate_Az_Sensors_Locations_By_PkArgs = {
  _inc?: Maybe<Az_Sensors_Locations_Inc_Input>;
  _set?: Maybe<Az_Sensors_Locations_Set_Input>;
  pk_columns: Az_Sensors_Locations_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Az_Sensors_PollutionFactorsArgs = {
  _inc?: Maybe<Az_Sensors_PollutionFactors_Inc_Input>;
  _set?: Maybe<Az_Sensors_PollutionFactors_Set_Input>;
  where: Az_Sensors_PollutionFactors_Bool_Exp;
};


export type Mutation_RootUpdate_Az_Sensors_PollutionFactors_By_PkArgs = {
  _inc?: Maybe<Az_Sensors_PollutionFactors_Inc_Input>;
  _set?: Maybe<Az_Sensors_PollutionFactors_Set_Input>;
  pk_columns: Az_Sensors_PollutionFactors_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Az_Sensors_SensorFactorsArgs = {
  _inc?: Maybe<Az_Sensors_SensorFactors_Inc_Input>;
  _set?: Maybe<Az_Sensors_SensorFactors_Set_Input>;
  where: Az_Sensors_SensorFactors_Bool_Exp;
};


export type Mutation_RootUpdate_Az_Sensors_SensorsArgs = {
  _inc?: Maybe<Az_Sensors_Sensors_Inc_Input>;
  _set?: Maybe<Az_Sensors_Sensors_Set_Input>;
  where: Az_Sensors_Sensors_Bool_Exp;
};


export type Mutation_RootUpdate_Az_Sensors_Sensors_By_PkArgs = {
  _inc?: Maybe<Az_Sensors_Sensors_Inc_Input>;
  _set?: Maybe<Az_Sensors_Sensors_Set_Input>;
  pk_columns: Az_Sensors_Sensors_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Az_Sensors_ServiceLogArgs = {
  _inc?: Maybe<Az_Sensors_ServiceLog_Inc_Input>;
  _set?: Maybe<Az_Sensors_ServiceLog_Set_Input>;
  where: Az_Sensors_ServiceLog_Bool_Exp;
};


export type Mutation_RootUpdate_Az_Users_OrganisationArgs = {
  _inc?: Maybe<Az_Users_Organisation_Inc_Input>;
  _set?: Maybe<Az_Users_Organisation_Set_Input>;
  where: Az_Users_Organisation_Bool_Exp;
};


export type Mutation_RootUpdate_Az_Users_Organisation_By_PkArgs = {
  _inc?: Maybe<Az_Users_Organisation_Inc_Input>;
  _set?: Maybe<Az_Users_Organisation_Set_Input>;
  pk_columns: Az_Users_Organisation_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Az_Users_UsageLogArgs = {
  _inc?: Maybe<Az_Users_UsageLog_Inc_Input>;
  _set?: Maybe<Az_Users_UsageLog_Set_Input>;
  where: Az_Users_UsageLog_Bool_Exp;
};


export type Mutation_RootUpdate_Az_Users_UsersArgs = {
  _inc?: Maybe<Az_Users_Users_Inc_Input>;
  _set?: Maybe<Az_Users_Users_Set_Input>;
  where: Az_Users_Users_Bool_Exp;
};


export type Mutation_RootUpdate_Az_Users_Users_By_PkArgs = {
  _inc?: Maybe<Az_Users_Users_Inc_Input>;
  _set?: Maybe<Az_Users_Users_Set_Input>;
  pk_columns: Az_Users_Users_Pk_Columns_Input;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}


export type Point_Comparison_Exp = {
  _eq?: Maybe<Scalars['point']>;
  _gt?: Maybe<Scalars['point']>;
  _gte?: Maybe<Scalars['point']>;
  _in?: Maybe<Array<Scalars['point']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['point']>;
  _lte?: Maybe<Scalars['point']>;
  _neq?: Maybe<Scalars['point']>;
  _nin?: Maybe<Array<Scalars['point']>>;
};

export type Query_Root = {
  __typename?: 'query_root';
  az_docs_Documents: Array<Az_Docs_Documents>;
  az_docs_Documents_aggregate: Az_Docs_Documents_Aggregate;
  az_docs_Documents_by_pk?: Maybe<Az_Docs_Documents>;
  az_docs_Photo: Array<Az_Docs_Photo>;
  az_docs_Photo_aggregate: Az_Docs_Photo_Aggregate;
  az_docs_Photo_by_pk?: Maybe<Az_Docs_Photo>;
  az_measurements_Measurements: Array<Az_Measurements_Measurements>;
  az_measurements_Measurements_aggregate: Az_Measurements_Measurements_Aggregate;
  az_sensors_Locations: Array<Az_Sensors_Locations>;
  az_sensors_Locations_aggregate: Az_Sensors_Locations_Aggregate;
  az_sensors_Locations_by_pk?: Maybe<Az_Sensors_Locations>;
  az_sensors_PollutionFactors: Array<Az_Sensors_PollutionFactors>;
  az_sensors_PollutionFactors_aggregate: Az_Sensors_PollutionFactors_Aggregate;
  az_sensors_PollutionFactors_by_pk?: Maybe<Az_Sensors_PollutionFactors>;
  az_sensors_SensorFactors: Array<Az_Sensors_SensorFactors>;
  az_sensors_SensorFactors_aggregate: Az_Sensors_SensorFactors_Aggregate;
  az_sensors_Sensors: Array<Az_Sensors_Sensors>;
  az_sensors_Sensors_aggregate: Az_Sensors_Sensors_Aggregate;
  az_sensors_Sensors_by_pk?: Maybe<Az_Sensors_Sensors>;
  az_sensors_ServiceLog: Array<Az_Sensors_ServiceLog>;
  az_sensors_ServiceLog_aggregate: Az_Sensors_ServiceLog_Aggregate;
  az_users_Organisation: Array<Az_Users_Organisation>;
  az_users_Organisation_aggregate: Az_Users_Organisation_Aggregate;
  az_users_Organisation_by_pk?: Maybe<Az_Users_Organisation>;
  az_users_UsageLog: Array<Az_Users_UsageLog>;
  az_users_UsageLog_aggregate: Az_Users_UsageLog_Aggregate;
  az_users_Users: Array<Az_Users_Users>;
  az_users_Users_aggregate: Az_Users_Users_Aggregate;
  az_users_Users_by_pk?: Maybe<Az_Users_Users>;
};


export type Query_RootAz_Docs_DocumentsArgs = {
  distinct_on?: Maybe<Array<Az_Docs_Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Docs_Documents_Order_By>>;
  where?: Maybe<Az_Docs_Documents_Bool_Exp>;
};


export type Query_RootAz_Docs_Documents_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Docs_Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Docs_Documents_Order_By>>;
  where?: Maybe<Az_Docs_Documents_Bool_Exp>;
};


export type Query_RootAz_Docs_Documents_By_PkArgs = {
  documentId: Scalars['Int'];
};


export type Query_RootAz_Docs_PhotoArgs = {
  distinct_on?: Maybe<Array<Az_Docs_Photo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Docs_Photo_Order_By>>;
  where?: Maybe<Az_Docs_Photo_Bool_Exp>;
};


export type Query_RootAz_Docs_Photo_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Docs_Photo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Docs_Photo_Order_By>>;
  where?: Maybe<Az_Docs_Photo_Bool_Exp>;
};


export type Query_RootAz_Docs_Photo_By_PkArgs = {
  photoId: Scalars['Int'];
};


export type Query_RootAz_Measurements_MeasurementsArgs = {
  distinct_on?: Maybe<Array<Az_Measurements_Measurements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Measurements_Measurements_Order_By>>;
  where?: Maybe<Az_Measurements_Measurements_Bool_Exp>;
};


export type Query_RootAz_Measurements_Measurements_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Measurements_Measurements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Measurements_Measurements_Order_By>>;
  where?: Maybe<Az_Measurements_Measurements_Bool_Exp>;
};


export type Query_RootAz_Sensors_LocationsArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_Locations_Order_By>>;
  where?: Maybe<Az_Sensors_Locations_Bool_Exp>;
};


export type Query_RootAz_Sensors_Locations_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_Locations_Order_By>>;
  where?: Maybe<Az_Sensors_Locations_Bool_Exp>;
};


export type Query_RootAz_Sensors_Locations_By_PkArgs = {
  locationId: Scalars['Int'];
};


export type Query_RootAz_Sensors_PollutionFactorsArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_PollutionFactors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_PollutionFactors_Order_By>>;
  where?: Maybe<Az_Sensors_PollutionFactors_Bool_Exp>;
};


export type Query_RootAz_Sensors_PollutionFactors_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_PollutionFactors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_PollutionFactors_Order_By>>;
  where?: Maybe<Az_Sensors_PollutionFactors_Bool_Exp>;
};


export type Query_RootAz_Sensors_PollutionFactors_By_PkArgs = {
  factorId: Scalars['Int'];
};


export type Query_RootAz_Sensors_SensorFactorsArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_SensorFactors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_SensorFactors_Order_By>>;
  where?: Maybe<Az_Sensors_SensorFactors_Bool_Exp>;
};


export type Query_RootAz_Sensors_SensorFactors_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_SensorFactors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_SensorFactors_Order_By>>;
  where?: Maybe<Az_Sensors_SensorFactors_Bool_Exp>;
};


export type Query_RootAz_Sensors_SensorsArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_Sensors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_Sensors_Order_By>>;
  where?: Maybe<Az_Sensors_Sensors_Bool_Exp>;
};


export type Query_RootAz_Sensors_Sensors_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_Sensors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_Sensors_Order_By>>;
  where?: Maybe<Az_Sensors_Sensors_Bool_Exp>;
};


export type Query_RootAz_Sensors_Sensors_By_PkArgs = {
  sensorId: Scalars['Int'];
};


export type Query_RootAz_Sensors_ServiceLogArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_ServiceLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_ServiceLog_Order_By>>;
  where?: Maybe<Az_Sensors_ServiceLog_Bool_Exp>;
};


export type Query_RootAz_Sensors_ServiceLog_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_ServiceLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_ServiceLog_Order_By>>;
  where?: Maybe<Az_Sensors_ServiceLog_Bool_Exp>;
};


export type Query_RootAz_Users_OrganisationArgs = {
  distinct_on?: Maybe<Array<Az_Users_Organisation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_Organisation_Order_By>>;
  where?: Maybe<Az_Users_Organisation_Bool_Exp>;
};


export type Query_RootAz_Users_Organisation_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Users_Organisation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_Organisation_Order_By>>;
  where?: Maybe<Az_Users_Organisation_Bool_Exp>;
};


export type Query_RootAz_Users_Organisation_By_PkArgs = {
  organisationId: Scalars['Int'];
};


export type Query_RootAz_Users_UsageLogArgs = {
  distinct_on?: Maybe<Array<Az_Users_UsageLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_UsageLog_Order_By>>;
  where?: Maybe<Az_Users_UsageLog_Bool_Exp>;
};


export type Query_RootAz_Users_UsageLog_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Users_UsageLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_UsageLog_Order_By>>;
  where?: Maybe<Az_Users_UsageLog_Bool_Exp>;
};


export type Query_RootAz_Users_UsersArgs = {
  distinct_on?: Maybe<Array<Az_Users_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_Users_Order_By>>;
  where?: Maybe<Az_Users_Users_Bool_Exp>;
};


export type Query_RootAz_Users_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Users_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_Users_Order_By>>;
  where?: Maybe<Az_Users_Users_Bool_Exp>;
};


export type Query_RootAz_Users_Users_By_PkArgs = {
  userId: Scalars['Int'];
};


export type Service_Type_Comparison_Exp = {
  _eq?: Maybe<Scalars['service_type']>;
  _gt?: Maybe<Scalars['service_type']>;
  _gte?: Maybe<Scalars['service_type']>;
  _in?: Maybe<Array<Scalars['service_type']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['service_type']>;
  _lte?: Maybe<Scalars['service_type']>;
  _neq?: Maybe<Scalars['service_type']>;
  _nin?: Maybe<Array<Scalars['service_type']>>;
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  az_docs_Documents: Array<Az_Docs_Documents>;
  az_docs_Documents_aggregate: Az_Docs_Documents_Aggregate;
  az_docs_Documents_by_pk?: Maybe<Az_Docs_Documents>;
  az_docs_Photo: Array<Az_Docs_Photo>;
  az_docs_Photo_aggregate: Az_Docs_Photo_Aggregate;
  az_docs_Photo_by_pk?: Maybe<Az_Docs_Photo>;
  az_measurements_Measurements: Array<Az_Measurements_Measurements>;
  az_measurements_Measurements_aggregate: Az_Measurements_Measurements_Aggregate;
  az_sensors_Locations: Array<Az_Sensors_Locations>;
  az_sensors_Locations_aggregate: Az_Sensors_Locations_Aggregate;
  az_sensors_Locations_by_pk?: Maybe<Az_Sensors_Locations>;
  az_sensors_PollutionFactors: Array<Az_Sensors_PollutionFactors>;
  az_sensors_PollutionFactors_aggregate: Az_Sensors_PollutionFactors_Aggregate;
  az_sensors_PollutionFactors_by_pk?: Maybe<Az_Sensors_PollutionFactors>;
  az_sensors_SensorFactors: Array<Az_Sensors_SensorFactors>;
  az_sensors_SensorFactors_aggregate: Az_Sensors_SensorFactors_Aggregate;
  az_sensors_Sensors: Array<Az_Sensors_Sensors>;
  az_sensors_Sensors_aggregate: Az_Sensors_Sensors_Aggregate;
  az_sensors_Sensors_by_pk?: Maybe<Az_Sensors_Sensors>;
  az_sensors_ServiceLog: Array<Az_Sensors_ServiceLog>;
  az_sensors_ServiceLog_aggregate: Az_Sensors_ServiceLog_Aggregate;
  az_users_Organisation: Array<Az_Users_Organisation>;
  az_users_Organisation_aggregate: Az_Users_Organisation_Aggregate;
  az_users_Organisation_by_pk?: Maybe<Az_Users_Organisation>;
  az_users_UsageLog: Array<Az_Users_UsageLog>;
  az_users_UsageLog_aggregate: Az_Users_UsageLog_Aggregate;
  az_users_Users: Array<Az_Users_Users>;
  az_users_Users_aggregate: Az_Users_Users_Aggregate;
  az_users_Users_by_pk?: Maybe<Az_Users_Users>;
};


export type Subscription_RootAz_Docs_DocumentsArgs = {
  distinct_on?: Maybe<Array<Az_Docs_Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Docs_Documents_Order_By>>;
  where?: Maybe<Az_Docs_Documents_Bool_Exp>;
};


export type Subscription_RootAz_Docs_Documents_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Docs_Documents_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Docs_Documents_Order_By>>;
  where?: Maybe<Az_Docs_Documents_Bool_Exp>;
};


export type Subscription_RootAz_Docs_Documents_By_PkArgs = {
  documentId: Scalars['Int'];
};


export type Subscription_RootAz_Docs_PhotoArgs = {
  distinct_on?: Maybe<Array<Az_Docs_Photo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Docs_Photo_Order_By>>;
  where?: Maybe<Az_Docs_Photo_Bool_Exp>;
};


export type Subscription_RootAz_Docs_Photo_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Docs_Photo_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Docs_Photo_Order_By>>;
  where?: Maybe<Az_Docs_Photo_Bool_Exp>;
};


export type Subscription_RootAz_Docs_Photo_By_PkArgs = {
  photoId: Scalars['Int'];
};


export type Subscription_RootAz_Measurements_MeasurementsArgs = {
  distinct_on?: Maybe<Array<Az_Measurements_Measurements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Measurements_Measurements_Order_By>>;
  where?: Maybe<Az_Measurements_Measurements_Bool_Exp>;
};


export type Subscription_RootAz_Measurements_Measurements_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Measurements_Measurements_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Measurements_Measurements_Order_By>>;
  where?: Maybe<Az_Measurements_Measurements_Bool_Exp>;
};


export type Subscription_RootAz_Sensors_LocationsArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_Locations_Order_By>>;
  where?: Maybe<Az_Sensors_Locations_Bool_Exp>;
};


export type Subscription_RootAz_Sensors_Locations_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_Locations_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_Locations_Order_By>>;
  where?: Maybe<Az_Sensors_Locations_Bool_Exp>;
};


export type Subscription_RootAz_Sensors_Locations_By_PkArgs = {
  locationId: Scalars['Int'];
};


export type Subscription_RootAz_Sensors_PollutionFactorsArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_PollutionFactors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_PollutionFactors_Order_By>>;
  where?: Maybe<Az_Sensors_PollutionFactors_Bool_Exp>;
};


export type Subscription_RootAz_Sensors_PollutionFactors_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_PollutionFactors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_PollutionFactors_Order_By>>;
  where?: Maybe<Az_Sensors_PollutionFactors_Bool_Exp>;
};


export type Subscription_RootAz_Sensors_PollutionFactors_By_PkArgs = {
  factorId: Scalars['Int'];
};


export type Subscription_RootAz_Sensors_SensorFactorsArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_SensorFactors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_SensorFactors_Order_By>>;
  where?: Maybe<Az_Sensors_SensorFactors_Bool_Exp>;
};


export type Subscription_RootAz_Sensors_SensorFactors_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_SensorFactors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_SensorFactors_Order_By>>;
  where?: Maybe<Az_Sensors_SensorFactors_Bool_Exp>;
};


export type Subscription_RootAz_Sensors_SensorsArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_Sensors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_Sensors_Order_By>>;
  where?: Maybe<Az_Sensors_Sensors_Bool_Exp>;
};


export type Subscription_RootAz_Sensors_Sensors_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_Sensors_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_Sensors_Order_By>>;
  where?: Maybe<Az_Sensors_Sensors_Bool_Exp>;
};


export type Subscription_RootAz_Sensors_Sensors_By_PkArgs = {
  sensorId: Scalars['Int'];
};


export type Subscription_RootAz_Sensors_ServiceLogArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_ServiceLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_ServiceLog_Order_By>>;
  where?: Maybe<Az_Sensors_ServiceLog_Bool_Exp>;
};


export type Subscription_RootAz_Sensors_ServiceLog_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Sensors_ServiceLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Sensors_ServiceLog_Order_By>>;
  where?: Maybe<Az_Sensors_ServiceLog_Bool_Exp>;
};


export type Subscription_RootAz_Users_OrganisationArgs = {
  distinct_on?: Maybe<Array<Az_Users_Organisation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_Organisation_Order_By>>;
  where?: Maybe<Az_Users_Organisation_Bool_Exp>;
};


export type Subscription_RootAz_Users_Organisation_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Users_Organisation_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_Organisation_Order_By>>;
  where?: Maybe<Az_Users_Organisation_Bool_Exp>;
};


export type Subscription_RootAz_Users_Organisation_By_PkArgs = {
  organisationId: Scalars['Int'];
};


export type Subscription_RootAz_Users_UsageLogArgs = {
  distinct_on?: Maybe<Array<Az_Users_UsageLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_UsageLog_Order_By>>;
  where?: Maybe<Az_Users_UsageLog_Bool_Exp>;
};


export type Subscription_RootAz_Users_UsageLog_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Users_UsageLog_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_UsageLog_Order_By>>;
  where?: Maybe<Az_Users_UsageLog_Bool_Exp>;
};


export type Subscription_RootAz_Users_UsersArgs = {
  distinct_on?: Maybe<Array<Az_Users_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_Users_Order_By>>;
  where?: Maybe<Az_Users_Users_Bool_Exp>;
};


export type Subscription_RootAz_Users_Users_AggregateArgs = {
  distinct_on?: Maybe<Array<Az_Users_Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Az_Users_Users_Order_By>>;
  where?: Maybe<Az_Users_Users_Bool_Exp>;
};


export type Subscription_RootAz_Users_Users_By_PkArgs = {
  userId: Scalars['Int'];
};


export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};
