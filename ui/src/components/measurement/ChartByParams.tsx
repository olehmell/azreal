/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/jsx-no-undef */
import { EuiButton, EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiSwitch } from '@elastic/eui'
import React, { useState } from 'react'
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
  const [ activeLine, setActiveLine ] = useState(lines[0])
  const [ isLog, setIsLog ] = useState(false)
  const params = paramsByName.get(activeLine)
  const sortedArr = data.sort((a, b) => a[activeLine] - b[activeLine])

  if (!params) return null

  const { maxValue, unit } = params
  const min = Math.floor(sortedArr[0][activeLine]) - 1
  const max = Math.floor(sortedArr.pop()[activeLine]) + 1

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
        <CartesianGrid strokeDasharray="4 4"/>
        <XAxis dataKey="time"/>
        <YAxis
          type='number'
          domain={[ min, max ]}
          dataKey={activeLine}
          scale={isLog ? 'log': 'linear'}
          padding={{ top: 20, bottom: 20 }}
          label={{ value: `${activeLine}/${unit}`, position: 'top'}}
        />
        <Tooltip/>
        <ReferenceLine y={maxValue} strokeDasharray="3 3" label="ГДЗ" stroke="red"/>
        <Line
          unit={unit}
          type="natural"
          key={activeLine}
          dataKey={activeLine}
          stroke='#0077ff'
        />
      </LineChart>
    </ResponsiveContainer>
    <EuiFlexGroup justifyContent='flexStart'>
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
