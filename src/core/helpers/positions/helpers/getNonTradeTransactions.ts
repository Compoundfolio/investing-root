import { NonTradeTransaction, NonTradeTransactionTypes } from "src/core/types"

const getNonTradeTransactions = <T extends NonTradeTransactionTypes>(
  nonTradeTransactions: NonTradeTransaction[],
  nonTradeTransactionType: NonTradeTransactionTypes | NonTradeTransactionTypes[]
) => {
  
  const foundNonTradeTransactions = nonTradeTransactions.filter(nonTradeTransaction => {
    return nonTradeTransactionType instanceof Array
      ? nonTradeTransactionType.includes(nonTradeTransaction.type)
      : nonTradeTransactionType == nonTradeTransaction.type
  }) as unknown as NonTradeTransaction<T>[]

  return foundNonTradeTransactions
}

export default getNonTradeTransactions