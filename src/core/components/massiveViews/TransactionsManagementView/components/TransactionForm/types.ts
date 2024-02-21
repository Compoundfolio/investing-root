import { Exchange, Option, Ticker } from "src/core/types"

export type Asset = {
  transactionTotal: number
  title: string
  ticker: Ticker
  exchange: Exchange
  exchangeCountry: string
}

export type TransactionType =
  | "TRADE"
  | "DIVIDEND"
  | "DIVIDEND_TAX"
  | "FEE"
  | "FUNDING_WITHDRAWAL"

export type TransactionTypeOption = Pick<Option, "id" | "label"> & {
  value: TransactionType
}

export type TransactionFormValues = {
  transactionType: TransactionTypeOption
  assetSearchNameOrTicker: string
  assignedBrokerage: Option | null
  operationType: ("BUY" | "SELL") | ("FUNDING" | "WITHDRAWAL")
  sharePrice: number | ""
  fee: number | ""
  feeTransactionValue: number | ""
  sharesAmountForTrade: number | ""
  sharesAmountForDividend: number | ""
  date: string
  dividendPerShare: number | ""
  taxPercentage: number | ""
  dividendTaxValue: number | ""
  dividendTaxPercentage: number | ""
  transferValue: number | ""
}
