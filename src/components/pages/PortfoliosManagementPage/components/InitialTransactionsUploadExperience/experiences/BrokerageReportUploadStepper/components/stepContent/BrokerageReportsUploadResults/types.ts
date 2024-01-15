import { ID } from "@core"
import { RatioChartDataSet } from "src/core/components/charts/RatioChart/types"

export type TransactionCategory = string | null

export type TransactionsStats = {
  [K in string]: {
    id: ID
    brokerageName: string
    transactionsCategories: RatioChartDataSet
  }
}
