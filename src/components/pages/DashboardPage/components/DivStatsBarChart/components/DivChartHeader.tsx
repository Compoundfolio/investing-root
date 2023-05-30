import { ModalBlur, NumberMini, YearSwitcher, colors } from '@core'
import styles from './DivChartHeader.module.css'
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

const DivChartHeader = ({
  currentlySelectedYearDivs,
  currentlySelectedYearExpectedTotalDivs,
  currentlySelectedYear,
  onYearBack,
  onYearForward,
}: IDivChartHeader) => {
  const [isFullScreenOpen, handleIsFullScreenOpen] = useOpen()

  return <>
    <div className={styles.divChartHead_container}>
      <div className={styles.divChartHead_container_groupWrap}>
        <h2 className={styles.chartName}>Dividends</h2>
        <YearSwitcher
          year={currentlySelectedYear}
          onYearBack={onYearBack}
          onYearForward={onYearForward}
        />
      </div>
      <div className={styles.divChartHead_container_groupWrap}>
        {!isFullScreenOpen && (
          <CircleButton onClick={handleIsFullScreenOpen}>
            <FullscreenIcon sx={{ color: colors.gray4C }} />
          </CircleButton>
        )}
      </div>
    </div>
    <div className={styles.divChartHead_container_numbersWrap}>
      <NumberMini
        title="Received"
        numbers={`$${currentlySelectedYearDivs}`}
      />
      <NumberMini
        title="Estimated total"
        numbers={`$${currentlySelectedYearExpectedTotalDivs}`}
      />
    </div>

    <ModalBlur
      title="Dividends"
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