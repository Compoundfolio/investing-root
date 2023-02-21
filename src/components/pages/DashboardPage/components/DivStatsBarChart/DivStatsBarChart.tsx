import React, { memo } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { StyledBarChartContainer } from './styled'
import { colors } from 'src/core/theme';
import { YearSwitcher } from '@core';

const data = [
  {
    "month": "Jan",
    "receivedDividendAmount": 34,
    // "receivedDividendAmountColor": "hsl(263, 70%, 50%)",
    // "estimatedNotReceivedDividendAmount": 200,
    // "estimatedNotReceivedDividendAmountColor": "hsl(87, 70%, 50%)",
    // "announcedDividendAmount": 183,
    // "announcedDividendAmountColor": "hsl(74, 70%, 50%)",

  },
  {
    "month": "Feb",
    "receivedDividendAmount": 109,
    "announcedDividendAmount": 15,
    "estimatedNotReceivedDividendAmount": 7,
  },
  {
    "month": "Mar",
    "receivedDividendAmount": 10,
    "announcedDividendAmount": 25,
    "estimatedNotReceivedDividendAmount": 80,
  },
  {
    "month": "Apr",
    "receivedDividendAmount": 0,
    "announcedDividendAmount": 88,
    "estimatedNotReceivedDividendAmount": 25,
  },
  {
    "month": "May",
    "receivedDividendAmount": 0,
    "announcedDividendAmount": 0,
    "estimatedNotReceivedDividendAmount": 157,
  },
  {
    "month": "Jun",
    "receivedDividendAmount": 0,
    "announcedDividendAmount": 0,
    "estimatedNotReceivedDividendAmount": 16,
  },
  {
    "month": "Jul",
    "receivedDividendAmount": 0,
    "announcedDividendAmount": 100,
    "estimatedNotReceivedDividendAmount": 16,
  },
  {
    "month": "Aug",
    "receivedDividendAmount": 0,
    "announcedDividendAmount": 0,
    "estimatedNotReceivedDividendAmount": 100,
  },
  {
    "month": "Sep",
    "receivedDividendAmount": 0,
    "announcedDividendAmount": 0,
    "estimatedNotReceivedDividendAmount": 10,
  },
  {
    "month": "Oct",
    "receivedDividendAmount": 0,
    "announcedDividendAmount": 0,
    "estimatedNotReceivedDividendAmount": 20,
  },
  {
    "month": "Nov",
    "receivedDividendAmount": 0,
    "announcedDividendAmount": 120,
    "estimatedNotReceivedDividendAmount": 15,
  },
  {
    "month": "Dec",
    "receivedDividendAmount": 0,
    "announcedDividendAmount": 0,
    "estimatedNotReceivedDividendAmount": 40,
  },
]

const DivStatsBarChart = () => {
  const onYearBack = (year: number) => {}
  const onYearForward = (year: number) => {}

  return (
    <StyledBarChartContainer>
      <YearSwitcher 
        onYearBack={onYearBack}
        onYearForward={onYearForward}
      />
      <ResponsiveBar
        data={data}
        keys={[
          'receivedDividendAmount',
          'announcedDividendAmount',
          'estimatedNotReceivedDividendAmount',
          'kebab',
          'fries',
          'donut'
        ]}
        indexBy="month"
        margin={{ bottom: 24 }}
        padding={0.20}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={[colors.lightGreen, colors.darkGreen, colors.darkGreenEasy]}
        // linear-gradient(360deg, rgba(15, 111, 114, 0.31) 0%, #0F6F72 73.44%, #FFD391 100%);
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
            color: colors.green,
            rotation: -45,
            lineWidth: 6,
            spacing: 10
          }
        ]}
        fill={[
          // {
          //     match: {
          //         id: 'receivedDividendAmount'
          //     },
          //     id: 'dots'
          // },
          {
            match: {
              id: 'receivedDividendAmount'
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
        label={({ id, value }) => id === "estimatedNotReceivedDividendAmount" ? `~$${value}` : `$${value}`} // TODO: Currency
        // legends={[
        //     {
        //         dataFrom: 'keys',
        //         anchor: 'bottom-right',
        //         direction: 'column',
        //         justify: false,
        //         translateX: 120,
        //         translateY: 0,
        //         itemsSpacing: 2,
        //         itemWidth: 100,
        //         itemHeight: 20,
        //         itemDirection: 'left-to-right',
        //         itemOpacity: 0.85,
        //         symbolSize: 20,
        //         effects: [
        //             {
        //                 on: 'hover',
        //                 style: {
        //                     itemOpacity: 1
        //                 }
        //             }
        //         ]
        //     }
        // ]}
        // tooltip={function(){}}
        motionConfig="slow"
        role="application"
        isFocusable={true}
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in month: " + e.indexValue }}
      />
    </StyledBarChartContainer>
  )
}

export default memo(DivStatsBarChart)