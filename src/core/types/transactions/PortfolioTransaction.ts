import { Exchange, Ticker } from "../assets"
import { Option } from "../common"
import { Currency } from "../currencies"
import { ID } from "../ids"
import TransactionHandlingType from "./TransactionHandlingType"

type PortfolioTransaction = {
  id: ID
  title: string
  ticker: Ticker
  exchange: Exchange
  exchangeCountry: string
  transactionType: Option
  operationType: "BUY" | "SELL"
  assetSearchNameOrTicker: string
  amount: number
  price: number
  fee: number
  total: number
  currency: Currency
  date: string
  handlingType: TransactionHandlingType
}

export default PortfolioTransaction
