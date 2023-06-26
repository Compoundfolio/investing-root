import { Exchange, Ticker, Currency, ID } from "src/core/types"
import NonTradeTransactionTypes from "./NonTradeTransactionTypes"

type NonTrade<OperationType> = {
  id: ID
  parentId: ID
  comment: string
  type: OperationType
  time: string
  currency: Currency | string
  ticker: Ticker | null
  stockExchange: Exchange | null
  price: number
}

type NonTradeTransaction<T extends NonTradeTransactionTypes | void = void> =
  T extends NonTradeTransactionTypes
    ? NonTrade<Extract<NonTradeTransactionTypes, T>>
    : NonTrade<NonTradeTransactionTypes> // Default

export default NonTradeTransaction
