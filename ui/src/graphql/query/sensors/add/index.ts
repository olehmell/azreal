import * as Types from './types';

import { gql } from '@apollo/client';
import { MutationHookOptions, useMutation } from '@apollo/react-hooks';
import * as Apollo from '@apollo/client'

export const AddSensorsDocument = gql`
    mutation AddSensors($locationId: Int, $manufacturer: String, $model: String, $sensorId: Int, $locationPoint: point, $mapsLink: String, $elevation: float8, $airlyLink: String, $actLink: String, $address: String) {
  insert_az_sensors_Sensors(
    objects: {manufacturer: $manufacturer, model: $model, sensorId: $sensorId, Location: {data: {locationId: $locationId, actLink: $actLink, address: $address, airlyLink: $airlyLink, elevation: $elevation, locationPoint: $locationPoint, mapsLink: $mapsLink}}}
  ) {
    returning {
      locationId
    }
  }
}
    `;
export type AddSensorsMutationFn = Apollo.MutationFunction<Types.AddSensorsMutation, Types.AddSensorsMutationVariables>;

/**
 * __useAddSensorsMutation__
 *
 * To run a mutation, you first call `useAddSensorsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddSensorsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addSensorsMutation, { data, loading, error }] = useAddSensorsMutation({
 *   variables: {
 *      locationId: // value for 'locationId'
 *      manufacturer: // value for 'manufacturer'
 *      model: // value for 'model'
 *      sensorId: // value for 'sensorId'
 *      locationPoint: // value for 'locationPoint'
 *      mapsLink: // value for 'mapsLink'
 *      elevation: // value for 'elevation'
 *      airlyLink: // value for 'airlyLink'
 *      actLink: // value for 'actLink'
 *      address: // value for 'address'
 *   },
 * });
 */
export function useAddSensorsMutation(baseOptions?: MutationHookOptions<Types.AddSensorsMutation, Types.AddSensorsMutationVariables>) {
  return useMutation<Types.AddSensorsMutation, Types.AddSensorsMutationVariables>(AddSensorsDocument, baseOptions);
}
export type AddSensorsMutationHookResult = ReturnType<typeof useAddSensorsMutation>;
export type AddSensorsMutationResult = Apollo.MutationResult<Types.AddSensorsMutation>;
export type AddSensorsMutationOptions = Apollo.BaseMutationOptions<Types.AddSensorsMutation, Types.AddSensorsMutationVariables>;