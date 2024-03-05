"use client"

import React, { memo } from "react"
import styles from "./PlateAddButton.module.css"
import clsx from "clsx"
import { AddIcon } from "@core"

interface IPlateAddButton {
  title: string
  extraContent?: {
    noItems: string
    listIsEmpty: string
    ctaMessage: string
  } | null
  onClick: () => void
}

// TODO: Fix multi-click
const PlateAddButton = ({
  title,
  extraContent = null,
  onClick,
}: IPlateAddButton) => {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      {extraContent && (
        <span className={styles.plateButton_subMessageTitle}>
          {extraContent.noItems}
        </span>
      )}
      <button
        onClick={onClick}
        className={clsx(
          styles.plateButton,
          extraContent && styles.plateButton__active
        )}
      >
        <AddIcon className={styles.plateButton__icon} />
        <span className={styles.plateButton__title}>{title}</span>
      </button>
      {extraContent && (
        <div>
          <p className={styles.plateButton_messageTitle}>
            {extraContent.listIsEmpty}
          </p>
          <span className={styles.plateButton_subMessageTitle}>
            {extraContent.noItems}
          </span>
        </div>
      )}
    </div>
  )
}

export default memo(PlateAddButton)
