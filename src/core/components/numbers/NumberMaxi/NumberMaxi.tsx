import React, { memo } from 'react'
import { INumberMaxi } from './types'
import { 
  StyledChangeValue,
  StyledContainer, 
  StyledCurrencySign, 
  StyledH5,
  StyledNumber,
} from './styled'
import ColorizedNumber from '../ColorizedNumber'

const NumberMaxi = ({
  title,
  numbers,
  curency,
  gainNumber,
}: INumberMaxi) => {
  return (
    <StyledContainer>
      <StyledH5>{title}</StyledH5>
      <div className='relative py-5'>
        <StyledCurrencySign>
          {curency && curency} 
        </StyledCurrencySign>
        <StyledNumber>{numbers}</StyledNumber>
        <StyledChangeValue>
          <ColorizedNumber 
            number={numbers}
            isPercentage
          />
        </StyledChangeValue>
      </div>
    </StyledContainer>
  )
}

export default memo(NumberMaxi)