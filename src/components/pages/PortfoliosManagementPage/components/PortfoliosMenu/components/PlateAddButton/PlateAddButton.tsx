"use client"

import React from "react"
import styles from "./PlateAddButton.module.css"
import clsx from "clsx"
import { AddIcon } from "@core"
import { usePortfolioManagerContext } from "../../../../context/PortfolioManagerContextData"

interface IPlateAddButton {
  title: string
}

// TODO: Fix multi-click
const PlateAddButton = ({ title }: IPlateAddButton) => {
  const { isNoPortfolios, createNewPortfolioCard } =
    usePortfolioManagerContext()

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      {isNoPortfolios && (
        <span className={styles.plateButton_subMessageTitle}>
          No portfolios
        </span>
      )}
      <button
        onClick={createNewPortfolioCard}
        className={clsx(
          styles.plateButton,
          isNoPortfolios && styles.plateButton__active
        )}
      >
        <AddIcon className={styles.plateButton__icon} />
        <span className={styles.plateButton__title}>{title}</span>
      </button>
      {isNoPortfolios && (
        <div>
          <p className={styles.plateButton_messageTitle}>
            Portfolios List Empty
          </p>
          <span className={styles.plateButton_subMessageTitle}>
            Create your first one above
          </span>
        </div>
      )}
    </div>
  )
}

export default PlateAddButton
