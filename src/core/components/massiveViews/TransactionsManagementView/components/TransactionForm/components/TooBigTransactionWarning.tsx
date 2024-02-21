import { beatify } from "@core/helpers"
import React, { memo } from "react"

interface ITooBigTransactionWarning {
  transactionTotal: number
  availableCash: number
}

const TooBigTransactionWarning = ({
  transactionTotal,
  availableCash,
}: ITooBigTransactionWarning) => {
  return (
    <>
      Transaction's value{" "}
      <span className="font-chakra">({beatify(transactionTotal)})</span> is
      bigger then available cash balance{" "}
      <span className="font-chakra">
        (
        {beatify(availableCash!, {
          withSign: false,
        })}
        )
      </span>
      . Please check, does the transaction data is correct or add more cash to
      obtain this transaction.
    </>
  )
}

export default memo(TooBigTransactionWarning)
