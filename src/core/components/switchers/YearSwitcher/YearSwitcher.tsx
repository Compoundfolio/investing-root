import React from 'react'
import CircleArrowButton from '../../buttons/CircleArrowButton/CircleArrowButton'
import { StyledYear } from './styled';

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
      <StyledYear>{year}</StyledYear>
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