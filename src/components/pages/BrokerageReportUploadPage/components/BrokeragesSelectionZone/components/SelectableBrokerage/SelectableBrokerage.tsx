import React, { memo } from 'react'
import { ISelectableBrokerage } from './__types__'
import {
  SelectableBrokerageButton,
  StyledBrokerageBrandName, 
  StyledImage,  
} from './styles'

export default memo(function SelectableBrokerage({
  Brokerage,
}: ISelectableBrokerage) {
  return (
    <SelectableBrokerageButton
      // TODO: onClick={() => setBrokerageClass(Brokerage)}
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
