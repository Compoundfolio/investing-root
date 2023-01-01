
import { Exchange, OrderOperation, Ticker } from "../assets"
import { Currency } from "../currencies"
import { StringDate } from "../dates"
import { ID } from "../ids"
import BrokerageTransactionType from "./BrokerageTransactionType"

type Transaction = {
  id: ID
  type?: BrokerageTransactionType
  time: StringDate
  currency: Currency
  ticker: Ticker
  stockExchange: Exchange
  orderAmount: number | null
  commission: number | null
  orderPrice: number | null // TODO: Type
  operation?: OrderOperation
}

export default Transaction