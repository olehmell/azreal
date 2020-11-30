import { EuiButton, EuiButtonEmpty, EuiFlexGroup, EuiFlexItem } from '@elastic/eui'
import moment from 'moment'
import React, { useCallback, useMemo, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Page } from '../utils/Page'
import { MeasurementType } from './aggregations'

type ChartByParamProps = {
  chartData: MeasurementType[]
}

type ChartParams = {
  unit: string,
  maxValue: number
}

const parseChartData = (data: MeasurementType[]) => {
  const linesSet = new Set<string>()
  const paramsByName = new Map<string, ChartParams>()

  const chartData = data.map(({ timestamp, values }) => {
    const params = {}

    values.forEach(({ name, value, maxValue, unit }) => {
      linesSet.add(name)
      params[name] = value
      paramsByName.set(name, { maxValue, unit })
    })

    return { time: moment(timestamp).format('lll'), ...params }
  })

  const lines = [ ...linesSet.values() ] as string[]

  return [ lines, chartData, paramsByName ] as [ string[], any[], Map<string, ChartParams> ]
}

export const ChartByParam = ({ chartData }: ChartByParamProps) => {
  
  const [ lines, data, paramsByName ] = useMemo(() => parseChartData(chartData), [ chartData ])
  const [ activeLine, setActiveLine ] = useState(lines[0])
  const params = paramsByName.get(activeLine)
  if (!chartData.length || !params) return null

  const { maxValue, unit } = params

  return <>
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
          stroke={`#${Math.random().toString(16).substr(2, 6)}`}
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
