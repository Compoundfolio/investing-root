import { Portfolio, removeObjectFromArrayOfObjects } from "@core"
import { useCallback, useState } from "react"
import { causeGentleUiTransition } from "./helpers"


const usePortfolioList = () => {
  const [ portfolioList, setPortfolioList ] = useState<Portfolio[]>([])

  const isNoPortfolios = portfolioList.length === 0

  const emptyPortfolioTemplate = {
    id: `${Math.random()}`,
    title: 'New Portfolio',
    brokerages: [],
    totalReturnValue: 0,
    totalReturnPercentage: 0,
    annualIncome: 0
  }

  const createNewPortfolioCard = useCallback(() => {
    // TODO: Server request
    isNoPortfolios
      ? causeGentleUiTransition(() => addPortfolio(emptyPortfolioTemplate))
      : addPortfolio(emptyPortfolioTemplate)
  }, [isNoPortfolios, emptyPortfolioTemplate])

  const addPortfolio = useCallback((portfolio: Portfolio) => {
    setPortfolioList(prev => [...prev, portfolio])
  }, [])

  const deletePortfolio = useCallback((portfolio: Portfolio) => () => {
    setPortfolioList(currentPortfolioList => {
      return removeObjectFromArrayOfObjects<Portfolio>(currentPortfolioList, portfolio, "id")
    })
  }, [])

  const savePortfolioChanges = useCallback(() => {
    // TODO: Server request
  }, [])

  return {
    portfolioList,
    isNoPortfolios,
    addPortfolio,
    savePortfolioChanges,
    deletePortfolio,
    createNewPortfolioCard,
  }
}

export default usePortfolioList