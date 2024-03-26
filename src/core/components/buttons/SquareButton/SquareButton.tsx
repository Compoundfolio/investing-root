"use client"

import React, { memo } from "react"
import { ISquareButton } from "./types"
import clsx from "clsx"
import styles from "./SquareButton.module.css"

const SquareButton = ({ children, onClick, className }: ISquareButton) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(styles.squareButton, className)}
    >
      {children}
    </button>
  )
}

export default memo(SquareButton)
