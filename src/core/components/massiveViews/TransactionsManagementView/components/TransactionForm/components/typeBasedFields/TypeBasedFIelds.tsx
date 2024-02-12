import React, { memo } from "react"
import * as Fields from "./components"
import { ITypeBasedFIelds } from "./types"

const TypeBasedFIelds = ({
  isTransactionTypeOf,
  ...otherProps
}: ITypeBasedFIelds) => {
  return (
    <div className="flex gap-4">
      {isTransactionTypeOf("TRADE") && (
        <Fields.TradeSpecificFields {...otherProps} />
      )}
      {isTransactionTypeOf("DIVIDEND") && (
        <Fields.DividendSpecificFields {...otherProps} />
      )}
      {isTransactionTypeOf("FEE") && (
        <Fields.FeeSpecificFields {...otherProps} />
      )}
      {isTransactionTypeOf("DIVIDEND_TAX") && (
        <Fields.DividendTaxSpecificFields {...otherProps} />
      )}
      {isTransactionTypeOf("FUNDING_WITHDRAWAL") && (
        <Fields.FundingWithdrawalSpecificFields {...otherProps} />
      )}
    </div>
  )
}

export default memo(TypeBasedFIelds)
