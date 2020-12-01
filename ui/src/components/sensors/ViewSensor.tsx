import { EuiBadge, EuiDescriptionList, EuiFlexGroup, EuiFlexItem, EuiStat } from '@elastic/eui'
import React from 'react'
import { MapContainer, Marker, Popup } from 'react-leaflet'
import { MeasurementsForSensor } from '../measurement/Measurement'
import { createDescItem } from '../utils'
import { parseLatLngTuple, titleLayer } from '../utils/Map'
import { Page } from '../utils/Page'
import { DeleteButton } from './DeleteButton'
import { EditButton } from './EditSensor'
import { SensorTabs } from './SensorDetailsTabs'
import { getSensorStatus, SensorProps, withLoadSensorFromUrl } from './utils'

const SensorDesc = ({
  sensor
}: SensorProps) => {
  const {
    manufacturer,
    model,
    isActive,
    Location: {
      address,
      airlyLink
    }
  } = sensor

  const items = [
    createDescItem('Статус', getSensorStatus(isActive)),
    createDescItem('Виробник', manufacturer),
    createDescItem('Модель', model),
    createDescItem('Адреса', <a href={airlyLink}>{address}</a>),
    createDescItem('Фактори вимірювання', sensor.SensorFactors.length && <FactorsDesc sensor={sensor} />),
  ].filter(x => x !== undefined)

  return <EuiDescriptionList textStyle="reverse" listItems={items} />
}

const FactorsDesc = ({
  sensor
}: SensorProps) => {
  const factors = sensor.SensorFactors.map(({ PollutionFactor }) => PollutionFactor)
  const items = factors.map(({ label, unit }, i) => <EuiBadge key={i} color="primary" style={{ marginLeft: 0, marginRight: '4px' }}>{`${label}/${unit}`}</EuiBadge>)

  return items.length
    ? <>{items}</>
    : null
}

export const ViewSensor = ({ sensor }: SensorProps) => {
  const { Location: { locationPoint, address }, sensorId } = sensor
  const sensorCoordinaties = parseLatLngTuple(locationPoint)
  console.log('parseLatLngTuple(locationPoint)', sensorCoordinaties)
  return <>
    <EuiFlexGroup>
      <EuiFlexItem>
        <MapContainer center={sensorCoordinaties} style={{ height: '300px'}} zoom={13}>
          {titleLayer}
          <Marker position={sensorCoordinaties}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
      </EuiFlexItem>
      <EuiFlexItem>
        <SensorDesc sensor={sensor} />
      </EuiFlexItem>
    </EuiFlexGroup>
    <SensorTabs sensorId={sensorId} />
  </>
}

export const Sensor = ({ sensor }: SensorProps) => {
  return <Page title={<EuiFlexGroup justifyContent='spaceBetween'>
    <EuiFlexItem>{`Датчик ${sensor.sensorId}`}</EuiFlexItem>
    <EuiFlexGroup alignItems='center'>
      <EuiFlexItem>
        <EditButton sensor={sensor} />
      </EuiFlexItem>
      {/* <EuiFlexItem>
        <DeleteButton sensorId={sensor.sensorId} />
      </EuiFlexItem> */}
    </EuiFlexGroup>
  </EuiFlexGroup>
  }>
    <ViewSensor sensor={sensor} />
  </Page>
}

export default withLoadSensorFromUrl(Sensor)