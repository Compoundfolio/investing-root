import React, { MouseEvent, memo } from 'react'
import { Label } from 'src/core/client'
import style from "./TransactionOperationSwitcher.module.css"
import clsx from 'clsx';

interface ITransactionOperationSwitcher {
  required: boolean
  name: string
  operationType: "BUY" | "SELL"
  changeOperationType: (e: MouseEvent<HTMLButtonElement>) => void
}

const TransactionOperationSwitcher = ({
  required,
  name,
  operationType,
  changeOperationType,
}: ITransactionOperationSwitcher) => {
  console.warn(operationType);
  
  return (
    <div>
      <Label required={required} htmlFor={name} labelText="Operation type" />
      <div id={name} className='mt-2'>
        <button
          type='button'
          name="BUY"
          className={clsx(style.operation, style.operation_first, operationType === "BUY" && style.operation__active)}
          onClick={changeOperationType}
        >
          BUY
        </button>
        <button
        type='button'
          name="SELL"
          className={clsx(style.operation, style.operation_last, operationType === "SELL" && style.operation__active)}
          onClick={changeOperationType}
        >
          SELL
        </button>
      </div>
    </div>
  )
}

export default memo(TransactionOperationSwitcher)