import { SymbolId } from "../helpers"
import ExanteSide from "./ExanteSide"

type ExanteCsvTransaction = {
  "Time"?: string,
  "Account ID"?: string,
  "Side"?: ExanteSide,
  "Symbol ID"?: SymbolId, 
  "ISIN"?: string,
  "Type"?: string,
  "Price"?: string,
  "Currency"?: "USD" | "EUR" | string,
  "Quantity"?: string,
  "Commission"?: string,
  "Commission Currency"?: string,
  "P&L"?: string,
  "Traded Volume"?: string,
  "Order Id"?: string,
  "Order pos"?: string,
  "Value Date"?: string,
  "Unique Transaction Identifier (UTI)"?: string,
  "Trade type"?: "TRADE" | string
}

export default ExanteCsvTransaction