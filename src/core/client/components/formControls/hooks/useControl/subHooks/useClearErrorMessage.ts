import { useEffect } from "react"
import { UseFormHookError, UseFormHookHelpers } from "src/core/types"

export interface IUseClearErrorMessage {
  value: unknown
  errorMessage?: UseFormHookError
  name: string
  setErrorMessage?: UseFormHookHelpers["setFieldError"]
}

/** Clears validation errors when user starts to type in */
export const useClearErrorMessage = ({
  value,
  name,
  errorMessage,
  setErrorMessage,
}: IUseClearErrorMessage) => {
  useEffect(() => {
    if (value && setErrorMessage && errorMessage) {
      setErrorMessage(name, "")
    }
  }, [value])
}
