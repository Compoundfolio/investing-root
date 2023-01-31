import { Transaction, BrokerageTransactionType, OrderOperation } from "src/core/types"
import { parseNumber } from "../../formaters"

const getCurrentPositionPrice = (transactionsList: Transaction[], sharesAmount: number) => {
  return transactionsList.reduce((
    prevValue: number, 
    currentTransaction: Transaction
  ) => {
    const isTrade = currentTransaction.type === BrokerageTransactionType.TRADE

    if (isTrade && currentTransaction.operation === OrderOperation.BUY) {
      return prevValue + (((parseNumber(currentTransaction.orderPrice) ?? 0) * Number(currentTransaction.orderAmount)) ?? 0)
    } 
    
    if (isTrade && currentTransaction.operation === OrderOperation.SELL) {
      return prevValue - (((parseNumber(currentTransaction.orderPrice) ?? 0) * Number(currentTransaction.orderAmount)) ?? 0)
    }

    return 0
  }, 0)
}

export default getCurrentPositionPrice