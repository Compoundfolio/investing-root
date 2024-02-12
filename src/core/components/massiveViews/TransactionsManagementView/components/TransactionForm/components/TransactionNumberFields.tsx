import React from "react"
import { Input } from "src/core/client"

const TransactionNumberFields = ({
  values,
  errors,
  setFieldError,
  handleChange,
}) => {
  return (
    <div className="flex gap-4">
      {/* {values.transactionType.value !== "DIVIDEND" && ( */}
      <Input
        required
        name="amount"
        type="number"
        labelText="Amount"
        withMb={false}
        value={values.amount}
        errorMessage={errors.amount}
        setErrorMessage={setFieldError}
        onChange={handleChange}
        min={0}
      />
      {/* )} */}
      <Input
        required
        name="price"
        type="number"
        labelText="Price ($)"
        withMb={false}
        value={values.price}
        errorMessage={errors.price}
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
    </div>
  )
}

export default TransactionNumberFields
