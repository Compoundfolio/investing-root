import React, { memo } from 'react'
import { SUPPORTED_BROKERAGES, SupportedBrokerage } from '../../consts'
import { SelectableBrokerage } from './components'

export default memo(function BrokeragesSelectionZone() {
  return (
    <div>
      {SUPPORTED_BROKERAGES.map((Brokerage: SupportedBrokerage) => (
        <SelectableBrokerage 
          key={Brokerage.brandName}
          Brokerage={Brokerage} 
        />
      ))}
      {/* * -- AppLogo[withTitle] (z-indexed on modal appear) */}
      {/* * -- HelpLegend */}

      {/* * --[] .map => BrokerageSelectionBrick (z-indexed on modal appear [selected ones]) */}
    </div>
  )
})
