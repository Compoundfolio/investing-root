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
        value={values.sharePrice}
        errorMessage={errors.sharePrice}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
      />
      <Input
        required
        name="sharesAmountForTrade"
        type="number"
        labelText="Shares amount"
        value={values.sharesAmountForTrade}
        errorMessage={errors.sharesAmountForTrade}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
      />
      <Input
        required
        name="fee"
        type="number"
        labelText="Fee ($)"
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
