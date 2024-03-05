import { useCallback } from "react"
import { useCreateUserPortfolio } from "src/services"
import { usePortfolioManagerContext } from "../../../context/PortfolioManagerContextData"

const useCreatePortfolio = () => {
  const { isNoPortfolios, createNewPortfolioCard } =
    usePortfolioManagerContext()

  const { mutate } = useCreateUserPortfolio(createNewPortfolioCard)

  const createPortfolio = useCallback(() => {
    mutate({ data: { label: "New Portfolio" } })
  }, [])

  return {
    isNoPortfolios,
    createPortfolio,
  }
}

export default useCreatePortfolio
