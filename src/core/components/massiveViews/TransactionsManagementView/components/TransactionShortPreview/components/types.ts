import { TransactionType } from "../../TransactionForm/types"

export type TransactionSummary = Record<
  TransactionType,
  {
    transactionValueNaming?: `${string}:`
    initialValueNaming?: `${string}:`
    subResultNaming?: `${string}:`
  }
>
