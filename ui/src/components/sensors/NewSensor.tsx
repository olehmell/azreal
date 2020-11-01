import React, { useState } from 'react';

import {
  EuiButton,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiFieldNumber,
} from '@elastic/eui';

import { useAirlyLocationBySensorId } from './utils';
import { useAddSensorsMutation } from '../../graphql/query/sensors/add';

export default () => {
  const [ sensorId, setSensorId ] = useState<number>()
  const { data, loading } = useAirlyLocationBySensorId(sensorId)
  const [ addSensors, { data: res } ] = useAddSensorsMutation()
  console.log('LOCATION', data, loading)
  console.log('HOOKS RES', res)

  const isSensorId = !!sensorId

  return (
    <EuiForm component="form" onSubmit={(e) => {
        console.log('DATA', e)
      }}>
      <EuiFormRow label="ID сенсора"fullWidth>
        <EuiFieldNumber
          name='locationId'
          placeholder="ID сенсора з Airly"
          onBlur={e => setSensorId(parseInt(e.currentTarget.value))}
          fullWidth
          required
        />
      </EuiFormRow>

      <EuiFormRow label="Виробник" fullWidth>
        <EuiFieldText name="manufacturer" fullWidth />
      </EuiFormRow>

      <EuiFormRow label="Модель" fullWidth>
        <EuiFieldText name="model" fullWidth />
      </EuiFormRow>
  
      {isSensorId && data && <>
        <EuiFormRow label="ID локації" fullWidth>
          <EuiFieldNumber
            name='locationId'
            placeholder="ID локації з Airly"
            value={data.location?.locationId}
            fullWidth
            required
          />
        </EuiFormRow>

        <EuiFormRow label="Координати точки" fullWidth>
          <EuiFieldText
            name="locationPoint"
            value={`${data.location?.locationPoint}`}
            fullWidth />
        </EuiFormRow>

        <EuiFormRow label="Адреса" fullWidth>
          <EuiFieldText
            name="address"
            value={data.location?.address}
            fullWidth />
        </EuiFormRow>

        <EuiFormRow label="Висота над рівнем моря" fullWidth>
          <EuiFieldNumber
            name='elevation'
            placeholder="ID локації з Airly"
            value={data.location?.elevation}
            fullWidth
            required
          />
        </EuiFormRow>

        <EuiFormRow label="Посилання на Airly" fullWidth>
          <EuiFieldText
            name="airlyLink"
            fullWidth
            value={data.location?.airlyLink}
            type='url'
          />
        </EuiFormRow>

        <EuiFormRow label="Посилання на карту" fullWidth>
          <EuiFieldText name="mapsLink" fullWidth />
        </EuiFormRow>

        <EuiFormRow label="Посилання на акт" fullWidth>
          <EuiFieldText name="actLink" fullWidth />
        </EuiFormRow>
      </>}

      <EuiSpacer />

      <EuiButton type="submit" fill>
        Додати датчик
      </EuiButton>

      <EuiButton onClick={() => addSensors({ variables: { ...data?.location, sensorId } })} fill>
        Відправити
      </EuiButton>
    </EuiForm>
  );
};