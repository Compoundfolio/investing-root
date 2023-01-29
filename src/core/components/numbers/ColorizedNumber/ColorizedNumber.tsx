import React, { memo } from 'react'
import { IColorizedNumber } from './__types__'
import { StyledNumber } from './styled'
import { NumberMoveIcon } from '../../icons'

const ColorizedNumber = ({
  number,
  // TODO: currency
  currency = "$",
  isPercentage = false,
}: IColorizedNumber) => {
  const numberSymbol = number > 0 ? "+ " : "- "
  
  return (
    <div className='flex items-center gap-1.5'>
      {number && <NumberMoveIcon isPositiveMove={number > 0}/>}
      {/* TODO: Refactor */}
      <StyledNumber number={number}>
        {!isPercentage && numberSymbol}{!isPercentage && currency}{number}{isPercentage && "%"}
      </StyledNumber>
    </div>
  )
}

export default memo(ColorizedNumber)