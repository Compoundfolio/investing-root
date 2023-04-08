import { colors } from '@core'
import styled from '@emotion/styled'
import React, { memo } from 'react'

const StyledCard = styled.div({
  backgroundColor: colors.darkGreen,
  color: colors.white,
  display: "flex",
  flexDirection: "column",
  padding: 8,
  borderRadius: 8,
})

const StyledNumber = styled.span({
  fontFamily: "Chakra Petch",
  fontSize: 32,
})

interface IUploadMetrixCards {
  tradesAmount: number,
  nonTradesAmount: number,
}

const UploadMetrixCards = ({
  tradesAmount,
  nonTradesAmount,
}: IUploadMetrixCards) => {
  return (
    <div className='flex w-full gap-4 mt-12'>
      {tradesAmount && (
        <StyledCard>
          <StyledNumber>+ {tradesAmount}</StyledNumber>
          of buy/sell transactions found!
        </StyledCard>
      )}
      {nonTradesAmount && (
        <StyledCard>
          <StyledNumber>+ {nonTradesAmount}</StyledNumber>
          of other transactions found!
        </StyledCard>
      )}
    </div>
  )
}

export default memo(UploadMetrixCards)