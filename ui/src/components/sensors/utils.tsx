import axios from 'axios'
import { useEffect, useState } from 'react'
import { Az_Sensors_Locations } from '../../graphql/types'

const SENSORT_DATA_URL = 'https://airapi.airly.eu/v2/installations'

const apikey = process.env.AIRLY_API_KEY

const getLocationDataBySensorIdUrl = (id: number) => `${SENSORT_DATA_URL}/${id}`

type SensorsData = {
  location: Az_Sensors_Locations
}

const emptyData: SensorsData = { 
  location: undefined
}

type HookData<T> = {
  data: T,
  loading: boolean
} 

export const useAirlyLocationBySensorId = (id?: number): HookData<SensorsData> => {
  const [ data, setData ] = useState(emptyData)
  const [ loading, setLoading ] = useState(false)
  const loadUrl = getLocationDataBySensorIdUrl(id)

  useEffect(() => {
    if (!id) return
  
    const loadLocationData = async () => {
      setLoading(true)
      const res = await axios.get(loadUrl, { headers: { apikey }})

      if (res.status !== 200) return console.error(`Respons end with status ${res.status} and text: ${res.statusText}: ${res.data}`)

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
      } as Az_Sensors_Locations

      setData({
        location
      })
      setLoading(false)
    }

    loadLocationData()
  }, [ id || 0 ])

  return { data, loading }
}