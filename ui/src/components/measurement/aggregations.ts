import { GetMeasurementsBySensorId_az_measurements_Measurements } from './../../graphql/query/measurement/types/GetMeasurementsBySensorId'
import moment from 'moment'
import { useEffect, useState } from 'react'
import { CommonAggregationData, useGetMeasurementsBySensorId } from 'src/graphql/query/measurement/getMeasurementBySensorId'
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
  label: string,
  unit: az_sensors_e_measurement_unit_enum,
  maxValue: number,
  value: number
}

type InnerMeasurement = CommonValues & {
  sensorId: number,
  values: GetMeasurementsBySensorId_az_measurements_Measurements[]
}

export type MeasurementType = CommonValues & {
  sensorId: number,
  values: MeasurementValue[]
}

const parseMeasurementData = (measurements: InnerMeasurement[]): MeasurementType[] =>
  measurements.map(({ values, ...other }) => ({
    ...other,
    values: values.map(({ PollutionFactor }) => {
      const { 
        label,
        maxValue,
        unit,
        Measurements_aggregate:
        { aggregate:
          { avg:
            { value }
          }
        }
      } = PollutionFactor
      return { label, maxValue, unit, value }
    })
  }))


export const useGetMeasurements = ({ sensorId = 0, from: start = moment().toISOString(), to: end = moment().toISOString(), type }: MeasurementsProps) => {
  const measurements: InnerMeasurement[] = []
  const [ from, setFrom ] = useState(start)
  const to = moment(from).add(1, type).toISOString()
  const { data, loading, error } = useGetMeasurementsBySensorId({ sensorId, from, to })

  const isFinish = to >= end

  console.log('FROM', from, to,)

  useEffect(() => {
    if (!data) return 

    measurements.push({ timestamp: to, sensorId, values: data?.az_measurements_Measurements })

    if (!isFinish) {
      setFrom(to)
    }

  }, [ sensorId, measurements.length, data?.az_measurements_Measurements.length ])

  if (error) return { error, loading }

  if (!isFinish) return { loading: true }

  return {
    data: parseMeasurementData(measurements),
    loading,
    error
  }

}