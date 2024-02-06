import { Option } from "src/core/types"

// TODO: Get from server
export const assetTypes: Option[] = [
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

export const defaultFormValues = {
  transactionType: assetTypes[0],
  assetSearchNameOrTicker: "",
  operationType: "BUY",
  amount: 0,
  price: 0,
  fee: 0,
  date: "",
}
