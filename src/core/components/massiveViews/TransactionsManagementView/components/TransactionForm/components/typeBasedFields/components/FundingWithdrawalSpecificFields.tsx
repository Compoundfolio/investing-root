import React from "react"
import { ITypeBasedFIeldsProps } from "../types"
import { Input } from "src/core/client"

const FundingWithdrawalSpecificFields = ({
  values,
  errors,
  setFieldError,
  handleChange,
}: ITypeBasedFIeldsProps) => {
  return (
    <>
      <Input
        required
        name="transferValue"
        type="number"
        labelText="Transfer value ($)"
        withMb={false}
        value={values.transferValue}
        errorMessage={errors.transferValue}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
      />
    </>
  )
}

export default FundingWithdrawalSpecificFields
