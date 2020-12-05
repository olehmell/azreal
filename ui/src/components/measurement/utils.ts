import moment from 'moment'

export const getAggregationTime = (timestamp: string) => moment(timestamp).format('DD-MM-YY kk:mm')

type KbyFactor = {
  max: number,
  k: number
}

const kByDangerIndex = {
  1: 1.7,
  2: 1.3,
  3: 1.01,
  4: 0.9
}

const dangerIndexByFactorName = {
  CO: 4.0,
  H2S: 2.0,
  NO: 3.0,
  PM25: 3.0,
  PM1: 3.0,
  PM10: 3.0,
  NO2: 3.0,
  O3: 1.0,
}

type Measurement = {
  name: string,
  value: number 
}

export const calculateCAQI = (measurements: Measurement[], maxValues: Record<string, number>) => {
  let CAQI = 0.0

  measurements.forEach(({ name, value }) => {
    const max = maxValues[name]
    const k = kByDangerIndex[dangerIndexByFactorName[name]]
  
    if (max && k) {
      const AIQ = Math.pow(value / max, k)
      
      CAQI += AIQ
    }

  })

  return CAQI.toFixed(3)
}