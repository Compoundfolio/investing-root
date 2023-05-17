import { ColorizedNumber,  ModalBlur,  NumberMini, YearSwitcher, colors } from '@core'
import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { memo } from 'react'
import CircleButton from 'src/core/components/buttons/CircleButton/CircleButton';
import { useOpen } from 'src/core/hooks';
import DivStatsBarChart from '../DivStatsBarChart';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

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
  currentlySelectedYear,
  onYearBack,
  onYearForward,
}: IDivChartHeader) => {
  const [ isFullScreenOpen, handleIsFullScreenOpen ] = useOpen()

  return <>
    <Box display="flex" alignItems="center" justifyContent="space-between" gap={3} mb={4}>
      <Box display="flex" alignItems="center" gap={1}>
        <StyledChartTitle>Dividends</StyledChartTitle>
        <YearSwitcher 
          year={currentlySelectedYear}
          onYearBack={onYearBack}
          onYearForward={onYearForward}
        />
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        {!isFullScreenOpen && (
          <CircleButton onClick={handleIsFullScreenOpen}>
            <FullscreenIcon sx={{ color: colors.gray4C }} />
          </CircleButton>
        )}
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
    </Box>

    <ModalBlur
        isOpen={isFullScreenOpen}
        handleOpenChange={handleIsFullScreenOpen}
        // onSave={handleReportsUpload}
        // saveButtonTitle=""
      >
        <DivStatsBarChart openedInModal />
      </ModalBlur>
  </>
}

export default memo(DivChartHeader)