import { FormikConfig, FormikValues, useFormik } from "formik"

interface IUseForm {
  validation: object
  initialValues: object
  onSubmit: FormikConfig<FormikValues>['onSubmit'] // TODO: Reuse
}

/** Formik's useFormik wrapper  */
const useForm = ({
  validation,
  initialValues,
  onSubmit
}: IUseForm) => {
  return useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    validateOnMount: false,
    enableReinitialize: false,
    validationSchema: validation,
    initialValues,
    onSubmit,
  })
}

export default useForm