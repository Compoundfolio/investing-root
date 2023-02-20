import React, { memo } from 'react'
import { IColorizedNumber } from './__types__'
import { StyledNumber } from './styled'
import { NumberMoveIcon } from '../../icons'

const ColorizedNumber = ({
  number,
  // TODO: currency
  currency = "$",
  isPercentage = false,
  isExtraBold = false,
  color,
}: IColorizedNumber) => {
  const numberSymbol = number > 0 ? "+ " : "- "
  
  return (
    <div className='flex items-center gap-1'>
      {isPercentage && <NumberMoveIcon color={color} isPositiveMove={number > 0}/>}
      {/* TODO: Refactor */}
      <StyledNumber 
        number={number} 
        isPercentage={isPercentage}
        isExtraBold={isExtraBold}
        color={color}
      >
        {!isPercentage && numberSymbol}{!isPercentage && currency}{isPercentage ? Math.abs(number) : number}{isPercentage && "%"}
      </StyledNumber>
    </div>
  )
}

export default memo(ColorizedNumber)