import { TransactionType } from "../../TransactionForm/types"

type Naming = `${string}:`

export type TransactionSummary = Record<
  TransactionType,
  {
    transactionValueNaming?: Naming
    initialValueNaming?: Naming
    subResultNaming?: Naming
    resultNaming?: Naming
  }
>
