import { NormalizedTransactionsByTicker, Ticker } from "src/core/types"
import getSharesAmount from "./getSharesAmount"

const getTickersListWithOpenPosition = (
  transactionsByTicker: NormalizedTransactionsByTicker
): Ticker[] => {
  let tickers: Ticker[] = []

  Object.entries(transactionsByTicker).forEach(([ ticker, transactions ]) => {
    if (getSharesAmount(transactions) > 0) {
      tickers.push(ticker as Ticker)
    }
  });
  
  return tickers
}

export default getTickersListWithOpenPosition