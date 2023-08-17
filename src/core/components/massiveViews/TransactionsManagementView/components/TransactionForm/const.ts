import { Option } from "src/core/types"

// TODO: Get from server
export const assetTypes: Option[] = [
  {
    id: '341353442',
    value: 'PUBLICLY_TRADED',
    label: 'Publicly traded (Stocks, Bonds, ETFs, etc.)',
  },
  {
    id: '3413a543453',
    value: 'FEE',
    label: 'Fee',
  },
  {
    id: '34543s2232',
    value: 'TAX',
    label: 'Tax',
  },
  {
    id: '1243134f5222',
    value: 'DIVIDEND',
    label: 'Dividend',
  },
  {
    id: '1243133fa4544',
    value: 'BOND_COUPON',
    label: 'Bond Coupon',
  },
  {
    id: '1a243132342',
    value: 'SAVINGS_ACCOUNT_DISTRIBUTION',
    label: 'Savings Account Distribution',
  },
]

export const defaultFormValues = {
  assetType: assetTypes[0],
  assetSearchNameOrTicker: "",
  operationType: "buy",
  amount: "",
  price: "",
  fee: "",
  date: "",
}