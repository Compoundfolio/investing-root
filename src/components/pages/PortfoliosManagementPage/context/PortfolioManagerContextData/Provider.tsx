"use client"

import { ReactNode } from 'react'
import PortfolioManagerContext, { PortfolioManagerContextData } from './context'
import { usePortfolioList, useSelectedPortfolio } from './hooks'

interface IWaiverContextProvider {
  children: ReactNode
}

export const PortfolioManagerContextProvider = ({ children }: IWaiverContextProvider) => {

  const {
    portfolioList,
    isNoPortfolios,
    addPortfolio,
    savePortfolioChanges,
    deletePortfolio,
    createNewPortfolioCard,
  } = usePortfolioList()

  const {
    selectedPortfolioCard,
    selectPortfolioById,
  } = useSelectedPortfolio({
    portfolioList,
  })

  const context: PortfolioManagerContextData = {
    portfolioList,
    isNoPortfolios,
    selectedPortfolioCard,
    addPortfolio,
    savePortfolioChanges,
    deletePortfolio,
    selectPortfolioById,
    createNewPortfolioCard
  }

  return (
    <PortfolioManagerContext.Provider value={context}>
      {children}
    </PortfolioManagerContext.Provider>
  )
}
