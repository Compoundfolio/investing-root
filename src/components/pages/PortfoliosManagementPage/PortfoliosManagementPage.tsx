"use client"

import React, { memo } from 'react'
import { PortfolioManagementArea, PortfoliosMenu } from './components'
import { Divider } from '@core';
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
      {selectedPortfolioCard && <>
        <Divider />
        <PortfolioManagementArea
          portfolio={selectedPortfolioCard}
        />
      </>}
    </div>
  )
}

export default memo(PortfoliosManagementPage)