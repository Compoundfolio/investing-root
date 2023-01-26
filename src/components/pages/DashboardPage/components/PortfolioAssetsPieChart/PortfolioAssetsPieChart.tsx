import { ResponsivePie } from '@nivo/pie'
import { memo } from 'react'
import { StyledPieChartContainer } from './styled'
import { Ticker, colors } from '@core'
let positions = {
  openPositions: {} as { [K: Ticker]:  {
    sharesAmount: number;
    currentPositionPrice: number;
  }},
  closedPositions: {},
}

const f = (positionS = positions): typeof data => {
  return Object
    .entries(positionS.openPositions)
    .map(([ ticker, { sharesAmount } ]) => ({
      id: ticker,
      label: ticker,
      value: sharesAmount,
    }))
}

const data = [
  {
    "id": "css",
    "label": "css",
    "value": 445,
    // "color": "hsl(258, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 584,
    // "color": "hsl(31, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 135,
    // "color": "hsl(49, 70%, 50%)"
  },
  {
    "id": "sass",
    "label": "sass",
    "value": 213,
    // "color": "hsl(296, 70%, 50%)"
  },
  {
    "id": "stylus",
    "label": "stylus",
    "value": 558,
    // "color": "hsl(147, 70%, 50%)"
  }
]

const { darkLightGreen, lightGreen, darkGreen, gold, grayD9 } = colors
const CHART_COLORS_LIST = [darkLightGreen, lightGreen, darkGreen, gold, grayD9]

const PortfolioAssetsPieChart = () => {
  return (
    <StyledPieChartContainer>
      <ResponsivePie
        data={data}
        colors={CHART_COLORS_LIST}
        margin={{ top: 15, right: 15, bottom: 15, left: 15 }}
        innerRadius={0.5}
        padAngle={3}
        cornerRadius={10}
        activeOuterRadiusOffset={8}
        arcLinkLabel={"f"}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={0}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [
            [
              'darker',
              2
            ]
          ]
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          {
            match: {
              id: 'ruby'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'c'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'go'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'css'
            },
            id: 'dots'
          },
          {
            match: {
              id: 'scala'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'lisp'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'elixir'
            },
            id: 'lines'
          },
          {
            match: {
              id: 'javascript'
            },
            id: 'lines'
          }
        ]}
      // legends={[
      //     {
      //         anchor: 'bottom',
      //         direction: 'row',
      //         justify: false,
      //         translateX: 0,
      //         translateY: 56,
      //         itemsSpacing: 0,
      //         itemWidth: 100,
      //         itemHeight: 18,
      //         itemTextColor: '#999',
      //         itemDirection: 'left-to-right',
      //         itemOpacity: 1,
      //         symbolSize: 18,
      //         symbolShape: 'circle',
      //         effects: [
      //             {
      //                 on: 'hover',
      //                 style: {
      //                     itemTextColor: '#000'
      //                 }
      //             }
      //         ]
      //     }
      // ]}
      />
    </StyledPieChartContainer>
  )
}

export default memo(PortfolioAssetsPieChart)