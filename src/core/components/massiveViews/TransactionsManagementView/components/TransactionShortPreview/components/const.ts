import { TransactionSummary } from "./types"

export const SUMMARIES_NAMINGS: TransactionSummary = {
  TRADE: {
    transactionValueNaming: "Trade cost:",
  },
  DIVIDEND: {
    initialValueNaming: "Dividend:",
    transactionValueNaming: "Dividend tax (15%):",
    subResultNaming: "Pure dividend:",
  },
  DIVIDEND_TAX: {
    transactionValueNaming: "Dividend Tax:",
  },
  FEE: {
    transactionValueNaming: "Fee:",
  },
  FUNDING_WITHDRAWAL: {
    transactionValueNaming: "Funding amount:",
  },
}
