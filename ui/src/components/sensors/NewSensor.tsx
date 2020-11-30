import React, { useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

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
  EuiDatePicker,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormLabel,
} from '@elastic/eui'

import { loadLocationDataBySensorId, sensorSchema } from './utils'
import { useAddSensor } from 'src/graphql/query/sensors/addSensor'
import { useRouter } from 'next/router'
import { Page } from '../utils/Page'
import { DocumentLoader, PhotoLoader } from '../files/FileLoader'
import { getErrorMsg } from '../utils'
import moment from 'moment'

export const NewSensor = () => {
  const [ addSensors ] = useAddSensor()
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState('')
  const router = useRouter()

  const { register, handleSubmit, errors, control, watch} = useForm({
    resolver: yupResolver(sensorSchema)
  })

  const timestamp = watch('timestamp')

  const onSubmit = useCallback(async sensorData => {
    setLoading(true)
    try {
      const { location, error } = await loadLocationDataBySensorId(sensorData.sensorId)

      if (error) {
        throw error
      } else if (location) {
        console.log(sensorData, location)
        const { data, errors } = await addSensors({ variables: {
          ...location,
          ...sensorData
        }})

        if (errors) throw errors

        setLoading(false)
        router.push('/sensors/[sensorId]', `/sensors/${data.insert_az_sensors_Sensors.returning[0].sensorId}`)
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
        <EuiFormErrorText>{getErrorMsg(errors.sensorId)}</EuiFormErrorText>

        <EuiFormRow label="Виробник" fullWidth>
          <EuiFieldText name="manufacturer" inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors.manufacturer)}</EuiFormErrorText>

        <EuiFormRow label="Модель" fullWidth>
          <EuiFieldText name="model" inputRef={register} fullWidth />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors.model)}</EuiFormErrorText>

        <EuiFormRow label="Час закінчення робіт" fullWidth>
          <Controller
            name="timestamp"
            control={control}
            render={props =>
              <EuiDatePicker showTimeSelect selected={moment(timestamp)} onChange={props.onChange} fullWidth />
            } // props contains: onChange, onBlur and value
          />
        </EuiFormRow>

        <EuiFormRow label="Файли" fullWidth>
          <Controller
            name="documentIds"
            control={control}
            render={props =>
              <DocumentLoader onChange={props.onChange} />
            } // props contains: onChange, onBlur and value
          />
        </EuiFormRow>

        <EuiFormRow label="Серія фото" fullWidth>
          <Controller
            name="photoIds"
            control={control}
            render={props =>
              <PhotoLoader onChange={props.onChange} />
            } // props contains: onChange, onBlur and value
          />
        </EuiFormRow>

        <EuiSpacer />
        <SubmitButton />
        <EuiFormErrorText>{error}</EuiFormErrorText>

      </EuiForm>
    </Page>

  )
}

export default NewSensor