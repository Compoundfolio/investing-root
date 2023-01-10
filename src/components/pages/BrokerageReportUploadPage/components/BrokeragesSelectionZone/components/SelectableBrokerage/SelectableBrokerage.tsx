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
  return (
    <SelectableBrokerageButton
      onClick={() => handleUpdateSelectedBrokerages({ Brokerage, isDelete: isSelected })}
      isSelected={isSelected}
    >
      <StyledImage
        width={64}
        height={64}
        isSelected={isSelected}
        alt={Brokerage.brandName}
        src={Brokerage.logoPath}
      />
      <StyledBrokerageBrandName>
        {Brokerage.brandName}
      </StyledBrokerageBrandName>
    </SelectableBrokerageButton>
  )
})
