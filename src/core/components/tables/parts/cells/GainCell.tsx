import React, { memo } from 'react'
import TCell from '../TCell'
import { Currency } from 'src/core/types'
import styled from '@emotion/styled';
import { getColorByGainNumber } from '@core/helpers';
import { ColorizedNumber } from 'src/core/components';

interface StyleProps {
  gain: number
}

const commonStyles = (gain: number) => ({
  fontFamily: 'Chakra Petch',
  fontSize: 14,
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  color: getColorByGainNumber(gain),
})

const StyledTopNumber = styled.span
(({ gain }: StyleProps) => ({
  ...commonStyles(gain),
  fontWeight: 500,
}))

const StyledBottomNumber = styled.span
(({ gain }: StyleProps) => ({
  ...commonStyles(gain),
  fontWeight: 400,
}))

interface IGainCell {
  gainPercentage?: number
  gainNumber?: number
  currency?: Currency
}

const GainCell = ({
  gainPercentage,
  gainNumber,
  // TODO: currency
  currency
}: IGainCell) => {
  return (
    <TCell>
      {gainPercentage && (
        // <StyledTopNumber gain={gainPercentage}>
        //   {gainPercentage}%
        // </StyledTopNumber>
        <ColorizedNumber
          number={gainPercentage}
          isPercentage
        />
      )}
      {gainPercentage && (
        <StyledBottomNumber gain={gainNumber}>
          + ${gainPercentage}
        </StyledBottomNumber>
      )}
    </TCell>
  )
}

export default memo(GainCell)