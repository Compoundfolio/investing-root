"use client"

import { colors } from '@core'
import { ResponsiveLine } from '@nivo/line'
import React, { memo, useMemo } from 'react'
import { LineYieldChartTooltip } from './components'

const data = [
  { x: "2022-11-11", y: 12.50 },
  { x: "2022-11-12", y: 12.51 },
  { x: "2022-11-13", y: 12.55 },
  { x: "2022-11-14", y: 12.45 },
  { x: "2022-11-15", y: 12.45 },
  { x: "2022-11-16", y: 12.40 },
  { x: "2022-11-17", y: 12.67 },
  { x: "2022-11-18", y: 12.68 },
]

const properties = {
  margin: { top: 20, right: 20, bottom: 20, left: 20 },
  animate: true,
}

interface ILineYieldChart {
  handleMouseFocus: Function
}

const LineYieldChart = ({
  handleMouseFocus,
}: ILineYieldChart) => {

  const [
    oldestDateItem,
    earliestDateItem,
    minPriceValue,
    maxPriceValue,
  ] = useMemo(() => [
    data[0],
    data[data.length - 1],
    Math.min(...data.map(item => item.y)),
    Math.max(...data.map(item => item.y)),
  ], [data])

  return (
    <div style={{ width: 491, height: 50 + 40 }}>
      <ResponsiveLine
        {...properties}
        // @ts-ignore
        onMouseMove={handleMouseFocus}
        enablePoints={false}
        enableGridX={false}
        enableGridY={false}
        sliceTooltip={LineYieldChartTooltip}
        enableSlices="x"
        data={[{
          id: "yield",
          color: colors.gold,
          data,
        }]}
        axisLeft={null}
        axisBottom={{
          // TODO: Format
          tickValues: [oldestDateItem.x, earliestDateItem.x],
        }}
        yScale={{
          type: 'linear',
          stacked: false,
          min: minPriceValue,
          max: maxPriceValue,
        }}
        markers={[
          {
            axis: 'y',
            value: minPriceValue,
            lineStyle: {
              stroke: 'rgba(255, 211, 145, 0.1)',
              strokeWidth: 0.5,
              opacity: 1,
              strokeDasharray: 2.5,
            },
            legend: 'min',
            textStyle: {
              fill: 'rgba(255, 211, 145, 0.5)',
              fontSize: 12,
              fontFamily: 'Chakra Petch'
            },
          },
          {
            axis: 'y',
            value: maxPriceValue,
            lineStyle: {
              stroke: 'rgba(255, 211, 145, 0.3)',
              strokeWidth: 0.5,
              opacity: 1,
              strokeDasharray: 2.5,
            },
            legend: 'max',
            textStyle: {
              fill: 'rgba(255, 211, 145, 0.5)',
              fontSize: 12,
              fontFamily: 'Chakra Petch'
            },
          },
        ]}
      />
    </div>
  )
}

export default memo(LineYieldChart)