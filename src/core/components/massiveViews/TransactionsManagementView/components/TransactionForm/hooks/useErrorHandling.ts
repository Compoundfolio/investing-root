import { useEffect } from "react"
import { UseFormHookHelpers } from "src/core/types"
import { TransactionType } from "../types"

interface IUseErrorHandling {
  isEditMode: boolean
  transactionType: TransactionType
  setErrors: UseFormHookHelpers["setErrors"]
}

export const useErrorHandling = ({
  isEditMode,
  transactionType,
  setErrors,
}: IUseErrorHandling) => {
  const clearAllFormErrors = () => setErrors({})

  useEffect(() => {
    clearAllFormErrors()
  }, [isEditMode, transactionType])
}
