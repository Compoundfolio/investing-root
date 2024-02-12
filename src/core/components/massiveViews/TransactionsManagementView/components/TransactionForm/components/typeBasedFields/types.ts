import { FormikErrors, FormikValues } from "formik"
import { UseFormHookHelpers } from "src/core/types"
import { TransactionFormValues, TransactionType } from "../../types"

export interface ITypeBasedFIeldsProps {
  values: TransactionFormValues
  errors: FormikErrors<TransactionFormValues>
  setFieldError: UseFormHookHelpers["setFieldError"]
  handleChange: FormikValues["handleChange"]
}

interface ITypeBasedFIeldsComponentProps {
  isTransactionTypeOf: (
    transactionType: TransactionType | TransactionType[]
  ) => boolean
}

export interface ITypeBasedFIelds
  extends ITypeBasedFIeldsProps,
    ITypeBasedFIeldsComponentProps {}
