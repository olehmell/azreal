import { Maybe } from "graphql/jsutils/Maybe";
import { Exact, Az_Sensors_Sensors, Az_Sensors_Locations } from "../../../types";

export type GetSensorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSensorsQuery = (
  { __typename?: 'query_root' }
  & { az_sensors_Sensors: Array<(
    { __typename?: 'az_sensors_Sensors' }
    & Pick<Az_Sensors_Sensors, 'locationId' | 'manufacturer' | 'model' | 'sensorId'>
    & { Location?: Maybe<(
      { __typename?: 'az_sensors_Locations' }
      & Pick<Az_Sensors_Locations, 'actLink' | 'address' | 'airlyLink' | 'elevation' | 'locationId' | 'locationPoint' | 'mapsLink'>
    )> }
  )> }
);
