"use client"

import { IReactChildren } from "src/core/types"
import usePortfolioManagerContext from "../../context/PortfolioManagerContextData/hook"

const MainAreaWrapper = ({ children }: IReactChildren) => {
  const { selectedPortfolioCard } = usePortfolioManagerContext()
  return selectedPortfolioCard?.id ? children : null
}

export default MainAreaWrapper
