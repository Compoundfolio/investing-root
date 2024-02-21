import { Exchange, Ticker } from "../assets"
import { Option } from "../common"
import { Currency } from "../currencies"
import { ID } from "../ids"
import TransactionHandlingType from "./TransactionHandlingType"
import { ReactNode } from "react"

type PortfolioTransaction = {
  id: ID
  title: string
  ticker: Ticker
  exchange: Exchange
  exchangeCountry: string
  transactionType: Option
  operationType: "BUY" | "SELL"
  assetSearchNameOrTicker: string
  amount: number | ""
  price: number | ""
  fee: number | ""
  total: number
  currency: Currency
  date: string
  handlingType: TransactionHandlingType
  assignedBrokerage: any // TODO
  icon?: ReactNode
}

export default PortfolioTransaction
