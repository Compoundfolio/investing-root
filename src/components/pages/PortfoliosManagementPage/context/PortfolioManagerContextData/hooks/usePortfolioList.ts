import { Portfolio, removeObjectFromArrayOfObjects } from "@core"
import { useCallback, useMemo, useState } from "react"
import { causeGentleUiTransition } from "./helpers"
import useSelectedPortfolio from "./useSelectedPortfolio"
import { PortfolioManagerContextData } from "../context"

const usePortfolioList = (): PortfolioManagerContextData => {
  const [portfolioList, setPortfolioList] = useState<Portfolio[]>([])

  const {
    selectedPortfolioCard,
    selectPortfolioById,
    updateSelectedPortfolio,
  } = useSelectedPortfolio({
    portfolioList,
  })

  const isNoPortfolios = portfolioList.length === 0

  const emptyPortfolioTemplate = {
    id: `${Math.random()}`,
    title: "New Portfolio",
    brokerages: [],
    totalReturnValue: 0,
    totalReturnPercentage: 0,
    annualIncome: 0,
  }

  const createNewPortfolioCard = useCallback(() => {
    // TODO: Server request
    isNoPortfolios
      ? causeGentleUiTransition(() => addPortfolio(emptyPortfolioTemplate))
      : addPortfolio(emptyPortfolioTemplate)
  }, [isNoPortfolios, emptyPortfolioTemplate])

  const addPortfolio = useCallback((portfolio: Portfolio) => {
    setPortfolioList((prev) => [...prev, portfolio])
  }, [])

  const deletePortfolio = useCallback(
    (portfolio: Portfolio) => () => {
      setPortfolioList((currentPortfolioList) => {
        return removeObjectFromArrayOfObjects<Portfolio>(
          currentPortfolioList,
          portfolio,
          "id"
        )
      })
    },
    []
  )

  const deleteSelectedPortfolio = useMemo(
    () => () => {
      deletePortfolio(selectedPortfolioCard!)()
      selectPortfolioById(null)
    },
    [selectedPortfolioCard]
  )

  const savePortfolioChanges = useCallback(() => {
    // TODO: Server request
  }, [])

  return {
    portfolioList,
    isNoPortfolios,
    selectedPortfolioCard,
    selectPortfolioById,
    addPortfolio,
    savePortfolioChanges,
    deleteSelectedPortfolio,
    createNewPortfolioCard,
    updateSelectedPortfolio,
  }
}

export default usePortfolioList
