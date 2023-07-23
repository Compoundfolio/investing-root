"use client"

import React, { memo, useState } from 'react'
import { PortfoliosMenu } from './components'
import { Divider, Portfolio } from '@core';

// TODO: Rid of
// const HARD_CODED = [{ id: "dsf3", title: "My Dividend Growth FI" }, { id: "sdf3", title: "My Dividend Growth FI 2" }]
const HARD_CODED = []

const PortfoliosManagementPage = () => {

  const [ portfolioList, setPortfolioList ] = useState<Portfolio[]>(HARD_CODED)

  const addPortfolio = (portfolio: Portfolio) => {
    setPortfolioList(prev => [...prev, portfolio])
  }

  const deletePortfolio = (portfolio: Portfolio) => {
    setPortfolioList(currentPortfolioList => {
      const index = currentPortfolioList.findIndex(existingPortfolio => existingPortfolio.id === portfolio.id)
      return currentPortfolioList.toSpliced(index)
    })
  }

  const savePortfolioChanges = () => {
    // TODO: Server request
  }

  return (
    <div className='flex flex-col w-full gap-8'>
      <PortfoliosMenu
        portfolioList={portfolioList}
        addPortfolio={addPortfolio}
      />
      <Divider />
      {/* <PortfolioManagementArea /> */}
    </div>
  )
}

export default memo(PortfoliosManagementPage)