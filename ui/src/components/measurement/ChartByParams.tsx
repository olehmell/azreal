import { Chart, Settings, LineSeries, Axis, timeFormatter, niceTimeFormatByDay } from '@elastic/charts/'
import { dateFormatAliases, formatDate } from '@elastic/eui'
import React from "react"

export const ChartByParam = () => {
  return <Chart size={{height: 200}}>
    <Settings
      showLegend={true}
      legendPosition="right"
    />
    <LineSeries
      id="financial"
      name="Financial"
      data={[ [ 0, 1 ], [ 1, 2 ] ]}
      xScaleType="time"
      xAccessor={0}
      yAccessors={[ 1 ]}
    
    />
    <LineSeries
      id="tech"
      name="Tech support"
      data={[ [ 0, 1 ], [ 1, 2 ] ]}
      xScaleType="time"
      xAccessor={0}
      yAccessors={[ 1 ]}
      
    />
    <Axis
      title={formatDate(Date.now(), dateFormatAliases.date)}
      id="bottom-axis"
      position="bottom"
      tickFormat={timeFormatter(niceTimeFormatByDay(1))}
      showGridLines
    />
    <Axis
      id="left-axis"
      position="left"
      showGridLines
    />
  </Chart>
}