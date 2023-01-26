import React, { memo, useMemo } from 'react'
import { INumberMaxi } from './types'
import { 
  StyledChangeValue,
  StyledContainer, 
  StyledCurrencySign, 
  StyledFloatNumberPart, 
  StyledH5,
  StyledNumber,
} from './styled'
import ColorizedNumber from '../ColorizedNumber'
import { outputNumber } from '@core/helpers'

const NumberMaxi = ({
  title,
  numbers,
  curency,
  gainNumber,
}: INumberMaxi) => {
  const [intNumberPart, floatNumberPart] = useMemo(() => {
    return outputNumber(numbers).split(".")
  }, [numbers])

  return (
    <StyledContainer>
      <StyledH5>{title}</StyledH5>
      <div className='relative pt-5 pb-2.5'>
        <StyledCurrencySign>
          {curency && curency} 
        </StyledCurrencySign>
        <StyledNumber>
          {intNumberPart}<StyledFloatNumberPart>.{floatNumberPart}</StyledFloatNumberPart>
        </StyledNumber>
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