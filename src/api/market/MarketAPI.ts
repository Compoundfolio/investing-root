import { Ticker } from "@core";
import { Api } from "src/inversions";

const MarketAPI = {
  getSharePriceByTicker: async (ticker: Ticker) => {
    const url = "https://api.polygon.io/v3/reference";

    const sharePrice: number = await Api.GET({
      url: `${url}/dividends?ticker=${ticker}&apiKey=${process.env.NEXT_PUBLIC_POLYGON_IO_API_KEY}`
    })    

    return sharePrice
  }
}

export default MarketAPI