"use client"

import React, { memo, useCallback, useEffect, useState } from 'react'
import PlateAddButton from 'src/core/components/buttons/PlateAddButton'
import { useCreatePortfolio } from './hooks'
import { PortfolioCardList } from './components'
import { Portfolio } from '@core'

export interface IPortfoliosMenu {
  portfolioList: Portfolio[]
  addPortfolio: (portfolio: Portfolio) => void
}

const PortfoliosMenu = ({
  portfolioList,
  addPortfolio,
}: IPortfoliosMenu) => {

  const [ selectedPortfolioCard, setSelectedPortfolioCard ] = useState<Portfolio>()

  const {
    createNewPortfolioCard,
  } = useCreatePortfolio({
    addPortfolio,
  })

  useEffect(() => {
    if (portfolioList.length === 1) {
      setSelectedPortfolioCard(portfolioList[0])
    }
  }, [])

  const setSelectedPortfolioCardById = useCallback((id: string) => {
    const portfolioToSelect = portfolioList.find(portfolio => portfolio.id === id)
    if (portfolioToSelect && portfolioToSelect.id !== selectedPortfolioCard?.id) {
      setSelectedPortfolioCard(portfolioToSelect)
    }
  }, [portfolioList, selectedPortfolioCard])

  return (
    <section className='flex items-center w-full gap-8'>
      <PlateAddButton
        title='Create Portfolio'
        onClick={createNewPortfolioCard}
      />
      <PortfolioCardList
        portfolioEntityList={portfolioList}
        selectedPortfolioCardId={selectedPortfolioCard?.id}
        setSelectedPortfolioCardId={setSelectedPortfolioCardById}
      />
    </section>
  )
}

export default memo(PortfoliosMenu)