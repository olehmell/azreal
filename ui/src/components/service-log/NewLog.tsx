import React, { useCallback, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  EuiButton,
  EuiForm,
  EuiFormRow,
  EuiSpacer,
  EuiLoadingSpinner,
  EuiFormErrorText,
  EuiDatePicker,
  EuiSelect,
  EuiFieldNumber,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormLabel,
} from '@elastic/eui'

import { useRouter } from 'next/router'
import { Page } from '../utils/Page'
import { DocumentLoader, PhotoLoader } from '../forms/File'
import { getErrorMsg } from '../utils'
import { serviceLogSchema } from './utils'
import moment from 'moment'
import { SelectorOptionType } from 'src/types'

type NewLogProps = {
  sensorId?: number,
  locationId?: number
}

const typeServiseOptions: SelectorOptionType[] = [
  {
    text: 'Плановий сервіс',
    value: 'planned'
  },
  {
    text: 'Позаплановий сервіс',
    value: 'unscheduled'
  },
  {
    text: 'Заміна',
    value: 'change'
  },
  {
    text: 'Встановлення',
    value: 'setup'
  }
]

export const NewLog = ({ sensorId }: NewLogProps) => {
  // !- const [ addNewLog ] = useAddServiceLog({ sensorId, locationId })
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState('')
  const router = useRouter()

  const { register, handleSubmit, errors, control, watch } = useForm({
    resolver: yupResolver(serviceLogSchema)
  })

  const installTime = watch('installTime')
  const uninstallTime = watch('uninstallTime')

  const onSubmit = useCallback(async (data) => {
    setLoading(true)
    console.log(data)
    try {
      // !- const { data, error } = await addNewLog(data)

      if (errors) throw errors

      setLoading(false)
      router.push('/logs/[logId]', '/logs/[logId]')
    } catch (error) {
      console.error(error)
      setError(error.toString())
      setLoading(false)
    }
  }, [ /* addNewLog */ ])

  const SubmitButton = useCallback(() => loading
    ? <EuiLoadingSpinner size='m' />
    : <EuiButton type="submit" fill>
        Додати запис
    </EuiButton>
  , [ loading ])

  return (
    <Page title={`Додати новий запис для датчика: ${sensorId}`}>
      <EuiForm component="form" onSubmit={handleSubmit(onSubmit)}>

        {!sensorId && <EuiFormRow label='ID сенсора' fullWidth>
          <EuiFieldNumber
            name='sensorId'
            placeholder='ID сенсора'
            fullWidth
            required
          />
        </EuiFormRow>}
      
        <EuiFormRow label="Тип сервісу" fullWidth>
          <EuiSelect
            name='seriveType'
            placeholder="Оберіть тип сервісу"
            inputRef={register}
            options={typeServiseOptions}
            fullWidth
          />
        </EuiFormRow>
        <EuiFormErrorText>{getErrorMsg(errors.manufacturer)}</EuiFormErrorText>

        <EuiFlexGroup justifyContent='spaceBetween' style={{ marginTop: '.5rem', marginBottom: '.5rem' }}>
          <EuiFlexItem>
            <EuiFormLabel>{'Час зняття/вимкнення'}</EuiFormLabel>
            <Controller
              name="uninstallTime"
              control={control}
              render={props =>
                <EuiDatePicker showTimeSelect selected={moment(uninstallTime)} onChange={props.onChange} fullWidth />
              } // props contains: onChange, onBlur and value
            />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFormLabel>{'Час встановлення/ввімкнення'}</EuiFormLabel>
            <Controller
              name="installTime"
              control={control}
              render={props =>
                <EuiDatePicker showTimeSelect selected={moment(installTime)} onChange={props.onChange} fullWidth />
              } // props contains: onChange, onBlur and value
            />
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiFormRow label="Файл датчика" fullWidth>
          <Controller
            name="documentId"
            control={control}
            render={props =>
              <DocumentLoader onChange={props.onChange} />
            } // props contains: onChange, onBlur and value
          />
        </EuiFormRow>

        <EuiFormRow label="Серія фото" fullWidth>
          <Controller
            name="photoSeries"
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

export default NewLog