import React, { memo } from "react"
import { ITypeBasedFIelds } from "./types"
import { FieldGroupModule } from "./components"

const TypeBasedFields = ({
  isTransactionTypeOf,
  ...otherProps
}: ITypeBasedFIelds) => {
  const FieldGroup = FieldGroupModule[otherProps.values.transactionType.value]

  return (
    <div className="flex w-full gap-4">
      <FieldGroup {...otherProps} />
    </div>
  )
}

export default memo(TypeBasedFields)
