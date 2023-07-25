import { Portfolio, removeObjectFromArrayOfObjects } from "@core"
import { useState } from "react"

const usePortfolioList = () => {
  const [ portfolioList, setPortfolioList ] = useState<Portfolio[]>([])

  const addPortfolio = (portfolio: Portfolio) => {
    setPortfolioList(prev => [...prev, portfolio])
  }

  const deletePortfolio = (portfolio: Portfolio) => {
    setPortfolioList(currentPortfolioList => {
      return removeObjectFromArrayOfObjects<Portfolio>(currentPortfolioList, portfolio, "id")
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