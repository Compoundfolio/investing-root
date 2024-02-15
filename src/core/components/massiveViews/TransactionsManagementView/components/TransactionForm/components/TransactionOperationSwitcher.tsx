import React, { MouseEvent, memo } from "react"
import { Label } from "src/core/client"
import style from "./TransactionOperationSwitcher.module.css"
import clsx from "clsx"
import { TransactionFormValues } from "../types"

interface ITransactionOperationSwitcher {
  required: boolean
  name: string
  operationType: TransactionFormValues["operationType"]
  transactionType: TransactionFormValues["transactionType"]["value"]
  changeOperationType: (e: MouseEvent<HTMLButtonElement>) => void
}

const TransactionOperationSwitcher = ({
  required,
  name,
  operationType,
  transactionType,
  changeOperationType,
}: ITransactionOperationSwitcher) => {
  const isTrade = transactionType === "TRADE"
  const firstOption = isTrade ? "BUY" : "FUNDING"
  const lastOption = isTrade ? "SELL" : "WITHDRAWAL"

  return (
    <div className="mb-4">
      <Label required={required} htmlFor={name} labelText="Operation type" />
      <div id={name} className="mt-2">
        <button
          type="button"
          name={firstOption}
          className={clsx(
            style.operation,
            style.operation_first,
            operationType === firstOption && style.operation__active
          )}
          onClick={changeOperationType}
        >
          {firstOption}
        </button>
        <button
          type="button"
          name={lastOption}
          className={clsx(
            style.operation,
            style.operation_last,
            operationType === lastOption && style.operation__active
          )}
          onClick={changeOperationType}
        >
          {lastOption}
        </button>
      </div>
    </div>
  )
}

export default memo(TransactionOperationSwitcher)
