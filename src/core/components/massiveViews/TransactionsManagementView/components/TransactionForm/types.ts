import { Exchange, Ticker } from "src/core/types";

export type Asset = {
  transactionTotal: number,
  title: string,
  ticker: Ticker,
  exchange: Exchange,
  exchangeCountry: string,
}