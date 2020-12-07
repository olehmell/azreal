/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiSwitch } from '@elastic/eui'
import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
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

  const { unit } = params
  const currentArr = data.map(x => x[activeLine])
  const min = Math.min(...currentArr)
  const max = Math.max(...currentArr)
  return <>
    <EuiSpacer size='xxl' />
    <EuiSwitch
      label={`${isLog ? 'Логарифмічний' : 'Лінійний'} графік`}
      checked={isLog}
      onChange={(e) => setIsLog(e.target.checked)}
    />
    <EuiSpacer size='l' />
    <ResponsiveContainer height={500} width="100%">
      <LineChart data={isLog ? data.map(x => ({ ...x, [activeLine]: Math.log(x[activeLine]) })) : data}
        margin={{top: 20, right: 10, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="time" />
        <YAxis
          type='number'
          domain={[ min, max ]}
          dataKey={activeLine}
          scale={isLog ? 'log' : 'linear'}
          padding={{ top: 20, bottom: 20 }}
          label={{ value: unit, position: 'top'}}
        />
        <Tooltip/>
        {/* <ReferenceLine y={GDK} strokeDasharray="25 90" label="ГДК" stroke="red"/> */}
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
