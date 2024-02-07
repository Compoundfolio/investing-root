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
    id: "3413a5434553",
    value: "COMMISSION",
    label: "Commission",
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
  operationType: "BUY",
  amount: 0,
  price: 0,
  fee: 0,
  date: "",
}
