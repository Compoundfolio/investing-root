import React from "react"
import { PortfolioCardStatsItem } from "./components"

interface IPortfolioStatsPreview {
  totalReturnPercentage: number
  annualIncome: number
}

const PortfolioStatsPreview = ({
  totalReturnPercentage = 0,
  annualIncome = 0,
}: IPortfolioStatsPreview) => {
  return (
    <section className="flex flex-col items-center gap-2">
      <PortfolioCardStatsItem
        title="Total return"
        value={`${totalReturnPercentage}%`}
      />
      <PortfolioCardStatsItem
        title="Annual income"
        value={`$${annualIncome}`}
      />
    </section>
  )
}

export default PortfolioStatsPreview
