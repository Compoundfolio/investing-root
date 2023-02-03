import { 
  Transaction, 
  PortfolioAsset, 
  normalizeArrayOfObjectsBy,
  NormalizedTransactionsByTicker,
  getAllPositionsByBrokerageTransactions,
} from "@core"

const getExanteAssetListFromTransactions = (
  transactions: Transaction[]
): PortfolioAsset | {} => {
  if (transactions.length) {
    const transactionsByTicker = normalizeArrayOfObjectsBy<Transaction>(transactions, "ticker") as NormalizedTransactionsByTicker
    const openedAndClosedPositionsByTicker = getAllPositionsByBrokerageTransactions(transactionsByTicker)
    return openedAndClosedPositionsByTicker
  }

  return {}
}

export default getExanteAssetListFromTransactions