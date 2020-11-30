import { EuiDescriptionList, EuiFlexGroup, EuiFlexItem, EuiPanel, EuiSpacer } from '@elastic/eui'
import moment from 'moment'
import React, { useState } from 'react'
import { useGetServiceLogs } from 'src/graphql/query/service-log/getServiceLogs'
import { GetServiceLogsVariables, GetServiceLogs_az_sensors_ServiceLog } from 'src/graphql/query/service-log/types/GetServiceLogs'
import { Files } from '../files/Files'
import { Images } from '../files/Images'
import { createDescItem } from '../utils'
import { Loading } from '../utils/loading'
import { Page } from '../utils/Page'
import { ServiceLogSelector } from './ServiceLogSelector'

const ServiceLogDesc = ({
  sensorId,
  serviceType,
  timestamp,
  Location: {
    address,
    mapsLink
  }
}: GetServiceLogs_az_sensors_ServiceLog) => {
  const items = [
    createDescItem('Сенсор', sensorId),
    createDescItem('Тип', serviceType),
    createDescItem('Адреса', <a href={mapsLink}>{address}</a>),
    createDescItem('Час робіт', moment(timestamp).format('lll')),
  ].filter(x => x !== undefined)

  return <EuiDescriptionList textStyle="reverse" listItems={items} />
}

const ServiceLog = (serviceLog: GetServiceLogs_az_sensors_ServiceLog) => {
  return <EuiPanel paddingSize="l">
    <EuiFlexGroup>
      <EuiFlexItem>
        <Images fileIds={serviceLog.Document.fileIds} />
      </EuiFlexItem>
      <EuiFlexItem>
        <ServiceLogDesc {...serviceLog} />
      </EuiFlexItem>
    </EuiFlexGroup>
    <Files fileIds={serviceLog.Photo.fileIds} />
  </EuiPanel>
}

type ServicLogsProps = {
  data: GetServiceLogs_az_sensors_ServiceLog[]
}

export const ServiceLogs = ({ data }: ServicLogsProps) => <EuiFlexItem>
  {data?.map(ServiceLog)}
</EuiFlexItem>

type ServiceLogsSectionProps = {
  sensorId: number
}

export const ServiceLogsSection = ({ sensorId }: Partial<ServiceLogsSectionProps>) => {
  const [ data, setData ] = useState<GetServiceLogs_az_sensors_ServiceLog[]>([])
  console.log('DATA', data)
  return <>
    <EuiSpacer size='xl' />
    <ServiceLogSelector onChange={(data) => setData(data)} sensorId={sensorId} />
    <EuiSpacer size='xl' />
    <ServiceLogs data={data} />
  </>
}

export const ServiceLogsSectionForSensor = (props: ServiceLogsSectionProps) =>
  <ServiceLogsSection {...props} />

export default () => {
  return <Page title='Сервісний журнал' >
    <ServiceLogsSection />
  </Page>
}
  