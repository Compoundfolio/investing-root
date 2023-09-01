"use client"

import { ReactNode } from "react"
import PortfolioManagerContext from "./context"
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
