import React, { memo } from 'react'
import { SUPPORTED_BROKERAGES, SupportedBrokerage } from '../../consts'
import { SelectableBrokerage } from './components'
import { AppLogo } from 'src/core/components/icons'

export default memo(function BrokeragesSelectionZone({
  setBrokerageClass,
}: IBrokeragesSelectionZone) {
  return (
    <div>
      <AppLogo withTitle />
      {SUPPORTED_BROKERAGES.map((Brokerage: SupportedBrokerage) => (
        <SelectableBrokerage 
          key={Brokerage.brandName}
          Brokerage={Brokerage} 
          setBrokerageClass={setBrokerageClass}
        />
      ))}
      {/* * TODO: HelpLegend */}
    </div>
  )
})
