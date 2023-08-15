import { useContext } from "react"
import PortfolioManagerContext, { PortfolioManagerContextData } from "./context"

const usePortfolioManagerContext = (): PortfolioManagerContextData => {
  const context = useContext(PortfolioManagerContext)
  return context
}

export default usePortfolioManagerContext
