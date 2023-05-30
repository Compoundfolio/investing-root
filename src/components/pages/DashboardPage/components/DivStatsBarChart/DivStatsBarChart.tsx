import React, { memo } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import { barChartContainerStyle } from './styled'
import { colors } from 'src/core/theme';
import { parseNumberToFixed2 } from '@core';
import { useDividendYearSwitch } from './hooks';
import useDivChartData from './hooks/useDivChartData';
import { linearGradientDef } from '@nivo/core'
import { CustomAxisBottomTick, DivChartHeader, DivStats } from './components';
import { IDivStatsBarChart } from './types';

const DivStatsBarChart = ({
  openedInModal = false
}: IDivStatsBarChart) => {
  const { dataSet } = useDivChartData()

  const {
    selectedYear,
    selectedYearDividendsData,
    onYearBack,
    onYearForward,
  } = useDividendYearSwitch(dataSet)

  const yearDivs = selectedYearDividendsData.reduce((prev, cur) => parseNumberToFixed2(prev + cur.receivedDividendAmount), 0)
  const pervYearDivs = dataSet[selectedYear - 1].reduce((prev, cur) => parseNumberToFixed2(prev + cur.receivedDividendAmount), 0)
  const yearDivGrowthPercentage = parseNumberToFixed2((yearDivs / pervYearDivs) * 100)

  // TODO: estimatedSelectedYearDivs
  const estimatedSelectedYearDivs = 500.01

  return (
    <section style={barChartContainerStyle({openedInModal})}>
      {openedInModal ? (
        <DivStats />
      ) : (
        <DivChartHeader
          currentlySelectedYearDivs={yearDivs}
          currentlySelectedYearExpectedTotalDivs={estimatedSelectedYearDivs}
          currentlySelectedYearDivGrowthPercentageComparedToPrevYear={yearDivGrowthPercentage}
          currentlySelectedYear={selectedYear}
          onYearBack={onYearBack}
          onYearForward={onYearForward}
        />
      )}
      <ResponsiveBar
        data={selectedYearDividendsData}
        keys={[
          'receivedDividendAmount',
          'announcedDividendAmount',
          'estimatedNotReceivedDividendAmount',
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
          tickPadding: openedInModal ? 15 : 5,
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
        motionConfig="slow"
        role="application"
        isFocusable={true}
      />
    </section>
  )
}

export default memo(DivStatsBarChart)