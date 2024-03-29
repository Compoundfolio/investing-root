import React from "react"
import { ITypeBasedFIeldsProps } from "../types"
import { Input } from "src/core/client"

const FeeSpecificFields = ({
  values,
  errors,
  setFieldError,
  handleChange,
}: ITypeBasedFIeldsProps) => {
  return (
    <>
      <Input
        required
        name="feeTransactionValue"
        type="number"
        labelText="Fee ($)"
        className="w-full"
        value={values.feeTransactionValue}
        errorMessage={errors.feeTransactionValue}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
      />
    </>
  )
}

export default FeeSpecificFields
