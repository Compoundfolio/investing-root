import {
  Transaction,
  PortfolioOpenClosePositions,
  normalizeArrayOfObjectsBy,
  NormalizedTransactionsByTicker,
  getAllPositionsByBrokerageTransactions,
  NonTradeTransaction,
} from "@core"

const getExanteAssetListFromTransactions = (
  tradeTransactions: Transaction[],
  nonTradeTransactions: NonTradeTransaction[],
): PortfolioOpenClosePositions => {
  if (tradeTransactions.length ) {
    const tradeTransactionsNormalizedByTicker = normalizeArrayOfObjectsBy<Transaction>(
      tradeTransactions, 
      "ticker"
    ) as NormalizedTransactionsByTicker    

    const nonTradeTransactionsNormalizedByTicker = normalizeArrayOfObjectsBy<NonTradeTransaction>(
      nonTradeTransactions, 
      "ticker",
    ) as NormalizedTransactionsByTicker<NonTradeTransaction>
    
    const openedAndClosedPositionsByTicker = getAllPositionsByBrokerageTransactions(
      tradeTransactionsNormalizedByTicker, 
      nonTradeTransactionsNormalizedByTicker,
    )

    return openedAndClosedPositionsByTicker
  }

  return {
    openPositions: {},
    closedPositions: {},
  }
}

export default getExanteAssetListFromTransactions