import React, { memo } from 'react'
import TCell from '../TCell'
import { Currency } from 'src/core/types'
import { ColorizedNumber } from 'src/core/components';

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
        <ColorizedNumber
          number={gainPercentage}
          isExtraBold={gainPercentage !== undefined && gainNumber !== undefined}
          isPercentage
        />
      )}
      {gainNumber && (
        <ColorizedNumber
          number={gainNumber}
        />
      )}
    </TCell>
  )
}

export default memo(GainCell)