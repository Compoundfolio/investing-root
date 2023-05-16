import { OrderOperation, Transaction } from "@core";
import { currentMarketAssetsPrices } from "src/core/helpers/positions/getAllPositionsByBrokerageTransactions";

const getAssetMarketGain = (
  ticker: Transaction["ticker"],
  orderPrice: Transaction["orderPrice"],
  orderAmount: Transaction["orderAmount"],
): Transaction["gain"] => {
  // TODO: Add MarketAPI instead of hard-code
  const marketPrice = currentMarketAssetsPrices[ticker] ?? orderPrice
  return (marketPrice - orderPrice) * orderAmount
}

function formatBrokerageTradeMarketGains(
  parsedTradeTransactions: Transaction[], 
  // setTransactions: AbstractSideBrokerage["setTransactions"]
): Transaction[] {
  return parsedTradeTransactions.map(tradeTransaction => ({
    ...tradeTransaction,
    gain: tradeTransaction.operation === OrderOperation.BUY 
      ? getAssetMarketGain(
        tradeTransaction.ticker,
        tradeTransaction.orderPrice,
        tradeTransaction.orderAmount,
      )
      : tradeTransaction.gain
  }))
}

export default formatBrokerageTradeMarketGains