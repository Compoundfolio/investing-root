import { ModalBlur, NumberMini, YearSwitcher, colors } from "@core"
import styles from "./DivChartHeader.module.css"
import { Box } from "@mui/material"
import React, { memo } from "react"
import CircleButton from "src/core/components/buttons/CircleButton/CircleButton"
import { useOpen } from "src/core/hooks"
import DivStatsBarChart from "../DivStatsBarChart"
import FullscreenIcon from "@mui/icons-material/Fullscreen"
import { DividendStatsBoard } from "./components"

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
  currentlySelectedYear,
  onYearBack,
  onYearForward,
}: IDivChartHeader) => {
  const [isFullScreenOpen, handleIsFullScreenOpen] = useOpen()

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap={3}
        mb={4}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <h2 className={styles.chartName}>Dividends</h2>
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
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mb={4}
      >
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
      >
        <DividendStatsBoard />
      </ModalBlur>
    </>
  )
}

export default memo(DivChartHeader)
