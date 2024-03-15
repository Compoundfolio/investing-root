import { useCallback } from "react"
import Services from "src/services"
import { usePortfolioManagerContext } from "../../../context/PortfolioManagerContextData"

const useCreatePortfolio = () => {
  const { isNoPortfolios, createNewPortfolioCard } =
    usePortfolioManagerContext()

  const { mutate } = Services.User.Portfolios.useCreate(createNewPortfolioCard)

  const createPortfolio = useCallback(() => {
    mutate({ data: { label: "New Portfolio" } })
  }, [])

  return {
    isNoPortfolios,
    createPortfolio,
  }
}

export default useCreatePortfolio
