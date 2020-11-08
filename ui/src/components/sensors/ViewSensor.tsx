import { EuiBadge, EuiButton, EuiDescriptionList, EuiFlexGroup, EuiFlexItem, EuiStat } from "@elastic/eui"
import { useRouter } from "next/router"
import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useGetSensorById } from "src/graphql/query/sensors/getSensorById"
import { createDescItem } from "../utils"
import { ButtonLink } from "../utils/ButtonLink"
import { Loading } from "../utils/loading"
import { parseLatLngTuple, titleLayer } from "../utils/Map"
import { Page } from "../utils/Page"
import { EditSensor } from "./EditSensor"
import { SensorProps, withLoadSensorFormUrl } from "./utils"


type StatItemProps = {
  name: string,
  value: number | string
}

const getStatItem = ({ name, value }: StatItemProps) => {
  <EuiStat
    title={value}
    description={name}
    titleColor="secondary"
  />
}

const SensorDesc = ({
  sensor
}: SensorProps) => {
  const {
    manufacturer,
    model,
    Location: {
      address,
      airlyLink
    }
  } = sensor

  const items = [
    createDescItem('Виробник', manufacturer),
    createDescItem('Модель', model),
    createDescItem('Адреса', <a href={airlyLink}>{address}</a>),
    createDescItem('Фактори вимірювання', <FactorsDesc sensor={sensor} />),
  ].filter(x => x !== undefined)

  return <EuiDescriptionList textStyle="reverse" listItems={items} />
}

const FactorsDesc = ({
  sensor
}: SensorProps) => {
  const factors = sensor.SensorFactors.map(({ PollutionFactor }) => PollutionFactor)
  const items = factors.map(({ label, unit }, i) => <EuiBadge key={i} color="primary" style={{ marginLeft: 0, marginRight: '4px' }}>{`${label}/${unit}`}</EuiBadge>)

  return <>{items}</>
}

export const ViewSensor = ({ sensor }: SensorProps) => {
  const { Location: { locationPoint, address }, } = sensor
  const sensorCoordinaties = parseLatLngTuple(locationPoint)
  console.log('parseLatLngTuple(locationPoint)', sensorCoordinaties)
  return <EuiFlexGroup>
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
}

export const Sensor = ({ sensor }: SensorProps) => {
  return <Page title={<EuiFlexGroup justifyContent='spaceBetween'>
    <EuiFlexItem>{`Датчик ${sensor.sensorId}`}</EuiFlexItem>
    <EuiFlexItem>
      <EditSensor sensor={sensor} />
    </EuiFlexItem>
  </EuiFlexGroup>
  }>
    <ViewSensor sensor={sensor} />
  </Page>
}

export default withLoadSensorFormUrl(Sensor);