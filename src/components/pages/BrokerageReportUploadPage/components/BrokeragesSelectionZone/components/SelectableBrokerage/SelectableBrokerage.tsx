import React, { memo } from 'react'
import { ISelectableBrokerage } from './__types__'
import {
  SelectableBrokerageButton,
  StyledBrokerageBrandName, 
  StyledImage,  
} from './styles'

export default memo(function SelectableBrokerage({
  Brokerage,
  isSelected,
  handleUpdateSelectedBrokerages,
}: ISelectableBrokerage) {
  // TODO: Remove via Shift + left click??
  return (
    <SelectableBrokerageButton
      onClick={() => handleUpdateSelectedBrokerages({ Brokerage })}
    >
      <StyledImage
        width={64}
        height={64}
        alt={Brokerage.brandName}
        src={Brokerage.logoPath}
      />
      <StyledBrokerageBrandName>
        {Brokerage.brandName}
      </StyledBrokerageBrandName>
    </SelectableBrokerageButton>
  )
})
