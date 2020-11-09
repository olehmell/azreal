import { EuiButton, EuiDataGridColumn, EuiDescriptionList, EuiFlexGrid, EuiFlexItem, EuiSpacer } from "@elastic/eui"
import { LatLngTuple } from "leaflet"
import Link from "next/link"
import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useGetLocations } from "src/graphql/query/locations/getLocations"
import { GetLocations_az_sensors_Locations_aggregate_nodes as LocationType } from "src/graphql/query/locations/types/GetLocations"
import { createDescItem } from "../utils"
import { DataGrid } from "../utils/DataGrid"
import { Loading } from "../utils/loading"
import { KYIV_COORDINATES, parseLatLngTuple, titleLayer } from "../utils/Map"
import { Page } from "../utils/Page"

type LocationsProps = {
  locations: LocationType[]
}

type LocationProps = {
  location: LocationType
}

const LocationDesc = ({
  location: {
    address,
    elevation,
    locationId,
    airlyLink
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
  location
}: LocationProps) => <Marker
  position={parseLatLngTuple(location.locationPoint)}
>
  <Popup>
    <EuiFlexGrid columns={1} direction="column">
      <EuiFlexItem>
        <LocationDesc location={location} />
      </EuiFlexItem>

      <EuiFlexItem >
        <Link href='/locations/[locationId]' as={`/locations/${location.locationId}`}>
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

const LocationsMaps = ({ locations }: LocationsProps) => {
  return <MapContainer center={KYIV_COORDINATES} zoom={12} style={{ height: '600px' }}>
    {titleLayer}
    {locations.map((x, i) => <LocationMarker key={i} location={x} />)}
  </MapContainer>
}

const LocationTable = ({ locations }: LocationsProps) => {

  const columns: EuiDataGridColumn[] = [ {
    id: 'locationId',
    display: 'ID',
    initialWidth: 100
  },
  {
    id: 'address',
    display: 'Адреса',
  },
  {
    id: 'elevation',
    display: 'Висота на рівнем моря',
  }
  ];

  const data = locations.map(({ locationId, address, elevation, airlyLink }) => ({
    locationId,
    elevation,
    address: <a href={airlyLink} >{address}</a>
  }))

  return <DataGrid data={data} columns={columns} />
}

export const Locations = () => {
  const { data, loading, error } = useGetLocations()

  if (error) return null;

  if (loading) return <Loading />

  console.log('LOCATIONS', data)

  const locations = data.az_sensors_Locations_aggregate.nodes

  return <Page title='Локації'>
    <LocationsMaps locations={locations} />

    <EuiSpacer size="xxl" />

    <LocationTable locations={locations} />
  </Page>
}

export default Locations