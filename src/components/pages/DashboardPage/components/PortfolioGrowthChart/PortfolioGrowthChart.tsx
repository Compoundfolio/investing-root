import React, { memo } from 'react'
import { generateDrinkStats } from '@nivo/generators'
import { ResponsiveLine } from '@nivo/line'
import { StyledChartContainer } from './styled'
import { linearGradientDef } from '@nivo/core'
import { colors } from '@core'

// const data = generateDrinkStats(18)

// const HARD_CODED_DATA = [
//   {
//     id: string;
//     color: string;
//     data: Array<{
//         color: string;
//         x: string;
//         y: number;
//     }>
//   }
// ]

const POSITIVE_COLOR = colors.darkGreen
const NEGATIVE_COLOR = colors.pinkSoft

const xminValue = 0
const xmaxValue = 7

const properties = {
  // width: 900,
  // height: 400,
  margin: { top: 15, right: 15, bottom: 20, left: 15 },
  // data,
  animate: true,
  enableSlices: 'x',
}

const PortfolioGrowthChart = () => {
  

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

              { x: 6, y: 6 },
              { x: 7, y: 5 },
              { x: 8, y: xmaxValue },
              { x: 9, y: 3 },
              { x: 10, y: 5 },

              // { x: 6, y: null },
              // { x: 7, y: null },
              // { x: 8, y: null },
              // { x: 9, y: null },
              // { x: 10, y: null },

              { x: 11, y: 0 },
              { x: 12, y: 0.4 },
              { x: 13, y: 0.6 },
              { x: 14, y: 0.5 },
              { x: 15, y: 0.3 },
              { x: 16, y: 0.4 },
              { x: 17, y: 0 },
            ],
          },
          // {
          //   id: 'negative :(',
          //   data: [
          //     { x: 5, y: 0 },
          //     { x: 6, y: -0.3 },
          //     { x: 7, y: -0.5 },
          //     { x: 8, y: -0.9 },
          //     { x: 9, y: -0.2 },
          //     { x: 10, y: -0.4 },
          //     { x: 11, y: 0 },
          //     { x: 12, y: null },
          //     { x: 13, y: null },
          //     { x: 14, y: null },
          //     { x: 15, y: null },
          //     { x: 16, y: null },
          //     { x: 17, y: 0 },
          //     { x: 18, y: -0.4 },
          //     { x: 19, y: -0.2 },
          //     { x: 20, y: -0.1 },
          //     { x: 21, y: -0.6 },
          //   ],
          // },
        ]}
        colors={[POSITIVE_COLOR, NEGATIVE_COLOR]}

        // markers={[
        //   {
        //     axis: 'y',
        //     value: 0,
        //     lineStyle: { stroke: '#b0413e', strokeWidth: 1 },
        //     legend: 'y marker at 0',
        //     legendPosition: 'bottom-left',
        //   },
        // ]}
        xScale={{
          type: 'linear',
        }}
        yScale={{
          type: 'linear',
          stacked: false,
          min: xminValue,
          max: xmaxValue,
        }}
        defs={[
          linearGradientDef('gradientA', [
            { offset: 100, color: colors.darkGreen, opacity: 0.25 },
          ]),
          linearGradientDef('gradientB', [
            { offset: 100, color: colors.pinkSoft, opacity: 0.25 },
          ]),
        ]}
        fill={[
          { match: { id: 'positive :)' }, id: 'gradientA' },
          { match: { id: 'negative :(' }, id: 'gradientB' },
        ]}
        areaOpacity={1}
        areaBlendMode=""
        useMesh={true}
        crosshairType="cross"
      />
    </StyledChartContainer>
  )
}

export default memo(PortfolioGrowthChart)