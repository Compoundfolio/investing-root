import styles from "./TRow.module.css"
import React from "react"
import IReactChildren from "../../../types/react/IReactChildren"
import clsx from "clsx"

interface ITRow extends IReactChildren {
  onHover?: () => void
  isSelected?: boolean
}

function TRow({ children, onHover, isSelected }: ITRow) {
  return (
    <tr onMouseEnter={onHover} className={clsx([styles.tr, "h-14"], isSelected && styles.tr_selected)}>
      {children}
    </tr>
  )
}

export default TRow
