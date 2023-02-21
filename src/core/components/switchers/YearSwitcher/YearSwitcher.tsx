import React from 'react'
import CircleArrowButton from '../../buttons/CircleArrowButton/CircleArrowButton'
import useYearSwitcher, { IUseYearSwitcher } from './useYearSwitcher'
import { StyledYear } from './styled';

const YearSwitcher = ({
  onYearBack,
  onYearForward,
}: IUseYearSwitcher) => {
  const  {
    year,
    goYearBack,
    goYearForward
  } = useYearSwitcher({ 
    onYearBack, 
    onYearForward,
  })

  return (
    <div className='flex items-center gap-2'>
      <CircleArrowButton 
        onClick={goYearBack}
        arrowIconOrientation="right"
      />
      <StyledYear>{year}</StyledYear>
      <CircleArrowButton 
        onClick={goYearForward}
        arrowIconOrientation="left"
      />
    </div>
  )
}

export default YearSwitcher