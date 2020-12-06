/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiSwitch } from '@elastic/eui'
import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { MeasurementsData } from './types'
import { scaleLog } from 'd3-scale'
const scale = scaleLog().base(Math.E)

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
      params[label] = value.toFixed(3)
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
  const [ activeLine, setActiveLine ] = useState(lines[0])
  const [ isLog, setIsLog ] = useState(false)
  const params = paramsByName.get(activeLine)

  if (!params) return null

  const { maxValue: GDK, unit } = params

  return <>
    <EuiSpacer size='xxl' />
    <EuiSwitch
      label={`${isLog ? 'Логарифмічний' : 'Лінійний'} графік`}
      checked={isLog}
      onChange={(e) => setIsLog(e.target.checked)}
    />
    <EuiSpacer size='l' />
    <ResponsiveContainer height={500} width="100%">
      <LineChart data={data}
        margin={{top: 20, right: 10, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="time" />
        <YAxis
          type='number'
          domain={[ 'dataMin', GDK ]}
          dataKey={(v) => v[activeLine]}
          scale={isLog ? scale : 'linear'}
          padding={{ top: 20, bottom: 20 }}
          label={{ value: unit, position: 'top'}}
        />
        <Tooltip/>
        <ReferenceLine y={GDK} strokeDasharray="25 90" label="ГДК" stroke="red"/>
        <Line
          unit={unit}
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
          onClick={() => setActiveLine(line)}
        >
          {line}
        </EuiButton>
      </EuiFlexItem>)}
    </EuiFlexGroup>
  </>
}
