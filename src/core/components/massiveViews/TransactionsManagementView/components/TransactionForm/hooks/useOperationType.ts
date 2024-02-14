import { MouseEvent, useEffect } from "react"
import { TransactionFormValues, TransactionType } from "../types"
import { UseFormHookHelpers } from "src/core/types"

interface IUseOperationType {
  transactionType: TransactionType
  setFieldValue: UseFormHookHelpers["setFieldValue"]
}

const FIELD_NAME = "operationType"

export const useOperationType = ({
  setFieldValue,
  transactionType,
}: IUseOperationType) => {
  useEffect(() => {
    transactionType === "TRADE" && updateOperationType("BUY")
    transactionType === "FUNDING_WITHDRAWAL" && updateOperationType("FUNDING")
  }, [transactionType])

  const updateOperationType = (
    type: TransactionFormValues[typeof FIELD_NAME]
  ) => {
    setFieldValue(FIELD_NAME, type)
  }

  const handleOperationTypeChange = (e: MouseEvent<HTMLButtonElement>) => {
    setFieldValue(FIELD_NAME, e.currentTarget.name)
  }

  return {
    handleOperationTypeChange,
  }
}
