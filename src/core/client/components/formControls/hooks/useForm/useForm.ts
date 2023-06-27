import { useFormik, FormikValues, FormikConfig } from 'formik'
import { AtLeastOne } from 'src/core/types'

/** Reusable, initial forms setup */
const commonFormsConfig = <
  TFormValues extends FormikValues = FormikValues
>(): AtLeastOne<FormikConfig<TFormValues>> => ({
  validateOnChange: false,
  validateOnBlur: false,
  validateOnMount: false,
  enableReinitialize: false,
})

/** Abstraction hook to handle forms */
const useForm = <TFormValues extends FormikValues = FormikValues>({
  validationSchema,
  initialValues,
  onSubmit,
  ...restProps
}: FormikConfig<TFormValues>) => {

  const setup: FormikConfig<TFormValues> = {
    validationSchema,
    initialValues,
    onSubmit,
    ...commonFormsConfig<TFormValues>(),
    ...restProps,
  }

  return useFormik<TFormValues>(setup)
}

export default useForm
