import { Ticker } from "@core"
import { SymbolId } from "../helpers"

type ExanteCsvNonTradeTransaction = {
  "Transaction ID"?: string
  "Account ID"?: string
  "Symbol ID"?: SymbolId
  ISIN: "None" | string
  "Operation Type"?:
    | "US TAX"
    | "DIVIDEND"
    | "TAX"
    | "COMMISSION"
    | "TRADE"
    | "FUNDING/WITHDRAWAL"
  When: string // TODO: Add type for 2023-02-09 09:32:55 -like dates
  Sum: number
  Asset: Ticker | SymbolId
  "EUR equivalent"?: number
  Comment: "None" | string
  UUID: string
  "Parent UUID": string
}

export default ExanteCsvNonTradeTransaction
