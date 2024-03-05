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

  const handlePortfolioCreate = (newPortfolio: Portfolio) => {
    addPortfolio(newPortfolio)
    selectPortfolioById(newPortfolio.id)
  }

  const createNewPortfolioCard = useCallback(
    (newPortfolio: Portfolio) => {
      isNoPortfolios
        ? causeGentleUiTransition(() => handlePortfolioCreate(newPortfolio))
        : handlePortfolioCreate(newPortfolio)
    },
    [isNoPortfolios, handlePortfolioCreate]
  )

  const setPortfolios = useCallback((portfolios: Portfolio[]) => {
    setPortfolioList(portfolios)
  }, [])

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
    setPortfolios,
    selectPortfolioById,
    addPortfolio,
    savePortfolioChanges,
    deleteSelectedPortfolio,
    createNewPortfolioCard,
    updateSelectedPortfolio,
  }
}

export default usePortfolioList
