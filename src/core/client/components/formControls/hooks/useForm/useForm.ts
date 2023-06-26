import { useFormik } from "formik"
import { UseFormHookConfig } from "src/core/types"

interface IUseForm {
  validation: object
  initialValues: object
  onSubmit: UseFormHookConfig["onSubmit"] // TODO: Reuse
}

/** Formik's useFormik wrapper  */
const useForm = ({ validation, initialValues, onSubmit }: IUseForm) => {
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
