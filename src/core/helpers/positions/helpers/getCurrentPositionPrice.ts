import { Transaction, BrokerageTransactionType, OrderOperation } from "src/core/types"
import { parseNumber } from "../../formaters"
import { TickerAndPrice } from "src/api/market/types"

const getCurrentPositionPrice = (
  transactionsList: Transaction[],
  marketPricesByTicker: TickerAndPrice,
) => {
  return transactionsList.reduce((
    prevValue: number, 
    currentTransaction: Transaction
  ) => {
    const isTrade = currentTransaction.type === BrokerageTransactionType.TRADE
    const assetMarketPrice = (parseNumber(marketPricesByTicker[currentTransaction.ticker]) ?? 0)

    if (isTrade && currentTransaction.operation === OrderOperation.BUY) {
      return prevValue + ((assetMarketPrice * Number(currentTransaction.orderAmount)) ?? 0)
      // TODO: Uncomment and calculate invested total price this way as well
      // return prevValue + (((parseNumber(currentTransaction.orderPrice) ?? 0) * Number(currentTransaction.orderAmount)) ?? 0)
    } 
    
    if (isTrade && currentTransaction.operation === OrderOperation.SELL) {
      return prevValue + ((assetMarketPrice * Number(currentTransaction.orderAmount)) ?? 0)
      // TODO: Uncomment and calculate invested total price this way as well
      // return prevValue - (((parseNumber(currentTransaction.orderPrice) ?? 0) * Number(currentTransaction.orderAmount)) ?? 0)
    }

    return 0
  }, 0)
}

export default getCurrentPositionPrice