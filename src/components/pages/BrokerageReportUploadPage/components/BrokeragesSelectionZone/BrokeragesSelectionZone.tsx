import React, { memo } from 'react'
import { SUPPORTED_BROKERAGES, SupportedBrokerage } from '../../consts'
import { SelectableBrokerage } from './components'
import { AppLogo } from 'src/core/components/icons'
import { useSelectedBrokeragesStore } from '../../stores'

export default memo(function BrokeragesSelectionZone() {
  const { 
    isSelected, 
    handleUpdateSelectedBrokerages 
  } = useSelectedBrokeragesStore()

  return (
    <div>
      <AppLogo withTitle />
      {/* TODO: Pass to memo component */}
      {SUPPORTED_BROKERAGES.map((Brokerage: SupportedBrokerage) => (
        <SelectableBrokerage 
          key={Brokerage.brandName}
          Brokerage={Brokerage} 
          isSelected={isSelected(Brokerage)}
          handleUpdateSelectedBrokerages={handleUpdateSelectedBrokerages}
        />
      ))}
      {/* * TODO: HelpLegend */}
    </div>
  )
})
