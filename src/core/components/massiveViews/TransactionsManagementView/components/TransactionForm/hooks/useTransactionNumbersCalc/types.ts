import { TransactionFormValues } from "../../types"

export type TransactionNumberCalcFn = (values: TransactionFormValues) => {
  transactionTotal: number
  transactionSubResult?: number
}
