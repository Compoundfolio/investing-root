import { TransactionFormValues } from "src/core/components/massiveViews/TransactionsManagementView/components"
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
  operationType: TransactionFormValues["operationType"]
  assetSearchNameOrTicker: string
  amount: number | ""
  price: number | ""
  fee: number | ""
  total: number
  currency: Currency
  date: string
  handlingType: TransactionHandlingType
  assignedBrokerage: TransactionFormValues["assignedBrokerage"]
  icon?: ReactNode
}

export default PortfolioTransaction
