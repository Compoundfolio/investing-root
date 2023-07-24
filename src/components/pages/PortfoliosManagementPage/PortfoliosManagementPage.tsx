"use client"

import React, { memo, useState } from 'react'
import { PortfoliosMenu } from './components'
import { Divider, Portfolio } from '@core';
import { usePortfolioList, useSelectedPortfolio } from './hooks';

const PortfoliosManagementPage = () => {

  const {
    portfolioList,
    addPortfolio,
  } = usePortfolioList()

  const {
    selectedPortfolioCard,
    selectPortfolioById,
  } = useSelectedPortfolio({
    portfolioList,
  })

  return (
    <div className='flex flex-col w-full gap-8'>
      <PortfoliosMenu
        portfolioList={portfolioList}
        selectedPortfolioCard={selectedPortfolioCard}
        addPortfolio={addPortfolio}
        selectPortfolioById={selectPortfolioById}
      />
      <Divider />
      {/* <PortfolioManagementArea /> */}
    </div>
  )
}

export default memo(PortfoliosManagementPage)