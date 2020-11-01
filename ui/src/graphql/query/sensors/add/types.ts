import { Maybe } from "graphql/jsutils/Maybe";
import { Exact, Scalars, Az_Sensors_Sensors } from "../../../types";

export type AddSensorsMutationVariables = Exact<{
  locationId?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  model?: Maybe<Scalars['String']>;
  sensorId?: Maybe<Scalars['Int']>;
  locationPoint?: Maybe<Scalars['point']>;
  mapsLink?: Maybe<Scalars['String']>;
  elevation?: Maybe<Scalars['float8']>;
  airlyLink?: Maybe<Scalars['String']>;
  actLink?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
}>;


export type AddSensorsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_az_sensors_Sensors?: Maybe<(
    { __typename?: 'az_sensors_Sensors_mutation_response' }
    & { returning: Array<(
      { __typename?: 'az_sensors_Sensors' }
      & Pick<Az_Sensors_Sensors, 'locationId'>
    )> }
  )> }
);
