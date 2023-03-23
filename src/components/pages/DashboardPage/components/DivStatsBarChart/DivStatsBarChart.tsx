import React, { memo } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { StyledBarChartContainer } from './styled'
import { colors } from 'src/core/theme';
import { YearSwitcher, parseNumberToFixed2 } from '@core';
import { useDividendYearSwitch } from './hooks';
import useDivChartData from './hooks/useDivChartData';
import { linearGradientDef } from '@nivo/core'
import { CustomAxisBottomTick, DivChartHeader } from './components';

const DivStatsBarChart = () => {
  const { dataSet } = useDivChartData()  

  const {
    selectedYear,
    selectedYearDividendsData,
    onYearBack,
    onYearForward,
  } = useDividendYearSwitch(dataSet)  

  const yearDivs = selectedYearDividendsData.reduce((prev, cur) => parseNumberToFixed2(prev + cur.receivedDividendAmount), 0)
  const pervYearDivs = dataSet[selectedYear-1].reduce((prev, cur) => parseNumberToFixed2(prev + cur.receivedDividendAmount), 0)
  const yearDivGrowthPercentage = parseNumberToFixed2((yearDivs / pervYearDivs) * 100)
  const estimatedSelectedYearDivs = 500.01

  return (
    <StyledBarChartContainer>
      <DivChartHeader 
        currentlySelectedYearDivs={yearDivs} 
        currentlySelectedYearExpectedTotalDivs={estimatedSelectedYearDivs} 
        currentlySelectedYearDivGrowthPercentageComparedToPrevYear={yearDivGrowthPercentage} 
        currentlySelectedYear={selectedYear} 
        onYearBack={onYearBack} 
        onYearForward={onYearForward} 
      />
      <ResponsiveBar
        data={selectedYearDividendsData}
        keys={[
          'receivedDividendAmount',
          'announcedDividendAmount',
          'estimatedNotReceivedDividendAmount',
          'kebab',
          'fries',
          'donut'
        ]}
        indexBy="month"
        margin={{ bottom: 28 }}
        padding={0.20}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={[colors.lightGreen, colors.darkGreen, colors.darkGreenEasy]}
        defs={[
          linearGradientDef('receivedDivsGradient', [
            { offset: 0, color: colors.gold },
            { offset: 30, color: colors.darkGreen },
            { offset: 90, color: "rgba(15, 110, 113, 0.3)" },
          ])
        ]}
      fill={[
          { match: { id: 'receivedDividendAmount' }, id: 'receivedDivsGradient' },
          // match using function
          // { match: d => d.id === 'vue', id: 'gradientB' },
          // match all, will only affect 'elm', because once a rule match,
          // others are skipped, so now it acts as a fallback
          // { match: '*', id: 'gradientC' },
      ]}
        // linear-gradient(360deg, rgba(15, 111, 114, 0.31) 0%, #0F6F72 73.44%, #FFD391 100%);
        // defs={[
        //   {
        //     id: 'dots',
        //     type: 'patternDots',
        //     background: 'inherit',
        //     color: '#38bcb2',
        //     size: 4,
        //     padding: 1,
        //     stagger: true
        //   },
        //   {
        //     id: 'lines',
        //     type: 'patternLines',
        //     background: 'inherit',
        //     color: colors.green,
        //     rotation: -45,
        //     lineWidth: 6,
        //     spacing: 10
        //   }
        // ]}
        // fill={[
        //   // {
        //   //     match: {
        //   //         id: 'receivedDividendAmount'
        //   //     },
        //   //     id: 'dots'
        //   // },
        //   {
        //     match: {
        //       id: 'receivedDividendAmount'
        //     },
        //     id: 'lines'
        //   }
        // ]}
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
          legendOffset: -60,
          renderTick: CustomAxisBottomTick
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
        // tooltip={(data) => {
        //   console.log(data);
          
        //   return (
        //     <div>1122</div>
        //   )
        // }}
        motionConfig="slow"
        role="application"
        isFocusable={true}
        // ariaLabel="Nivo bar chart demo"
        // barAriaLabel={function (e) { return e.id + ": " + " in month: " + e.indexValue }}
      />
    </StyledBarChartContainer>
  )
}

export default memo(DivStatsBarChart)