export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum Az_Docs_Service_Type {
  Planned = 'Planned',
  Unscheduled = 'Unscheduled',
  Replacement = 'Replacement'
}

export enum Az_Sensors_Measurement_Unit {
  'µg/m³' = 'µg/m³',
  '°C' = '°C',
  '%' = '%',
  'hPa' = 'hPa',
  'km/h' = 'km/h',
  '°' = '°'
}

export type Az_Sensors_Measurement_Value = {
  __typename?: 'az_sensors_measurement_value';
  name: Scalars['String'];
  value: Scalars['Float'];
};

export type Az_Sensors_PollutionFactors = {
  __typename?: 'az_sensors_PollutionFactors';
  factorId: Scalars['Int'];
  name: Scalars['String'];
  label: Scalars['String'];
  unit: Scalars['String'];
  maxValues?: Maybe<Az_Sensors_Measurement_Value>;
};

export type PollutionFactors = {
  az_sensors_PollutionFactors: Az_Sensors_PollutionFactors
}

export type Az_Sensors_Locations = {
  __typename?: 'az_sensors_Locations';
  locationId: Scalars['Int'];
  locationPoint: Scalars['Int'];
  elevation: Scalars['Float'];
  address: Scalars['String'];
  airlyLink?: Maybe<Scalars['String']>;
  mapsLink?: Maybe<Scalars['String']>;
  actLink?: Maybe<Scalars['String']>;
};

export type Locations = {
  az_sensors_Locations: Az_Sensors_Locations
}

export type Az_Sensors_Sensors = {
  __typename?: 'az_sensors_Sensors';
  sensorId: Scalars['Int'];
  locationId: Scalars['Int'];
  manufacturer: Scalars['String'];
  model: Scalars['String'];
  factors: Array<Maybe<Scalars['Int']>>;
};

export type Sensors = {
  az_sensors_Sensors: Az_Sensors_Sensors
};

export type Az_Users_Organisation = {
  __typename?: 'az_users_Organisation';
  organisationId: Scalars['Int'];
  fullName: Scalars['String'];
  shortName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  rntrc: Scalars['String'];
  registryLink?: Maybe<Scalars['String']>;
  organisationRole?: Maybe<Scalars['String']>;
  actLink?: Maybe<Scalars['String']>;
};

export type Organisation = {
  az_users_Organisation: Az_Users_Organisation
}

export type Az_Users_Users = {
  __typename?: 'az_users_Users';
  userId: Scalars['Int'];
  fullName: Scalars['String'];
  email?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  organisationId?: Maybe<Scalars['Int']>;
  userRole?: Maybe<Scalars['String']>;
  actLink?: Maybe<Scalars['String']>;
};

export type Users = {
  az_users_Users: Az_Users_Users
}

export type Az_Users_Usagelog = {
  __typename?: 'az_users_Usagelog';
  userId?: Maybe<Scalars['Int']>;
  timestamp: Scalars['String'];
  query: Scalars['String'];
  queryType: Scalars['String'];
};

export type Usegelog = { 
  az_Users_Usagelog: Az_Users_Usagelog
}

export type Az_Measurements_Measurements = {
  __typename?: 'az_measurements_Measurements';
  locationId: Scalars['Int'];
  sensorId: Scalars['Int'];
  timestamp: Scalars['String'];
  values: Array<Maybe<Az_Sensors_Measurement_Value>>;
};

export type Measurements = {
  az_measurements_Measurements: Az_Measurements_Measurements
}

export type Az_Docs_Documents = {
  __typename?: 'az_docs_Documents';
  documentId: Scalars['Int'];
  documentBody?: Maybe<Scalars['String']>;
};

export type Documents = {
  az_docs_Documents: Az_Docs_Documents
}

export type Az_Docs_Photo = {
  __typename?: 'az_docs_Photo';
  photoId: Scalars['Int'];
  photoSeries: Array<Maybe<Scalars['String']>>;
};

export type Photo = {
  az_docs_Photo: Az_Docs_Photo
}
