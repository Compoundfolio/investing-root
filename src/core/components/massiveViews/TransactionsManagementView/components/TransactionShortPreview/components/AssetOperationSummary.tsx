import React, { memo } from "react"
import { Divider } from "src/core/components/blocks"
import styles from "./AssetOperationSummary.module.css"
import clsx from "clsx"
import { TransactionType } from "../../TransactionForm/types"
import { getSummaryNamings } from "./helpers"
import { beatify } from "@core/helpers"

interface IAssetOperationSummary {
  initialTransactionSummaryValue: number
  finalTransactionSummaryValue: number
  transactionTotal: number
  transactionTypeValue: TransactionType
  transactionSubResult?: number
  dividendTaxPercentage?: number
}

const AssetOperationSummary = ({
  initialTransactionSummaryValue,
  finalTransactionSummaryValue,
  transactionTotal,
  transactionTypeValue,
  transactionSubResult,
  dividendTaxPercentage,
}: IAssetOperationSummary) => {
  const summary = getSummaryNamings({ dividendTaxPercentage })[
    transactionTypeValue
  ]

  const isTransactionTotalPositive = transactionTotal >= 0

  const sign = isTransactionTotalPositive
    ? transactionTotal === 0
      ? ""
      : "+"
    : "-"

  const subValueSign =
    transactionSubResult! >= 0 ? (transactionSubResult === 0 ? "" : "+") : "-"

  return (
    <div className="flex flex-col gap-2 w-[205px]">
      <p className={styles.summary_item}>
        <span className={styles.summary_item__title}>
          {summary.initialValueNaming ?? "Available cash:"}
        </span>
        <span className={clsx(styles.summary_item__value)}>
          {beatify(initialTransactionSummaryValue, { withSign: false })}
        </span>
      </p>
      <p className={styles.summary_item}>
        <span className={styles.summary_item__title}>
          {summary.transactionValueNaming ?? "Transaction value:"}
        </span>
        <span
          className={clsx(
            styles.summary_item__value,
            sign &&
              (sign === "-"
                ? styles.summary_item__value__gray
                : styles.summary_item__value__green)
          )}
        >
          {beatify(transactionTotal)}
        </span>
      </p>
      <Divider color="rgba(255, 255, 255, 0.10)" />
      {transactionTypeValue === "DIVIDEND" && (
        <>
          <p className={styles.summary_item}>
            <span className={clsx(styles.summary_item__title, styles.total)}>
              {summary.subResultNaming}
            </span>
            <span
              className={clsx(
                styles.summary_item__value,
                styles.total,
                subValueSign &&
                  (subValueSign === "-"
                    ? styles.summary_item__value__gray
                    : styles.summary_item__value__green)
              )}
            >
              {beatify(transactionSubResult!)}
            </span>
          </p>
          <Divider color="rgba(255, 255, 255, 0.25)" />
        </>
      )}
      <p className={styles.summary_item}>
        <span className={clsx(styles.summary_item__title, styles.total)}>
          {summary.resultNaming ?? "Available cash left:"}
        </span>
        <span className={clsx(styles.summary_item__value, styles.total)}>
          {beatify(finalTransactionSummaryValue)}
        </span>
      </p>
    </div>
  )
}

export default memo(AssetOperationSummary)
