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
  transactionSubResult?: number
  transactionTypeValue: TransactionType
}

const AssetOperationSummary = ({
  availableBuyingPower,
  transactionTotal,
  availableBuyingPowerLeft,
  transactionSubResult,
  transactionTypeValue,
}: IAssetOperationSummary) => {
  const summary = SUMMARIES_NAMINGS[transactionTypeValue]

  const isTransactionValueNegative =
    transactionTypeValue !== "FUNDING_WITHDRAWAL"

  const sign = isTransactionValueNegative ? "-" : "+"

  return (
    <div className="flex flex-col gap-2 w-[180px]">
      <p className={styles.summary_item}>
        <span className={styles.summary_item__title}>
          {summary.initialValueNaming ?? "Available cash:"}
        </span>
        <span className={clsx(styles.summary_item__value)}>
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
            isTransactionValueNegative && styles.summary_item__value__gray
          )}
        >
          {sign} ${transactionTotal}
        </span>
      </p>
      <Divider color="rgba(255, 255, 255, 0.10)" />
      {transactionSubResult && (
        <>
          <p className={styles.summary_item}>
            <span className={styles.summary_item__title}>
              {summary.subResultNaming}
            </span>
            <span
              className={clsx(
                styles.summary_item__value,
                isTransactionValueNegative && styles.summary_item__value__gray
              )}
            >
              {sign} ${transactionSubResult}
            </span>
          </p>
          <Divider color="rgba(255, 255, 255, 0.25)" />
        </>
      )}
      <p className={styles.summary_item}>
        <span className={styles.summary_item__title}>
          {summary.transactionValueNaming ?? "Available cash left:"}
        </span>
        <span className={clsx(styles.summary_item__value)}>
          ${availableBuyingPowerLeft}
        </span>
      </p>
    </div>
  )
}

export default AssetOperationSummary
