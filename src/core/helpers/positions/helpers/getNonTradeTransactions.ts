import { NonTradeTransaction, NonTradeTransactionTypes } from "src/core/types"

const getNonTradeTransactions = <T extends NonTradeTransactionTypes>(
  nonTradeTransactions: NonTradeTransaction[],
  nonTradeTransactionType: NonTradeTransactionTypes
) => {
  
  const foundNonTradeTransactions = nonTradeTransactions.filter(nonTradeTransaction => {
    return nonTradeTransactionType == nonTradeTransaction.type
  }) as unknown as NonTradeTransaction<T>[]

  return foundNonTradeTransactions
}

export default getNonTradeTransactions