import { YearSwitcher } from '@core'
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

const DivChartHeader = ({
  currentlySelectedYearDivs,
  currentlySelectedYearExpectedTotalDivs,
  currentlySelectedYearDivGrowthPercentageComparedToPrevYear,
  currentlySelectedYear,
  onYearBack,
  onYearForward,
}: IDivChartHeader) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" gap={3} mb={4}>
      <Box display="flex" alignItems="center" gap={1}>
        <h2>Dividends</h2>
        {/* TODO: Estimated divs */}
        <span>
          [${currentlySelectedYearDivs} / ${currentlySelectedYearExpectedTotalDivs}] up {currentlySelectedYearDivGrowthPercentageComparedToPrevYear}%
        </span>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        <YearSwitcher 
          year={currentlySelectedYear}
          onYearBack={onYearBack}
          onYearForward={onYearForward}
        />
      </Box>
    </Box>
  )
}

export default memo(DivChartHeader)