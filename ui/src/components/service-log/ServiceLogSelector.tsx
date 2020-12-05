import { EuiLoadingSpinner, EuiButton, EuiFlexGroup, EuiFlexItem, EuiSelect, EuiDatePicker, EuiFormErrorText } from '@elastic/eui'
import moment from 'moment'
import React, { useState, useEffect, useCallback } from 'react'
import { useGetServiceLogs } from 'src/graphql/query/service-log/getServiceLogs'
import { GetServiceLogBySensorIdVariables } from 'src/graphql/query/service-log/types/GetServiceLogBySensorId'
import { GetServiceLogsVariables, GetServiceLogs_az_sensors_ServiceLog } from 'src/graphql/query/service-log/types/GetServiceLogs'
import { SensorsSelect } from '../measurement/SensorsSelect'
import { getErrorMsg } from '../utils'

type ServiceLogSelectionType = {
  from: string,
  to: string
}

type ServiceLogSelectorProps = {
  onChange: (serviceLogs: GetServiceLogs_az_sensors_ServiceLog[]) => void,
  sensorId?: number
}


export const ServiceLogSelector = ({ onChange, sensorId: initialSensorId }: ServiceLogSelectorProps) => {
  const [ fromData, setFromData ] = useState<string>()
  const [ toData, setToData ] = useState<string>()
  const [ sensorId, setSensorId ] = useState<number>(initialSensorId)
  const [ variables, setVariables ] = useState<GetServiceLogsVariables>()
  const { data, error, loading } = useGetServiceLogs(variables)

  const serviceLogs = data?.az_sensors_ServiceLog

  useEffect(() => {
    if (loading || !serviceLogs) return onChange([])

    onChange(serviceLogs || [])
  }, [ loading, serviceLogs?.length ])

  const onChangeSelector = (onChange) =>
    (e) => onChange(e.target.value)

  const onChangeFromData = (from) => {
    setFromData(from?.toString())
  }

  const onChangeToData= (to) => {
    setToData(to?.toString())
  }

  const Loading = useCallback(() => loading
    ? <EuiLoadingSpinner size='l' />
    : <EuiButton fill onClick={() => setVariables({ to: toData, from: fromData, sensorId })}>
      Показати
    </EuiButton>
  , [ loading ])

  console.error(error)

  return (
    <>
      <EuiFlexGroup justifyContent='spaceBetween' alignItems='center'>
        <EuiFlexItem>
          <EuiDatePicker showTimeSelect selected={fromData && moment(fromData)} onChange={onChangeFromData} />
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiDatePicker showTimeSelect selected={toData && moment(toData)} onChange={onChangeToData} />
        </EuiFlexItem>

        {!initialSensorId && <EuiFlexItem>
          <SensorsSelect
            placeholder="Оберіть Id датчика"
            value={sensorId}
            onChange={onChangeSelector(setSensorId)} />
        </EuiFlexItem>}

        <EuiFlexItem>
          <Loading />
        </EuiFlexItem>

      </EuiFlexGroup>
      {error && <EuiFormErrorText>{getErrorMsg(error)}</EuiFormErrorText>}
    </>

  )
}