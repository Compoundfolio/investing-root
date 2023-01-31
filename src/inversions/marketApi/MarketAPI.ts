import { Ticker } from "@core";

export default class MarketAPI {
  static async getSharePriceByTicker(ticker: Ticker): number {
    const url = "https://api.polygon.io/v3/reference";

    const sharePrice: number = await fetch(
      `${url}/dividends?ticker=${ticker}&apiKey=${process.env.NEXT_PUBLIC_POLYGON_IO_API_KEY}`
    )
      .then(res => res.json())
      .then(({ results }) => (results[0].cash_amount * results[0].frequency));

    return sharePrice
  }
}