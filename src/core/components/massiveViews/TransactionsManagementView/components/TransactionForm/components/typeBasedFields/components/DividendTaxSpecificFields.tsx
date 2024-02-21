import React from "react"
import { ITypeBasedFIeldsProps } from "../types"
import { Input } from "src/core/client"

const DividendTaxSpecificFields = ({
  values,
  errors,
  setFieldError,
  handleChange,
}: ITypeBasedFIeldsProps) => {
  return (
    <>
      <Input
        required
        name="dividendTaxValue"
        type="number"
        labelText="Tax ($)"
        value={values.dividendTaxValue}
        errorMessage={errors.dividendTaxValue}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
      />
      <Input
        required
        name="dividendTaxPercentage"
        type="number"
        labelText="Tax Rate (%)"
        value={values.dividendTaxPercentage}
        errorMessage={errors.dividendTaxPercentage}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
        max={100}
      />
    </>
  )
}

export default DividendTaxSpecificFields
