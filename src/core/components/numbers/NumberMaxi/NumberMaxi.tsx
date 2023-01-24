import React, { memo } from 'react'
import { INumberMaxi } from './types'
import { 
  StyledChangeValue,
  StyledContainer, 
  StyledCurrencySign, 
  StyledH5,
  StyledNumber,
} from './styled'

const NumberMaxi = ({
  title,
  numbers,
  curency,
  gainNumber,
}: INumberMaxi) => {
  return (
    <StyledContainer>
      <StyledH5>{title}</StyledH5>
      <StyledCurrencySign>
        {curency && curency} 
        <StyledNumber>{numbers}</StyledNumber>
      </StyledCurrencySign>
      <StyledChangeValue>{gainNumber}</StyledChangeValue>
    </StyledContainer>
  )
}

export default memo(NumberMaxi)