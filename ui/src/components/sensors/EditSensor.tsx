import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { GetSensorById_az_sensors_Sensors as SensorType } from "src/graphql/query/sensors/types/GetSensorById"

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
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiText,
  EuiTitle,
  EuiCodeBlock,
} from '@elastic/eui';

import { loadLocationDataBySensorId, sensorSchema, withLoadSensorFormUrl } from './utils';
import { useAddSensor } from 'src/graphql/query/sensors/addSensors';
import { useRouter } from 'next/router';
import { Page } from '../utils/Page';
import { useUpdateSensorById } from 'src/graphql/query/sensors/updateSensor';

type SensorFormProps = {
  sensor: SensorType
}

export const EditSensorForm = ({ sensor: { model, manufacturer, sensorId, Location: location } }: SensorFormProps) => {
  const [ updateSensors, { data: res } ] = useUpdateSensorById(sensorId)
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState('')
  const router = useRouter()

  const { register, handleSubmit, watch, errors, setValue } = useForm({
    resolver: yupResolver(sensorSchema),
    reValidateMode: 'onBlur'
  })

  const watchModel = watch('model')
  const watchManufacturer = watch('manufacturer')

  useEffect(() => {
    setValue('sensorId', sensorId)
    setValue('model', model)
    setValue('manufacturer', manufacturer)
  }, [])

  const notChange = watchModel === model && watchManufacturer === manufacturer

  const resSensorId = res?.update_az_sensors_Sensors.returning[0].sensorId

  const onSubmit = useCallback(async sensorData => {
    console.log('SUBMIT', sensorData)
    setLoading(true)
    try {
        await updateSensors({ variables: {
          ...location,
          ...sensorData
        }})
        setLoading(false)
      }
    catch (error) {
      console.error(error)
      setError(error.toString())
      setLoading(false)
    }
  }, [])

  const SubmitButton = useCallback(() => loading
    ? <EuiLoadingSpinner size='m' />
    : <EuiButton type="submit" disabled={notChange} fill>
        Редагувати датичк
      </EuiButton>
    , [ loading, resSensorId ])

  const AddedAlert = useCallback(() => (error && !resSensorId)
    ? <EuiCallOut title="Датчик не редаговано, сталась помилка:" color='danger'>{error}</EuiCallOut>
    : <EuiCallOut title="Датчик успішно редаговано, найближчим часом вас перенаправить на його сторінку" color='success'>
        <EuiButton
          color="secondary"
          size="s"
          onClick={() => router.push('/sensors/[sensorId]', `/sensors/${resSensorId}`)}
        >
          Перейти на сторінку датчика
        </EuiButton>
    </EuiCallOut>
  , [ error, resSensorId || 0 ])

  const SubmitPanel = useCallback(() => (error || resSensorId)
    ? <AddedAlert />
    : <SubmitButton />
  , [ error, resSensorId])

  return (
    <EuiForm component="form" onSubmit={handleSubmit(onSubmit)}>
      <EuiFormRow label="ID сенсора"fullWidth>
        <EuiFieldNumber
          name='sensorId'
          placeholder="ID сенсора з Airly"
          inputRef={register}
          disabled
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
  );
};

type EditFlayOutProps = SensorFormProps & {
  onClose: () => void
}

const EditFlayOut = ({ sensor, onClose }: EditFlayOutProps) => <EuiFlyout
    ownFocus
    onClose={onClose}
    aria-labelledby="flyoutTitle">
    <EuiFlyoutHeader hasBorder>
      <EuiTitle size="m">
        <h2 id="flyoutTitle">Редагувати датчик</h2>
      </EuiTitle>
    </EuiFlyoutHeader>
    <EuiFlyoutBody>
      <EditSensorForm sensor={sensor} />
    </EuiFlyoutBody>
  </EuiFlyout>


export const EditSensor = ({ sensor }: SensorFormProps) => {
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

  const FlayOut = useCallback(() => isFlyoutVisible
    ? <EditFlayOut onClose={() => setIsFlyoutVisible(false)} sensor={sensor} />
    : null
  , [ isFlyoutVisible ])

  return (
    <>
      <EuiButton
        iconType="documentEdit"
        size="s"
        onClick={() => setIsFlyoutVisible(true)}
      >
        Редагувати
      </EuiButton>
      <FlayOut />
    </>
  );
};