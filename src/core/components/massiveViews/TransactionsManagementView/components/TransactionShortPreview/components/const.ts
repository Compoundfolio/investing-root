import { TransactionType } from "../../TransactionForm/types"

// TODO: Rid of any
export const SUMMARIES: Record<TransactionType, any> = {
  TRADE: {
    transactionValueNaming: "Trade cost:",
  },
  DIVIDEND: {
    initialValueNaming: "Dividend:",
    transactionValueNaming: "Dividend tax (15%)",
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
