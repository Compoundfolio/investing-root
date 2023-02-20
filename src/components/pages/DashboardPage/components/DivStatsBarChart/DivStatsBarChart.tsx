import React, { memo } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { StyledPieChartContainer } from '../PortfolioAssetsPieChart/styled'

const data = [
  {
    "country": "AD",
    "hot dog": 34,
    "hot dogColor": "hsl(263, 70%, 50%)",
    "burger": 200,
    "burgerColor": "hsl(87, 70%, 50%)",
    "sandwich": 183,
    "sandwichColor": "hsl(74, 70%, 50%)",
    "kebab": 21,
    "kebabColor": "hsl(82, 70%, 50%)",
    "fries": 2,
    "friesColor": "hsl(30, 70%, 50%)",
    "donut": 158,
    "donutColor": "hsl(299, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 109,
    "hot dogColor": "hsl(2, 70%, 50%)",
    "burger": 7,
    "burgerColor": "hsl(174, 70%, 50%)",
    "sandwich": 157,
    "sandwichColor": "hsl(133, 70%, 50%)",
    "kebab": 76,
    "kebabColor": "hsl(54, 70%, 50%)",
    "fries": 179,
    "friesColor": "hsl(61, 70%, 50%)",
    "donut": 28,
    "donutColor": "hsl(35, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 131,
    "hot dogColor": "hsl(74, 70%, 50%)",
    "burger": 155,
    "burgerColor": "hsl(119, 70%, 50%)",
    "sandwich": 127,
    "sandwichColor": "hsl(93, 70%, 50%)",
    "kebab": 64,
    "kebabColor": "hsl(276, 70%, 50%)",
    "fries": 116,
    "friesColor": "hsl(101, 70%, 50%)",
    "donut": 148,
    "donutColor": "hsl(66, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 174,
    "hot dogColor": "hsl(199, 70%, 50%)",
    "burger": 117,
    "burgerColor": "hsl(178, 70%, 50%)",
    "sandwich": 126,
    "sandwichColor": "hsl(305, 70%, 50%)",
    "kebab": 12,
    "kebabColor": "hsl(194, 70%, 50%)",
    "fries": 183,
    "friesColor": "hsl(234, 70%, 50%)",
    "donut": 141,
    "donutColor": "hsl(41, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 192,
    "hot dogColor": "hsl(66, 70%, 50%)",
    "burger": 157,
    "burgerColor": "hsl(90, 70%, 50%)",
    "sandwich": 79,
    "sandwichColor": "hsl(286, 70%, 50%)",
    "kebab": 11,
    "kebabColor": "hsl(256, 70%, 50%)",
    "fries": 180,
    "friesColor": "hsl(200, 70%, 50%)",
    "donut": 62,
    "donutColor": "hsl(24, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 121,
    "hot dogColor": "hsl(231, 70%, 50%)",
    "burger": 108,
    "burgerColor": "hsl(172, 70%, 50%)",
    "sandwich": 8,
    "sandwichColor": "hsl(317, 70%, 50%)",
    "kebab": 160,
    "kebabColor": "hsl(112, 70%, 50%)",
    "fries": 6,
    "friesColor": "hsl(93, 70%, 50%)",
    "donut": 80,
    "donutColor": "hsl(311, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 127,
    "hot dogColor": "hsl(300, 70%, 50%)",
    "burger": 191,
    "burgerColor": "hsl(217, 70%, 50%)",
    "sandwich": 176,
    "sandwichColor": "hsl(21, 70%, 50%)",
    "kebab": 124,
    "kebabColor": "hsl(345, 70%, 50%)",
    "fries": 144,
    "friesColor": "hsl(57, 70%, 50%)",
    "donut": 145,
    "donutColor": "hsl(6, 70%, 50%)"
  }
]

const DivStatsBarChart = () => {
  return (
    <StyledPieChartContainer>

      <ResponsiveBar
          data={data}
          keys={[
              'hot dog',
              'burger',
              'sandwich',
              'kebab',
              'fries',
              'donut'
          ]}
          indexBy="country"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          defs={[
              {
                  id: 'dots',
                  type: 'patternDots',
                  background: 'inherit',
                  color: '#38bcb2',
                  size: 4,
                  padding: 1,
                  stagger: true
              },
              {
                  id: 'lines',
                  type: 'patternLines',
                  background: 'inherit',
                  color: '#eed312',
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10
              }
          ]}
          fill={[
              {
                  match: {
                      id: 'fries'
                  },
                  id: 'dots'
              },
              {
                  match: {
                      id: 'sandwich'
                  },
                  id: 'lines'
              }
          ]}
          borderColor={{
              from: 'color',
              modifiers: [
                  [
                      'darker',
                      1.6
                  ]
              ]
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0,
              legend: '',
              legendPosition: 'middle',
              legendOffset: -60
          }}
          axisLeft={null}
          enableGridY={false}
          labelSkipHeight={9}
          labelTextColor="black"
          legends={[
              {
                  dataFrom: 'keys',
                  anchor: 'bottom-right',
                  direction: 'column',
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: 'left-to-right',
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                      {
                          on: 'hover',
                          style: {
                              itemOpacity: 1
                          }
                      }
                  ]
              }
          ]}
          // tooltip={function(){}}
          motionConfig="slow"
          role="application"
          isFocusable={true}
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={function(e){return e.id+": "+e.formattedValue+" in country: "+e.indexValue}}
      />
    </StyledPieChartContainer>
)
}

export default memo(DivStatsBarChart)