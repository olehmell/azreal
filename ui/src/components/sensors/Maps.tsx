import { EuiButton, EuiDescriptionList, EuiFlexGrid, EuiFlexItem } from "@elastic/eui"
import Link from "next/link"
import React from "react"
import { MapContainer, Marker, Popup } from "react-leaflet"
import { GetSensors_az_sensors_Sensors as SensorsType } from "src/graphql/query/sensors/types/GetSensors"
import { createDescItem } from "../utils"
import { KYIV_COORDINATES, parseLatLngTuple, titleLayer } from "../utils/Map"

type LocationsProps = {
  sensors: SensorsType[]
}

type LocationProps = {
  sensor: SensorsType
}

const LocationDesc = ({
  sensor: {
    Location: {
      address,
      elevation,
      locationId,
      airlyLink
    }
  }
}: LocationProps) => {
  const items = [
    createDescItem('ID локації', locationId),
    createDescItem('Адреса', address),
    createDescItem('Висота над рівнем моря', `${elevation} м`),
    createDescItem('Посилання на Airly', airlyLink)
  ].filter(x => x !== undefined)

  return <EuiDescriptionList textStyle="reverse" listItems={items} />
}

const LocationMarker = ({ 
  sensor
}: LocationProps) => <Marker
  position={parseLatLngTuple(sensor.Location.locationPoint)}
>
  <Popup>
    <EuiFlexGrid columns={1} direction="column">
      <EuiFlexItem>
        <LocationDesc sensor={sensor} />
      </EuiFlexItem>

      <EuiFlexItem >
        <Link href='/sensors/[sensorId]' as={`/sensors/${sensor.sensorId}`}>
          <a>
            <EuiButton size="s" iconType="link" fullWidth >
                Сторінка локації
            </EuiButton>
          </a>
        </Link>
      </EuiFlexItem>
    </EuiFlexGrid>
  </Popup>
</Marker>

export const SensorsMaps = ({ sensors }: LocationsProps) => {
  return <MapContainer center={KYIV_COORDINATES} zoom={12} style={{ height: '600px' }}>
    {titleLayer}
    {sensors.map((x, i) => <LocationMarker key={i} sensor={x} />)}
  </MapContainer>
}

// const LocationTable = ({ sensors }: LocationsProps) => {

//   const columns: EuiDataGridColumn[] = [ {
//     id: 'locationId',
//     display: 'ID',
//     initialWidth: 100
//   },
//   {
//     id: 'address',
//     display: 'Адреса',
//   },
//   {
//     id: 'elevation',
//     display: 'Висота на рівнем моря',
//   }
//   ];

//   const data = locations.map(({ locationId, address, elevation, airlyLink }) => ({
//     locationId,
//     elevation,
//     address: <a href={airlyLink} >{address}</a>
//   }))

//   return <DataGrid data={data} columns={columns} />
// }

// export const Locations = () => {
//   const { data, loading, error } = useGetLocations()

//   if (error) return null;

//   if (loading) return <Loading />

//   console.log('LOCATIONS', data)

//   const locations = data.az_sensors_Locations_aggregate.nodes

//   return <Page title='Локації'>


//     <EuiSpacer size="xxl" />

//   </Page>
// }

// export default Locations