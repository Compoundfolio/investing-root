import { TransactionSummary } from "./types"

interface IGetSummaryNamings {
  dividendTaxPercentage?: number
}

export const getSummaryNamings = ({
  dividendTaxPercentage,
}: IGetSummaryNamings): TransactionSummary => ({
  TRADE: {
    transactionValueNaming: "Trade cost:",
  },
  DIVIDEND: {
    initialValueNaming: "Dividend:",
    transactionValueNaming: `Dividend tax (${dividendTaxPercentage}%):`,
    subResultNaming: "Pure dividend:",
    resultNaming: "New cash value:",
  },
  DIVIDEND_TAX: {
    transactionValueNaming: `Dividend tax (${dividendTaxPercentage}%):`,
  },
  FEE: {
    transactionValueNaming: "Fee:",
  },
  FUNDING_WITHDRAWAL: {
    transactionValueNaming: "Funding amount:",
  },
})
