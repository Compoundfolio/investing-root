"use client"

import React, { memo } from 'react'
import PlateAddButton from 'src/core/components/buttons/PlateAddButton'
import { useCreatePortfolio } from './hooks'
import { PortfolioCardList } from './components'
import { Portfolio } from '@core'

export interface IPortfoliosMenu {
  portfolioList: Portfolio[]
  selectedPortfolioCard: Portfolio | undefined
  addPortfolio: (portfolio: Portfolio) => void
  selectPortfolioById: (portfolioId: string) => void
}

const PortfoliosMenu = ({
  portfolioList,
  selectedPortfolioCard,
  addPortfolio,
  selectPortfolioById,
}: IPortfoliosMenu) => {
  const isNoPortfolios = portfolioList.length === 0

  const {
    createNewPortfolioCard,
  } = useCreatePortfolio({
    addPortfolio,
    isNoPortfolios,
  })

  const containerClasses = portfolioList.length
    ? 'flex items-center w-full gap-8'
    : 'flex items-center w-full h-full justify-center'

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
          setSelectedPortfolioCardId={selectPortfolioById}
        />
      )}
    </section>
  )
}

export default memo(PortfoliosMenu)