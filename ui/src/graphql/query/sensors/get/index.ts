import * as Types from './types';

import { gql } from '@apollo/client';
import { QueryHookOptions, useQuery, LazyQueryHookOptions, useLazyQuery } from '@apollo/react-hooks';
import * as Apollo from '@apollo/client'

export const GetSensorsDocument = gql`
    query getSensors {
  az_sensors_Sensors {
    locationId
    manufacturer
    model
    sensorId
    Location {
      actLink
      address
      airlyLink
      elevation
      locationId
      locationPoint
      mapsLink
    }
  }
}
    `;

/**
 * __useGetSensorsQuery__
 *
 * To run a query within a React component, call `useGetSensorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSensorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSensorsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSensorsQuery(baseOptions?: QueryHookOptions<Types.GetSensorsQuery, Types.GetSensorsQueryVariables>) {
        return useQuery<Types.GetSensorsQuery, Types.GetSensorsQueryVariables>(GetSensorsDocument, baseOptions);
      }
export function useGetSensorsLazyQuery(baseOptions?: LazyQueryHookOptions<Types.GetSensorsQuery, Types.GetSensorsQueryVariables>) {
          return useLazyQuery<Types.GetSensorsQuery, Types.GetSensorsQueryVariables>(GetSensorsDocument, baseOptions);
        }
export type GetSensorsQueryHookResult = ReturnType<typeof useGetSensorsQuery>;
export type GetSensorsLazyQueryHookResult = ReturnType<typeof useGetSensorsLazyQuery>;
export type GetSensorsQueryResult = Apollo.QueryResult<Types.GetSensorsQuery, Types.GetSensorsQueryVariables>;