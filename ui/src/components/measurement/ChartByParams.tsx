import { EuiButton, EuiButtonEmpty, EuiFlexGroup, EuiFlexItem } from '@elastic/eui'
import moment from 'moment'
import React, { useCallback, useMemo, useState } from 'react'
import { LineChart, Line, XAxis, YAxis, ReferenceLine, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Page } from '../utils/Page'

type Value = {
  name: string,
  value: number
}

type ChartData = {
  timestamp: string,
  values: Value[]
}

type ChartByParamProps = {
  chartData: ChartData[]
}

type LinePayload = {
  value: string,
  type: 'line',
  id: string
}

const parseChartData = (data: ChartData[]) => {
  const linesSet = new Set<string>()

  const chartData = data.map(({ timestamp, values }) => {
    const params = {}

    values.forEach(({ name, value }) => {
      linesSet.add(name)
      params[name] = value
    })

    return { time: moment(timestamp).format('lll'), ...params }
  })

  const lines = [ ...linesSet.values() ] as string[]

  return [ lines, chartData ] as [ string[], any[] ]
}

export const ChartByParam = ({ chartData }: ChartByParamProps) => {
  const [ lines, data ] = useMemo(() => parseChartData(chartData), [ chartData ])
  const [ activeLine, setActiveLine ] = useState(lines[0])

  return <>
    <ResponsiveContainer height={500} width="100%">
      <LineChart data={data}
        margin={{top: 20, right: 50, left: 20, bottom: 5}}>
        <CartesianGrid strokeDasharray="4 4"/>
        <XAxis dataKey="time"/>
        <YAxis dataKey={activeLine}/>
        <Tooltip/>
        <ReferenceLine y={30} strokeDasharray="3 3" label="ГДЗ" stroke="red"/>
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
