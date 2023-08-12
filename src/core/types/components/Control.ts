import { ChangeEventHandler } from "react"
import { IReactChildren } from "src/core/types"
import { UseFormHookError, UseFormHookHelpers } from "../forms/formik"

interface Control extends IReactChildren {
  value: string
  name: string
  labelText?: string
  placeholder?: string
  helpText?: string
  errorMessage?: UseFormHookError
  required?: boolean
  autofocus?: boolean
  withMb?: boolean
  onChange: ChangeEventHandler<unknown>
  setErrorMessage?: UseFormHookHelpers["setFieldError"]
}

export default Control
