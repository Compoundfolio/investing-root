import React, { memo, useMemo } from 'react'
import TCell from '../TCell'
import { ColorizedNumber, PayCircleStatus } from 'src/core/components';
import styled from '@emotion/styled';
import { colors } from 'src/core/theme';
import { getPayStatusColor } from '@core/helpers';

interface IUpcomingDividendCell {
  dividendAmount: number
  dividendPayDate: Date
}

const StyledPayDate = styled.span({
  fontWeight: 500,
  fontSize: 14,
  color: colors.white,
})

const UpcomingDividendCell = ({
  dividendAmount,
  dividendPayDate,
}: IUpcomingDividendCell) => {
  const payStatusColor = useMemo(() => getPayStatusColor(dividendPayDate), [dividendPayDate])

  return (
    <TCell title={payStatusColor.status}>
      <div className='flex items-center gap-2.5'>
        <PayCircleStatus 
          payDate={dividendPayDate} 
          payStatusColor={payStatusColor}
        />
        <StyledPayDate>
          {/* {dividendPayDate} */}
          Aug 20
        </StyledPayDate>
      </div>
      <ColorizedNumber 
        number={dividendAmount}
        color={payStatusColor.color}
      />
    </TCell>
  )
}

export default memo(UpcomingDividendCell)