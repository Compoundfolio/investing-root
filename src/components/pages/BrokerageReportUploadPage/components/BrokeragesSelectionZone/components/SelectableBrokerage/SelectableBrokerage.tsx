import React, { memo } from 'react'
import { ISelectableBrokerage } from './__types__'
import {
  brokerageButtonStyle,
  imageStyle, 
  brokerageBrandNameStyle,  
} from './styles'
import Image from 'next/image'

export default memo(function SelectableBrokerage({
  Brokerage,
  isSelected,
  handleUpdateSelectedBrokerages,
}: ISelectableBrokerage) {
  return (
    <button
      onClick={() => handleUpdateSelectedBrokerages({ Brokerage, isDelete: isSelected })}
      style={brokerageButtonStyle({isSelected})}
    >
      <Image
        width={64}
        height={64}
        style={imageStyle({isSelected})}
        alt={Brokerage.brandName}
        src={Brokerage.logoPath}
      />
      <h2 style={brokerageBrandNameStyle}>
        {Brokerage.brandName}
      </h2>
    </button>
  )
})
