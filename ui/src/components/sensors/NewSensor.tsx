import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';

import {
  EuiButton,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiFieldNumber,
  EuiLoadingSpinner,
  EuiFormErrorText,
  EuiCallOut,
} from '@elastic/eui';

import { loadLocationDataBySensorId, sensorSchema } from './utils';
import { useAddSensor } from 'src/graphql/query/sensors/addSensors';
import { useRouter } from 'next/router';
import { Page } from '../utils/Page';



export const NewSensor = () => {
  const [ addSensors, { data: res } ] = useAddSensor()
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState('')
  const router = useRouter()

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(sensorSchema),
    reValidateMode: 'onBlur'
  })

  const resSensorId = res?.insert_az_sensors_Sensors.returning[0].sensorId

  const onSubmit = useCallback(async sensorData => {
    setLoading(true)
    try {
      const { location, error } = await loadLocationDataBySensorId(sensorData.sensorId)

      if (error) {
        throw error
      } else if (location) {
        console.log(sensorData, location)
        await addSensors({ variables: {
          ...location,
          ...sensorData
        }})
        setLoading(false)
      }
    } catch (error) {
      console.error(error)
      setError(error.toString())
      setLoading(false)
    }
  }, [ addSensors ])

  const SubmitButton = useCallback(() => loading
    ? <EuiLoadingSpinner size='m' />
    : <EuiButton type="submit" fill>
        Додати датчик
    </EuiButton>
  , [ loading ])

  const AddedAlert = useCallback(() => (error && !resSensorId)
    ? <EuiCallOut title="Датчик не додано, сталась помилка:" color='danger'>{error}</EuiCallOut>
    : <EuiCallOut title="Датчик успішно додано" color='success'>
      <EuiButton
        color="secondary"
        size="s"
        onClick={() => router.push('/sensors/[sensorId]', `/sensors/${resSensorId}`)}
      >
          Перейти на сторінку датчика
      </EuiButton>
    </EuiCallOut>
  , [ error, resSensorId, router ])

  const SubmitPanel = useCallback(() => (error || resSensorId)
    ? <AddedAlert />
    : <SubmitButton />
  , [ error, resSensorId ])

  return (
    <Page title='Редагувати датчик'>
      <EuiForm component="form" onSubmit={handleSubmit(onSubmit)}>
        <EuiFormRow label="ID сенсора"fullWidth>
          <EuiFieldNumber
            name='sensorId'
            placeholder="ID сенсора з Airly"
            inputRef={register}
            fullWidth
            required
          />
        </EuiFormRow>
        <EuiFormErrorText title={errors.sensorId} />

        <EuiFormRow label="Виробник" fullWidth>
          <EuiFieldText name="manufacturer" inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText title={errors.manufacturer} />


        <EuiFormRow label="Модель" fullWidth>
          <EuiFieldText name="model" inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText title={errors.model} />

        <EuiSpacer />
        <SubmitPanel />

      </EuiForm>
    </Page>

  );
};

export default NewSensor