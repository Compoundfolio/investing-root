import React, { memo } from 'react'
import TCell from '../TCell'
import styled from '@emotion/styled';
import { colors } from 'src/core/theme';

const commonStyles = {
  fontFamily: 'Chakra Petch',
  fontSize: 14,
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
} as const

const StyledTopNumber = styled.span({
  ...commonStyles,
  fontWeight: 500,
  color: colors.white,
})

const StyledBottomNumber = styled.span({
  ...commonStyles,
  fontWeight: 400,
  color: colors.gray4C,
})

interface INumbersDifferenceCell {
  topNumber: number
  bottomNumber: number
  isPercentages?: boolean
}

const NumbersDifferenceCell = ({
  topNumber,
  bottomNumber,
  isPercentages = false
}: INumbersDifferenceCell) => {
  return (
    <TCell className="flex flex-col">
      <StyledTopNumber>
        {topNumber}{isPercentages && "%"}
      </StyledTopNumber>
      <StyledBottomNumber>
        {bottomNumber}{isPercentages && "%"}
      </StyledBottomNumber>
    </TCell>
  )
}

export default memo(NumbersDifferenceCell)