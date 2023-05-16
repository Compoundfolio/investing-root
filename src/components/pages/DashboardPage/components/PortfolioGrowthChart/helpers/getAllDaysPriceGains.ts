import { oldDatesFirst } from "@core";
import { format } from "date-fns";
import { MarketAPI } from "src/api/market"
import { AssetPosition, IsoDate } from 'src/core/types';

// TODO: Pass smw. else 
const getFirstBuyDate = (openPositions: AssetPosition[], closedPositions: AssetPosition[]) => {
  const allPositions = [ ...openPositions, ...closedPositions ]
  const OLDEST = 0

  // sharesAmount FOR NOW !!! ...
  allPositions.forEach(({ sharesAmount, allTradeTransactions }) => {
    allTradeTransactions
      .map(({ time }) => ({ date: format(new Date(time), "yyyy-MM-dd") }))
      .sort(oldDatesFirst)
      [OLDEST].date
  })
}

const getAllDaysPriceGains = async (
  openPositions: AssetPosition[],
  closedPositions: AssetPosition[],
  firstBuyIsoDate: IsoDate,
) => {

  // 1. We want take dateFrom to be the first asset BUY (in case till the same day it wasn't SOLD-out)
  // 1.1 + first day user could BUY 2 stocks, then to SELL 1. How to calculate then?

  // 2. In case stock sold out we don't count day gain for it (equals 0 that days), 
  // but if in some day it was bought - calculate according the rules from point 1.

  // Issue: TODO: How API will return closePrice for current day in case the exchange still works

  const priceHistoryRequests = openPositions.map(({ ticker, allTradeTransactions }) => {
    allTradeTransactions

    return MarketAPI.getTickerPricesHistoryForByDatePeriod(
      ticker, 
      { 
        from: firstBuyIsoDate, 
        to: format(new Date(), "yyyy-MM-dd") 
      }
    )
  });

  /** Note: we have no idea about the order in result array */
  const priceHistories = await Promise.all(priceHistoryRequests)


}

export default getAllDaysPriceGains