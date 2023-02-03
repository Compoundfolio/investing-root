import { Ticker, normalizeArrayOfObjectsBy } from "@core";
import ehd from 'ehd-js'
import { EHDLivePrice } from "ehd-js/src/types/model";
import { TickerAndPrice } from "./types";

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
}

export default MarketAPI