import { Portfolio } from "@core"
import { useCallback, useEffect, useState } from "react"

interface IUseSelectedPortfolio {
  portfolioList: Portfolio[]
}

const useSelectedPortfolio = ({
  portfolioList
}: IUseSelectedPortfolio) => {
  const [ selectedPortfolioCard, setSelectedPortfolioCard ] = useState<Portfolio | null>(null)

  /** Selects the portfolio, makes it active in portfolio management area */
  const selectPortfolioById = useCallback((id: string | null) => {
    // Deselect
    if (id === null) {
      setSelectedPortfolioCard(id)
      return
    }

    // Select
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
    // const lastAddedPortfolio = portfolioList.at(-1)
    // if (lastAddedPortfolio) {
    //   setSelectedPortfolioCard(lastAddedPortfolio)
    // }
  }, [portfolioList.length])

  return {
    selectedPortfolioCard,
    selectPortfolioById,
    updateSelectedPortfolio: setSelectedPortfolioCard,
  }
}

export default useSelectedPortfolio