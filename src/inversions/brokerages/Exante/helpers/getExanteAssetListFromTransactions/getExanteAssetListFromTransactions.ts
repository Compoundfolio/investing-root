import {
  Transaction,
  PortfolioOpenClosePositions,
  normalizeArrayOfObjectsBy,
  NormalizedTransactionsByTicker,
  getAllPositionsByBrokerageTransactions,
} from "@core"

const getExanteAssetListFromTransactions = (
  transactions: Transaction[]
): PortfolioOpenClosePositions => {
  if (transactions.length) {
    const transactionsByTicker = normalizeArrayOfObjectsBy<Transaction>(transactions, "ticker") as NormalizedTransactionsByTicker
    const openedAndClosedPositionsByTicker = getAllPositionsByBrokerageTransactions(transactionsByTicker)
    return openedAndClosedPositionsByTicker
  }

  return {
    openPositions: {},
    closedPositions: {},
  }
}

export default getExanteAssetListFromTransactions