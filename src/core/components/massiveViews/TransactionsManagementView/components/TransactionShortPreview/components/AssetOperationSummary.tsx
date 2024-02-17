import React from "react"
import { Divider } from "src/core/components/blocks"
import styles from "./AssetOperationSummary.module.css"
import clsx from "clsx"
import { TransactionType } from "../../TransactionForm/types"
import { SUMMARIES_NAMINGS } from "./const"

interface IAssetOperationSummary {
  availableBuyingPower: number
  transactionTotal: number
  availableBuyingPowerLeft: number
  transactionTypeValue: TransactionType
}

const AssetOperationSummary = ({
  availableBuyingPower,
  transactionTotal,
  availableBuyingPowerLeft,
  transactionTypeValue,
}: IAssetOperationSummary) => {
  const summary = SUMMARIES_NAMINGS[transactionTypeValue]

  return (
    <div className="flex flex-col gap-2 w-[180px]">
      <p className={styles.summary_item}>
        <span className={styles.summary_item__title}>
          {summary.initialValueNaming ?? "Available cash:"}
        </span>
        <span
          className={clsx(
            styles.summary_item__value,
            availableBuyingPowerLeft < 1 && styles.summary_item__value__gray
          )}
        >
          ${availableBuyingPower}
        </span>
      </p>
      <p className={styles.summary_item}>
        <span className={styles.summary_item__title}>
          {summary.transactionValueNaming ?? "Transaction value:"}
        </span>
        <span
          className={clsx(
            styles.summary_item__value,
            transactionTotal < 1 && styles.summary_item__value__gray
          )}
        >
          ${transactionTotal}
        </span>
      </p>
      <Divider />
      <p className={styles.summary_item}>
        <span className={styles.summary_item__title}>
          {summary.transactionValueNaming ?? "Available cash left:"}
        </span>
        <span
          className={clsx(
            styles.summary_item__value,
            availableBuyingPowerLeft < 1 && styles.summary_item__value__gray
          )}
        >
          ${availableBuyingPowerLeft}
        </span>
      </p>
    </div>
  )
}

export default AssetOperationSummary
