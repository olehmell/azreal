import { EuiButton, EuiDataGridColumn, EuiDescriptionList, EuiFlexGrid, EuiFlexGroup, EuiFlexItem, EuiSpacer } from "@elastic/eui"
import { LatLngTuple } from "leaflet"
import Link from "next/link"
import React from "react"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { useGetLocations } from "src/graphql/query/locations/getLocations"
import { GetLocations_az_sensors_Locations_aggregate_nodes as LocationType } from "src/graphql/query/locations/types/GetLocations"
import { DataGrid } from "../utils/DataGrid"
import { Loading } from "../utils/loading"
import { Page } from "../utils/Page"

const KYIV_COORDINATES: LatLngTuple = [ 50.4387102, 30.4908161 ]

type LocationsProps = {
  locations: LocationType[]
}

const parseLatLngTuple = (pointStr: string) => pointStr.match(/\((.*?)\)/)[1].split(',').map(x => parseFloat(x)) as LatLngTuple
const createDescItem = (title: string, description?: string | number) => description
  ? { 
    title,
    description
  }
  : undefined

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
  return <MapContainer center={KYIV_COORDINATES} zoom={11} scrollWheelZoom={false} style={{ height: '600px' }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map(x => <LocationMarker location={x} />)}
    </MapContainer>
}

const LocationTable = ({ locations }: LocationsProps) => {

  const columns: EuiDataGridColumn[] = [{
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
    },
    {
      id: 'airlyLink',
      display: 'Посилання на Airly',
    }
  ];

  return <DataGrid data={locations} columns={columns} />
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