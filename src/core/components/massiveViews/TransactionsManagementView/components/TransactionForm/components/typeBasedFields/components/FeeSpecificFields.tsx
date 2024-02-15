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
        name="fee"
        type="number"
        labelText="Fee ($)"
        className="w-full"
        withMb={false}
        value={values.fee}
        errorMessage={errors.fee}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
      />
    </>
  )
}

export default FeeSpecificFields
