import {
  NonTradeTransaction,
  PortfolioOpenClosePositions,
  Transaction,
} from "src/core/types"

export default abstract class AbstractSideBrokerage {
  static brandName: string
  static logoPath: string

  public transactions: Transaction[] = []
  public nonTradeTransactions: NonTradeTransaction[] = []
  public assets: PortfolioOpenClosePositions = {
    openPositions: {},
    closedPositions: {},
  }

  // TODO:
  constructor(reportUnParsedData: string) {}

  setTransactions: (transactions: Transaction[]) => void
  setNonTradeTransactions: (nonTradeTransactions: NonTradeTransaction[]) => void
}
