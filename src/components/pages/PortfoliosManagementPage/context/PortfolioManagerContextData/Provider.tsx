"use client"

import { ReactNode, useMemo } from "react"
import PortfolioManagerContext, { PortfolioManagerContextData } from "./context"
import { usePortfolioList } from "./hooks"

interface IWaiverContextProvider {
  children: ReactNode
}

export const PortfolioManagerContextProvider = ({
  children,
}: IWaiverContextProvider) => {
  const context = usePortfolioList()

  return (
    <PortfolioManagerContext.Provider value={context}>
      {children}
    </PortfolioManagerContext.Provider>
  )
}
