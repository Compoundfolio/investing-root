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
        name="price"
        type="number"
        labelText="Share Price ($)"
        withMb={false}
        value={values.price}
        errorMessage={errors.price}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
      />
      <Input
        required
        name="amount"
        type="number"
        labelText="Shares amount"
        withMb={false}
        value={values.amount}
        errorMessage={errors.amount}
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
