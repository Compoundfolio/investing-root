import { TransactionFormValues, TransactionTypeOption } from "./types"

export const transactionTypeOptions: TransactionTypeOption[] = [
  {
    id: "341353442",
    value: "TRADE",
    label: "Trade",
  },
  {
    id: "1243134f5222",
    value: "DIVIDEND",
    label: "Dividend",
  },
  {
    id: "3413a54345513",
    value: "FEE",
    label: "Fee",
  },
  {
    id: "3413a5434322153",
    value: "DIVIDEND_TAX",
    label: "Dividend Tax",
  },
  {
    id: "3413a54343253",
    value: "FUNDING_WITHDRAWAL",
    label: "Funding / Withdrawal",
  },
]

const getLocalDateAsYyyyMmDd = (): string => {
  var local = new Date()
  local.setMinutes(local.getMinutes() - local.getTimezoneOffset())
  return local.toJSON().slice(0, 10)
}

export const defaultFormValues: TransactionFormValues = {
  transactionType: transactionTypeOptions[0],
  assetSearchNameOrTicker: "",
  assignedBrokerage: null,
  operationType: "BUY",

  // Shared
  sharesAmount: "",
  fee: "",

  // Trade
  sharePrice: "",

  // Div
  dividendPerShare: "",
  taxPercentage: "",

  // Div tax
  dividendTaxValue: "",
  dividendTaxPercentage: "",

  // F-W
  transferValue: "",

  // Common
  date: getLocalDateAsYyyyMmDd(),
}
