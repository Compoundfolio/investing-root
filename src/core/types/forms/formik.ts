import { FormikConfig, FormikErrors, FormikHelpers, FormikValues } from "formik"

export type UseFormHookHelpers = FormikHelpers<FormikValues>
export type UseFormHookError =
  | string
  | string[]
  | FormikErrors<any>
  | FormikErrors<any>[]
  | undefined
export type UseFormHookConfig = FormikConfig<FormikValues>
