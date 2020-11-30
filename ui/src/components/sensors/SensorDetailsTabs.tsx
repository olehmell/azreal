import React, { Fragment } from 'react'

import {
  EuiIcon,
  EuiTabbedContent,
  EuiTitle,
  EuiText,
  EuiSpacer,
} from '@elastic/eui'
import { MeasurementsForSensor } from '../measurement/Measurement'
import { ServiceLogsSectionForSensor } from '../service-log/ServiceLogs'

type SensorTabsProps = {
  sensorId: number
}

export const SensorTabs = ({ sensorId }: SensorTabsProps) => {
  const tabs = [
    {
      id: 'measurements--id',
      name: 'Вимірювання',
      content: <MeasurementsForSensor sensorId={sensorId} />,
    },
    {
      id: 'service-logs--id',
      name: 'Скрвісний журнал',
      content: <ServiceLogsSectionForSensor sensorId={sensorId} />
    }
  ]

  return (
    <EuiTabbedContent
      tabs={tabs}
      initialSelectedTab={tabs[1]}
      autoFocus="selected"
      onTabClick={(tab) => {
        console.log('clicked tab', tab)
      }}
    />
  )
}