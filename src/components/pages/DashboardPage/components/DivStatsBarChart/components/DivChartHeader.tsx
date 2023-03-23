import { ColorizedNumber, NumberMini, YearSwitcher } from '@core'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { memo } from 'react'

interface IDivChartHeader {
  currentlySelectedYearDivs: number
  currentlySelectedYearExpectedTotalDivs: number
  currentlySelectedYearDivGrowthPercentageComparedToPrevYear: number
  currentlySelectedYear: number
  onYearBack: () => void
  onYearForward: () => void
}

const StyledChartTitle = styled.h2({
  fontWeight: 400,
  fontSize: 20,
  color: `rgba(255, 255, 255, 0.2)`,
})

const DivChartHeader = ({
  currentlySelectedYearDivs,
  currentlySelectedYearExpectedTotalDivs,
  currentlySelectedYearDivGrowthPercentageComparedToPrevYear,
  currentlySelectedYear,
  onYearBack,
  onYearForward,
}: IDivChartHeader) => {
  return <>
    <Box display="flex" alignItems="center" justifyContent="space-between" gap={3} mb={4}>
      <Box display="flex" alignItems="center" gap={1}>
        <StyledChartTitle>Dividends</StyledChartTitle>
        {/* TODO: Estimated divs */}
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <YearSwitcher 
          year={currentlySelectedYear}
          onYearBack={onYearBack}
          onYearForward={onYearForward}
        />
      </Box>
    </Box>
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={4}>
      <NumberMini
        title="Received"
        numbers={`$${currentlySelectedYearDivs}`}
      />
      <NumberMini
        title="Estimated total"
        numbers={`$${currentlySelectedYearExpectedTotalDivs}`}
      />
      <ColorizedNumber
        number={currentlySelectedYearDivGrowthPercentageComparedToPrevYear}
        isPercentage
        isExtraBold
      />
    </Box>
  </>
}

export default memo(DivChartHeader)