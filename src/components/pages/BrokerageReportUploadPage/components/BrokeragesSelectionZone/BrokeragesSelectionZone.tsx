import React, { memo } from 'react'
import { SupportedBrokerage } from '../../consts'
import { SelectableBrokerage } from './components'
import { AppLogo } from 'src/core/components/icons'
import { useSelectedBrokeragesStore } from '../../stores'
import { StyledContainer } from './styled'
import { ExanteBrokerage } from "src/inversions";

export const SUPPORTED_BROKERAGES = [
  ExanteBrokerage,
] 

export default memo(function BrokeragesSelectionZone() {
  const { 
    isSelected, 
    handleUpdateSelectedBrokerages 
  } = useSelectedBrokeragesStore()  

  return (
    <StyledContainer>
      <AppLogo withTitle />
      {/* TODO: Fix this */}
      {[ExanteBrokerage].map((Brokerage: SupportedBrokerage) => (
        <SelectableBrokerage 
          key={Brokerage.brandName}
          Brokerage={Brokerage} 
          isSelected={isSelected(Brokerage)}
          handleUpdateSelectedBrokerages={handleUpdateSelectedBrokerages}
        />
      ))}
      {/* * TODO: HelpLegend */}
      <div></div>
    </StyledContainer>
  )
})
