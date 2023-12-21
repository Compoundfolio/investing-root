import { Portfolio } from "@core"
import { ChangeEvent, useState, useEffect } from "react"

const usePortfolioName = (
  updateSelectedPortfolio: React.Dispatch<React.SetStateAction<Portfolio | null>>,
  selectedPortfolioCard: Portfolio | null,
) => {
  const [ newPortfolioName, setNewPortfolioName ] = useState<string>("")

  useEffect(() => {
    selectedPortfolioCard && setNewPortfolioName(selectedPortfolioCard?.title)
  }, [selectedPortfolioCard?.id])

  const savePortfolioTitleChange = () => {
    updateSelectedPortfolio((prev) => ({
      ...prev!,
      title: newPortfolioName,
    } satisfies Portfolio))
    setNewPortfolioName("")
  }

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPortfolioName(e.target.value)
  }

  return {
    newPortfolioName,
    handleTitleChange,
    savePortfolioTitleChange,
  }
}

export default usePortfolioName