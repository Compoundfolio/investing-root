
import { OrderAssetType, StockExchange, Ticker } from "../assets"
import { Currency } from "../currencies"
import { StringDate } from "../dates"
import { ID } from "../ids"
import BrokerageTransactionType from "./BrokerageTransactionType"

type Transaction = {
  id: ID
  type: BrokerageTransactionType
  time: StringDate
  currency: Currency
  orderAssetType?: OrderAssetType
  orderAmount?: number
  ticker: Ticker
  stockExchange: StockExchange
  commission: number
  orderPrice: number
}

export default Transaction