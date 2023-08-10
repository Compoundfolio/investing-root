import { Portfolio } from "@core"
import { useCallback, useEffect, useState } from "react"

interface IUseSelectedPortfolio {
  portfolioList: Portfolio[]
}

const useSelectedPortfolio = ({
  portfolioList
}: IUseSelectedPortfolio) => {
  const [ selectedPortfolioCard, setSelectedPortfolioCard ] = useState<Portfolio>()

  /** Selects the portfolio, makes it active in portfolio management area */
  const selectPortfolioById = useCallback((id: string) => {
    const portfolioToSelect = portfolioList.find(portfolio => portfolio.id === id)
    if (portfolioToSelect && portfolioToSelect.id !== selectedPortfolioCard?.id) {
      setSelectedPortfolioCard(portfolioToSelect)
    }
  }, [portfolioList, selectedPortfolioCard])

  // Automatically select the portfolio, if it's the only one
  useEffect(() => {
    if (portfolioList.length === 1) {
      setSelectedPortfolioCard(portfolioList[0])
    }
  }, [portfolioList])

  return {
    selectedPortfolioCard,
    selectPortfolioById,
  }
}

export default useSelectedPortfolio