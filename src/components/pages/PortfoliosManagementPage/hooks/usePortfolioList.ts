import { Portfolio } from "@core"
import { useState } from "react"

const usePortfolioList = () => {
  const [ portfolioList, setPortfolioList ] = useState<Portfolio[]>([])

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

  return {
    portfolioList,
    addPortfolio,
  }
}

export default usePortfolioList