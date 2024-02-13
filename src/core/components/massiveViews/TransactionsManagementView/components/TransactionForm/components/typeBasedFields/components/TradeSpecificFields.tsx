import React from "react"
import { ITypeBasedFIeldsProps } from "../types"
import { Input } from "src/core/client"

const TradeSpecificFields = ({
  values,
  errors,
  setFieldError,
  handleChange,
}: ITypeBasedFIeldsProps) => {
  return (
    <>
      <Input
        required
        name="sharePrice"
        type="number"
        labelText="Share Price ($)"
        withMb={false}
        value={values.sharePrice}
        errorMessage={errors.sharePrice}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
      />
      <Input
        required
        name="sharesAmount"
        type="number"
        labelText="Shares amount"
        withMb={false}
        value={values.sharesAmount}
        errorMessage={errors.sharesAmount}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
      />
      <Input
        required
        name="fee"
        type="number"
        labelText="Fee ($)"
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

export default TradeSpecificFields
