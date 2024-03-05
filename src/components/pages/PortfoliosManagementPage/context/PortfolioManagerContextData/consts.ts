import { Portfolio } from "@core"

export const emptyPortfolioTemplate: Portfolio = {
  id: `${Math.random()}`,
  title: "New Portfolio",
  brokerages: [],
  totalReturnValue: 0,
  totalReturnPercentage: 0,
  annualIncome: 0,
  transactions: [],
}
