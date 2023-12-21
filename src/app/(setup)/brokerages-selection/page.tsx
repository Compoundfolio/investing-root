import { Metadata } from "next"
import React from "react"
import PortfoliosManagementPage from "src/components/pages/PortfoliosManagementPage"
import { PortfolioManagerContextProvider } from "src/components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData"

export const metadata: Metadata = {
  // TODO: Common config in one file
  title: "Initial setup",
}

const BrokeragesSelection = () => {
  return (
    <PortfolioManagerContextProvider>
      <PortfoliosManagementPage />
    </PortfolioManagerContextProvider>
  )
}

export default BrokeragesSelection
