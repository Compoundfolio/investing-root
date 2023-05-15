import { IsoDate, Ticker, normalizeArrayOfObjectsBy } from "@core";
import ehd from 'ehd-js'
import { EHDDividend, EHDEndOfDayPrice, EHDLivePrice } from "ehd-js/src/types/model";
import { TickerAndPrice, TickerPriceData } from "./types";

ehd.setToken(`${process.env.NEXT_PUBLIC_STOCKS_API_KEY}`)

// TODO: Split to different categories
const MarketAPI = {
  getSharePriceByTicker: async (ticker: Ticker): Promise<number> => {
    const { previousClose } = await ehd.livePrices({ code: ticker })
    return previousClose
  },
  /** 
   * **Docs notes:**
   * 
   * `We do not recommend using more than 15-20 tickers per request.`
  */
  getSharePriceForTickerList: async (tickerList: Ticker[]) => {
    const [ firstTicker, ...restTickers ] = tickerList    
    const stocksPriceList = await ehd.livePrices({ code: firstTicker, s: restTickers })
    return normalizeArrayOfObjectsBy<EHDLivePrice>(stocksPriceList, "code", "previousClose") as TickerAndPrice
  },
  getTickerPricesHistoryForByDatePeriod: async (
    ticker: Ticker, 
    { from, to } : { from: IsoDate, to: IsoDate }
  ) => {
    const endDayPrice: EHDEndOfDayPrice[] = await ehd.endOfDayPrice({ code: ticker, from, to })
    return normalizeArrayOfObjectsBy(endDayPrice, "date") as TickerPriceData
  },
  getDividendDataByTicker: async (ticker: Ticker): Promise<EHDDividend[]> => {
    const dividendData = await ehd.dividends({ code: ticker })
    return dividendData
  },
}

export default MarketAPI