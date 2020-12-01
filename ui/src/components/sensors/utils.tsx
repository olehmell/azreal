import axios from 'axios'
import { useRouter } from 'next/router'
import Error from 'next/error'
import React from 'react'
import { GetLocations_az_sensors_Locations_aggregate_nodes as Location } from 'src/graphql/query/locations/types/GetLocations'
import { useGetSensorById } from 'src/graphql/query/sensors/getSensorById'
import { GetSensorById_az_sensors_Sensors as SensorType } from 'src/graphql/query/sensors/types/GetSensorById'
import { Loading } from '../utils/loading'
import * as yup from 'yup'
import { NotFoundPage } from '../utils/NotFoundPage'

const SENSORT_DATA_URL = 'https://airapi.airly.eu/v2/installations'

const apikey = process.env.AIRLY_API_KEY

const getLocationDataBySensorIdUrl = (id: number) => `${SENSORT_DATA_URL}/${id}`

export const loadLocationDataBySensorId = async (id: number) => {
  try {
    const loadUrl = getLocationDataBySensorIdUrl(id)
    const res = await axios.get(loadUrl, { headers: { apikey }})

    const { 
      locationId,
      location: { latitude, longitude },
      elevation,
      address: { street, city, country },
    } = res.data
  
    const location = {
      locationId,
      locationPoint: `${latitude}, ${longitude}`,
      elevation,
      address: `${street}, ${city}, ${country}`,
      airlyLink: `https://airly.org/map/en/#${latitude},${longitude},i${locationId}`
    } as Location
  
    return { location }
  } catch (error) {
    console.error(error)
    return { location, error }
  }

}

export const sensorSchema = yup.object().shape({
  sensorId: yup.number().required(),
  manufacturer: yup.string(),
  model: yup.string()
})

export type SensorProps = {
  sensor: SensorType
}

export const withLoadSensorFromUrl = (Component: React.ComponentType<SensorProps>) => {
  return () => {
    const { query: { sensorId }} = useRouter()
    const { data, loading, error } = useGetSensorById(parseInt(sensorId as string))

    console.log('DAuseGetSensorByIdTA', data)
  
    if (error) return null
  
    if (loading) return <Loading />
  
    const sensor = data?.az_sensors_Sensors.pop()

    if (!sensor) return <NotFoundPage />

    return <Component sensor={sensor} />
  }
}

export const getSensorStatus = (isActive: boolean) => isActive ? 'Активний' : 'Неактивний'