import { 
  Transaction, 
  PortfolioAsset, 
  normalizeArrayOfObjectsBy,
} from "@core"

const getExanteAssetListFromTransactions = (
  transactions: Transaction[]
): PortfolioAsset[] => {
  if (transactions.length) {
    const transactionsByTicker = normalizeArrayOfObjectsBy<Transaction>(transactions, "ticker")
    // TODO: smth. with transactionsByTicker & return
  }

  return []
}

export default getExanteAssetListFromTransactions