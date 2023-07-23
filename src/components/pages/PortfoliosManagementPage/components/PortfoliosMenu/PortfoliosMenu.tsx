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

  const isNoPortfolios = portfolioList.length === 0

  const {
    createNewPortfolioCard,
  } = useCreatePortfolio({
    addPortfolio,
    isNoPortfolios,
  })

  useEffect(() => {
    if (portfolioList.length === 1) {
      setSelectedPortfolioCard(portfolioList[0])
    }
  }, [portfolioList])

  const containerClasses = portfolioList.length
    ? 'flex items-center w-full gap-8'
    : 'flex items-center w-full h-full justify-center'

  const setSelectedPortfolioCardById = useCallback((id: string) => {
    const portfolioToSelect = portfolioList.find(portfolio => portfolio.id === id)
    if (portfolioToSelect && portfolioToSelect.id !== selectedPortfolioCard?.id) {
      setSelectedPortfolioCard(portfolioToSelect)
    }
  }, [portfolioList, selectedPortfolioCard])

  return (
    <section className={containerClasses}>
      <PlateAddButton
        title='Create Portfolio'
        isNoPortfolios={isNoPortfolios}
        onClick={createNewPortfolioCard}
      />
      {!!portfolioList.length && (
        <PortfolioCardList
          portfolioEntityList={portfolioList}
          selectedPortfolioCardId={selectedPortfolioCard?.id}
          setSelectedPortfolioCardId={setSelectedPortfolioCardById}
        />
      )}
    </section>
  )
}

export default memo(PortfoliosMenu)