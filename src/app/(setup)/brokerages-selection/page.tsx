import { PortfoliosManagementPage } from "@srcComponents"
import { Metadata } from "next"
import React from "react"
import { PortfolioManagerContextProvider } from "src/components/pages/PortfoliosManagementPage/context/PortfolioManagerContextData"

export const metadata: Metadata = {
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
