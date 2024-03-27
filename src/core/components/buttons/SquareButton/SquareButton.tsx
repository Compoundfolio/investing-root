"use client"

import React, { memo } from "react"
import { ISquareButton } from "./types"
import clsx from "clsx"
import styles from "./SquareButton.module.css"

const SquareButton = ({
  children,
  onClick,
  className,
  disabled,
  hoverTitle,
}: ISquareButton) => {
  return (
    <button
      type="button"
      title={hoverTitle}
      disabled={disabled}
      onClick={onClick}
      className={clsx(styles.squareButton, className)}
    >
      {children}
    </button>
  )
}

export default memo(SquareButton)
