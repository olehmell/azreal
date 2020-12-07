import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiDatePicker, EuiFormErrorText, EuiForm } from '@elastic/eui'
import moment from 'moment'
import React, { useState, useEffect, useCallback } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useGetServiceLogs } from 'src/graphql/query/service-log/getServiceLogs'
import { GetServiceLogs_az_sensors_ServiceLog } from 'src/graphql/query/service-log/types/GetServiceLogs'
import { SensorsSelect } from '../measurement/SensorsSelect'
import { findErrors, getErrorMsg } from '../utils'
import DataPicker, { getDateRangeString } from '../utils/DataPicker'
import { Loading } from '../utils/loading'


type ServiceLogSelectorProps = {
  onChange: (serviceLogs: GetServiceLogs_az_sensors_ServiceLog[]) => void,
  sensorId?: number
}

export const ServiceLogSelector = ({ onChange, sensorId: initialSensorId }: ServiceLogSelectorProps) => {
  const { register, handleSubmit, setValue, errors, control, watch } = useForm({
    // resolver: yupResolver()
  })
  const getServiceLog = useGetServiceLogs()
  
  // const { token } = useAuthObj()
  const [ loading, setLoading ] = useState(false)
  
  useEffect(() => {
    setValue('sensorId', initialSensorId)
  }, [ initialSensorId ])
  
  const onSubmit = async ({ sensorId = initialSensorId, dayRange }) => {
    setLoading(true)
      
    try {
      const variables = {
        ...getDateRangeString(dayRange),
        sensorId,
      }
    
      const { data, errors } = await getServiceLog(variables)

      if (errors) throw errors

      onChange(data.az_sensors_ServiceLog)
    } catch (err) {
      const message = err?.toString()
  
      errors.load = { message }
  
      console.error(message)
      onChange([])
    }
  
    setLoading(false)  
  }
  
  const SubmitButton = useCallback(() =>
    <EuiButton disabled={loading} fill type="submit">
        Отримати
    </EuiButton>
  , [ loading ])
  
  return (
    <EuiForm component="form" onSubmit={handleSubmit(onSubmit)}>
  
      <EuiFlexGroup justifyContent='spaceBetween' alignItems='center' >
        <EuiFlexItem>
          <Controller
            name="dayRange"
            control={control}
            render={({ onChange, value}) =>
              <DataPicker value={value} onChange={onChange} />
            } // props contains: onChange, onBlur and value
          />
        </EuiFlexItem>

        {!initialSensorId && <EuiFlexItem>
          <SensorsSelect
            name='sensorId'
            inputRef={register}
            placeholder='Id сенсора'
            defaultValue={undefined}
            fullWidth
            required
          />
        </EuiFlexItem>}
        <EuiFlexItem>
          <SubmitButton />
        </EuiFlexItem>
      </EuiFlexGroup>
      {loading && <Loading />}
      {findErrors(errors).map((err, i) => <EuiFormErrorText key={`error-${i}`}>{getErrorMsg(err)}</EuiFormErrorText>)}
    </EuiForm>
  
  )
}