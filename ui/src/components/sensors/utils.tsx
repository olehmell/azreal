import axios from 'axios'
import { useEffect, useState } from 'react'
import { GetLocations_az_sensors_Locations_aggregate_nodes as Location } from 'src/graphql/query/locations/types/GetLocations'

const SENSORT_DATA_URL = 'https://airapi.airly.eu/v2/installations'

const apikey = process.env.AIRLY_API_KEY

const getLocationDataBySensorIdUrl = (id: number) => `${SENSORT_DATA_URL}/${id}`

type SensorsData = {
  location: Location,
  error?: string
}

const emptyData: SensorsData = { 
  location: undefined
}

type HookData<T> = {
  data: T,
  loading: boolean
} 

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