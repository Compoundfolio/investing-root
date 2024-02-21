import { TransactionFormValues } from "../../types"

export type TransactionNumberCalcFn = (values: TransactionFormValues) => {
  transactionTotal: number
  initialSummaryValue?: number
  transactionSubResult?: number
}
