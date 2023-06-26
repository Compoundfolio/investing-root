import {
  Dividends,
  NonTradeTransaction,
  PortfolioOpenClosePositions,
  Transaction,
} from "src/core/types"
import {
  formatBrokerageTradeMarketGains,
  formatExanteCsvTransactions,
  getExanteAssetListFromTransactions,
} from "./helpers"
import AbstractSideBrokerage from "../AbstractSideBrokerage"

class ExanteBrokerage implements AbstractSideBrokerage {
  transactions: Transaction[] = []
  nonTradeTransactions: NonTradeTransaction[] = []
  assets: PortfolioOpenClosePositions
  taxedDividends: Dividends = {}

  static brandName = "Exante"
  static logoPath =
    "https://exante.eu/static/i/dest/website/components/logos/flat_icon_1024x1024.png"

  constructor(reportUnParsedData: string) {
    const { parsedTradeTransactions, parsedNonTradeTransactions } =
      formatExanteCsvTransactions(reportUnParsedData)

    // TODO: Pass smw. else?
    this.transactions = formatBrokerageTradeMarketGains(parsedTradeTransactions)

    this.nonTradeTransactions = parsedNonTradeTransactions
    this.assets = getExanteAssetListFromTransactions(
      this.transactions,
      this.nonTradeTransactions
    )
  }

  setTransactions(transactions: Transaction[]) {
    this.transactions = transactions
  }

  setNonTradeTransactions(nonTradeTransactions: NonTradeTransaction[]) {
    this.nonTradeTransactions = nonTradeTransactions
  }
}

export default ExanteBrokerage
