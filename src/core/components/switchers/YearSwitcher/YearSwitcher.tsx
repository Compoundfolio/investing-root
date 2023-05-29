import React from 'react'
import CircleArrowButton from '../../buttons/CircleArrowButton/CircleArrowButton'
import styles from './YearSwitcher.module.css';

interface IUseYearSwitcher {
  year: number
  onYearBack: () => void
  onYearForward: () => void
}

const YearSwitcher = ({
  year,
  onYearBack,
  onYearForward,
}: IUseYearSwitcher) => {
  return (
    <div className='flex items-center gap-2'>
      <div>
        <CircleArrowButton
          onClick={onYearBack}
          arrowIconOrientation="right"
        />
      </div>
      <span className={styles.yearSwitcher_year}>
        {year}
      </span>
      <div>
        <CircleArrowButton
          onClick={onYearForward}
          arrowIconOrientation="left"
        />
      </div>
    </div>
  )
}

export default YearSwitcher