import React, { memo } from 'react'
import { generateDrinkStats } from '@nivo/generators'
import { ResponsiveLine } from '@nivo/line'
import { StyledChartContainer } from './styled'

const data = generateDrinkStats(18)

const properties = {
  width: 900,
  height: 400,
  margin: { top: 15, right: 15, bottom: 30, left: 15 },
  data,
  animate: true,
  enableSlices: 'x',
}

const PortfolioGrowthChart = () => {
  const xminValue = -1
  const xmaxValue = 1

  return (
    <StyledChartContainer>
      <ResponsiveLine
        {...properties}
        enableGridX={false}
        enableGridY={false}
        enableArea={true}
        enablePoints={false}
        enablePointLabel={false}
        enableSlices={false}
        axisLeft={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 5,
          tickRotation: 0,
          // TODO: date range legend as here
          // https://nivo.rocks/storybook/?path=/story/line--real-time-chart
          // legend: `${this.formatTime(dataA[0].x)} ——— ${this.formatTime(last(dataA).x)}`,
          // legendPosition: 'middle',
          // legendOffset: 46,
          // TODO: renderTick: CustomAxisBottomTick
        }}
        data={[
          {
            id: 'positive :)',
            data: [
              { x: 0, y: 0.7 },
              { x: 1, y: 0.9 },
              { x: 2, y: 0.8 },
              { x: 3, y: 0.6 },
              { x: 4, y: 0.3 },
              { x: 5, y: 0 },
              { x: 6, y: null },
              { x: 7, y: null },
              { x: 8, y: null },
              { x: 9, y: null },
              { x: 10, y: null },
              { x: 11, y: 0 },
              { x: 12, y: 0.4 },
              { x: 13, y: 0.6 },
              { x: 14, y: 0.5 },
              { x: 15, y: 0.3 },
              { x: 16, y: 0.4 },
              { x: 17, y: 0 },
            ],
          },
          {
            id: 'negative :(',
            data: [
              { x: 5, y: 0 },
              { x: 6, y: -0.3 },
              { x: 7, y: -0.5 },
              { x: 8, y: -0.9 },
              { x: 9, y: -0.2 },
              { x: 10, y: -0.4 },
              { x: 11, y: 0 },
              { x: 12, y: null },
              { x: 13, y: null },
              { x: 14, y: null },
              { x: 15, y: null },
              { x: 16, y: null },
              { x: 17, y: 0 },
              { x: 18, y: -0.4 },
              { x: 19, y: -0.2 },
              { x: 20, y: -0.1 },
              { x: 21, y: -0.6 },
            ],
          },
        ]}
        colors={['rgb(97, 205, 187)', 'rgb(244, 117, 96)']}
        markers={[
          {
            axis: 'y',
            value: 0,
            lineStyle: { stroke: '#b0413e', strokeWidth: 1 },
            legend: 'y marker at 0',
            legendPosition: 'bottom-left',
          },
        ]}
        xScale={{
          type: 'linear',
        }}
        yScale={{
          type: 'linear',
          stacked: false,
          min: xminValue,
          max: xmaxValue,
        }}
        areaOpacity={0.07}
        useMesh={true}
        crosshairType="cross"
      />
    </StyledChartContainer>
  )
}

export default memo(PortfolioGrowthChart)