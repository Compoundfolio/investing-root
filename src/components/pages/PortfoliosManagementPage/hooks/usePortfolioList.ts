import { Portfolio, removeObjectFromArrayOfObjects } from "@core"
import { useCallback, useState } from "react"

const usePortfolioList = () => {
  const [ portfolioList, setPortfolioList ] = useState<Portfolio[]>([])

  const addPortfolio = useCallback((portfolio: Portfolio) => {
    setPortfolioList(prev => [...prev, portfolio])
  }, [])

  const deletePortfolio = useCallback((portfolio: Portfolio) => {
    setPortfolioList(currentPortfolioList => {
      return removeObjectFromArrayOfObjects<Portfolio>(currentPortfolioList, portfolio, "id")
    })
  }, [])

  const savePortfolioChanges = useCallback(() => {
    // TODO: Server request
  }, [])

  return {
    portfolioList,
    addPortfolio,
    savePortfolioChanges,
    deletePortfolio,
  }
}

export default usePortfolioList