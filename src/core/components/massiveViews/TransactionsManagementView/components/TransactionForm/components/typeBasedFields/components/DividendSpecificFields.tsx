import React from "react"
import { ITypeBasedFIeldsProps } from "../types"
import { Input } from "src/core/client"

const DividendSpecificFields = ({
  values,
  errors,
  setFieldError,
  handleChange,
}: ITypeBasedFIeldsProps) => {
  return (
    <>
      <Input
        required
        name="dividendPerShare"
        type="number"
        labelText="Dividend per. share ($)"
        value={values.dividendPerShare}
        errorMessage={errors.dividendPerShare}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
      />
      <Input
        required
        name="sharesAmountForDividend"
        type="number"
        labelText="Shares amount"
        value={values.sharesAmountForDividend}
        errorMessage={errors.sharesAmountForDividend}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
      />
      <Input
        required
        name="taxPercentage"
        type="number"
        labelText="Tax (%)"
        withMb={false}
        value={values.taxPercentage}
        errorMessage={errors.taxPercentage}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
        max={100}
      />
    </>
  )
}

export default DividendSpecificFields
