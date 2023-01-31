import { Transaction, BrokerageTransactionType, OrderOperation } from "src/core/types"
import { parseNumber } from "../../formaters"

const getSharesAmount = (transactionsList: Transaction[]) => transactionsList.reduce((
  prevValue: number, 
  currentTransaction: Transaction
) => {
  const isTrade = currentTransaction.type === BrokerageTransactionType.TRADE
  if (isTrade && currentTransaction.operation === OrderOperation.BUY) {
    return prevValue + (parseNumber(currentTransaction.orderAmount) ?? 0)
  } 

  if (isTrade && currentTransaction.operation === OrderOperation.SELL) {
    return prevValue - (parseNumber(currentTransaction.orderAmount) ?? 0)
  }

  return 0
}, 0)

export default getSharesAmount