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

export const defaultFormValues: TransactionFormValues = {
  transactionType: transactionTypeOptions[0],
  assetSearchNameOrTicker: "",
  assignedBrokerage: null,
  operationType: "BUY",
  amount: 0,
  price: 0,
  fee: 0,
  date: "",
}
