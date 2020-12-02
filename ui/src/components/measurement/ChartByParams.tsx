import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiSpacer } from '@elastic/eui'
import moment from 'moment'
import React, { useMemo, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { MeasurementsData } from './types'

type ChartParams = {
  unit: string,
  maxValue: number
}

const parseChartData = ({ measurements }: MeasurementsData) => {
  const linesSet = new Set<string>()
  const paramsByName = new Map<string, ChartParams>()

  const chartData = measurements.map(({ timestamp, values }) => {
    const params = {}

    values.forEach(({ label, value, maxValue, unit }) => {
      linesSet.add(label)
      params[label] = value
      paramsByName.set(label, { maxValue, unit })
    })

    return { time: timestamp, ...params }
  })

  const lines = [ ...linesSet.values() ] as string[]

  return [ lines, chartData, paramsByName ] as [ string[], any[], Map<string, ChartParams> ]
}

export const ChartByParam = (props: MeasurementsData) => {
  if (!props.measurements.length) return null

  const [ lines, data, paramsByName ] = parseChartData(props)
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ activeLine, setActiveLine ] = useState(lines[0])
  const params = paramsByName.get(activeLine)

  if (!params) return null

  const { maxValue, unit } = params

  return <>
    <EuiSpacer size='xxl' />
    <ResponsiveContainer height={500} width="100%">
      <LineChart data={data}
        margin={{top: 20, right: 50, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="4 4"/>
        <XAxis dataKey="time"/>
        <YAxis dataKey={activeLine} unit={unit} />
        <Tooltip/>
        <ReferenceLine y={maxValue} strokeDasharray="3 3" label="ГДЗ" stroke="red"/>
        <Line
          type="natural"
          key={activeLine}
          dataKey={activeLine}
          stroke='#0077ff'
        />
      </LineChart>
    </ResponsiveContainer>
    <EuiFlexGroup justifyContent='center'>
      {lines.map(line => <EuiFlexItem key={line} grow={false}>
        <EuiButton
          fill
          color="ghost"
          size='s'
          iconType="currency"
          onClick={() => setActiveLine(line)}
        >
          {line}
        </EuiButton>
      </EuiFlexItem>)}
    </EuiFlexGroup>
  </>
}
