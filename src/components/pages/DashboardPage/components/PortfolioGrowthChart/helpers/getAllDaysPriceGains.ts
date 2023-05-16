import { format } from "date-fns";
import { MarketAPI } from "src/api/market"
import { AssetPosition, IsoDate } from 'src/core/types';

const getAllDaysPriceGains = async (
  openPositions: AssetPosition[],
  closedPositions: AssetPosition[],
  // firstBuyIsoDate: IsoDate,
) => {

  // 1. We want take dateFrom to be the first asset BUY (in case till the same day it wasn't SOLD-out)
  // 1.1 + first day user could BUY 2 stocks, then to SELL 1. How to calculate then?

  // 2. Range must be 

  // 3. 

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