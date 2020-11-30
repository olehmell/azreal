import moment from 'moment'
import { useEffect, useState } from 'react'
import { CommonAggregationData, useGetMeasurementsBySensorId } from 'src/graphql/query/measurement/getMeasurementBySensorId'
import { GetMeasurementsBySensorId_az_sensors_Sensors, GetMeasurementsBySensorId_az_sensors_Sensors_SensorFactors_PollutionFactor } from 'src/graphql/query/measurement/types/GetMeasurementsBySensorId'
import { az_sensors_e_measurement_unit_enum } from 'src/types/graphql-global-types'

export type AggregationType = 'hours' | 'days' | 'weeks' | 'months' | 'years'

type CommonValues = {
  timestamp: string
}

export type AggregationSelectorType = {
  text: string,
  value: AggregationType
}

type MeasurementsProps = CommonAggregationData & {
  type: AggregationType
}

type MeasurementValue = {
  name: string,
  unit: az_sensors_e_measurement_unit_enum,
  maxValue: number,
  value: number
}

type InnerMeasurement = CommonValues & {
  sensorId: number,
  values: GetMeasurementsBySensorId_az_sensors_Sensors[]
}

export type MeasurementType = CommonValues & {
  sensorId: number,
  values: MeasurementValue[]
}

const parseMeasurementData = (measurements: InnerMeasurement[]): MeasurementType[] =>
  measurements.map(({ values, ...other }) => ({
    ...other,
    values: values.map(({ SensorFactors }) => {
      const { 
        name,
        maxValue,
        unit,
        Measurements_aggregate:
        { aggregate:
          { avg:
            { value }
          }
        }
      } = SensorFactors[0].PollutionFactor
      return { name, maxValue, unit, value }
    })
  }))


export const useGetMeasurements = ({ sensorId = 0, from: start = moment(), to: end = moment(), type }: MeasurementsProps) => {
  const measurements: InnerMeasurement[] = []
  const [ from, setFrom ] = useState(start)
  const to = moment(from).add(1, type)
  const { data, loading, error } = useGetMeasurementsBySensorId({ sensorId, from, to })

  const isFinish = to.diff(end) >= 0

  console.log('FROM', from, to, end, to.diff(end) )

  useEffect(() => {
    if (!data) return 

    measurements.push({ timestamp: to.format('lll'), sensorId, values: data?.az_sensors_Sensors })

    if (!isFinish) {
      setFrom(to)
    }

  }, [ sensorId, measurements.length, data?.az_sensors_Sensors.length ])

  if (error) return { error, loading }

  if (!isFinish) return { loading: true }

  return {
    data: parseMeasurementData(measurements),
    loading,
    error
  }

}