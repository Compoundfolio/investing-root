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
    const transactionsByTicker: NormalizedTransactionsByTicker = normalizeArrayOfObjectsBy<Transaction>(transactions, "ticker")
    const openedAndClosedPositionsByTicker = getAllPositionsByBrokerageTransactions(transactionsByTicker)
    return openedAndClosedPositionsByTicker
  }

  return {}
}

export default getExanteAssetListFromTransactions