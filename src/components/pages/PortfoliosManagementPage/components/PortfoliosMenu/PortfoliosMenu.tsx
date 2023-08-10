"use client"

import React, { memo } from 'react'
import { MenuWrapper, PortfolioCardList } from './components'

const PortfoliosMenu = () => {
  return (
    <MenuWrapper>
      <PortfolioCardList />
    </MenuWrapper>
  )
}

export default memo(PortfoliosMenu)