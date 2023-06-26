import styles from "./TRow.module.css"
import React from "react"
import IReactChildren from "../../../types/react/IReactChildren"
import clsx from "clsx"

interface ITRow extends IReactChildren {
  onHover?: () => void
}

function TRow({ children, onHover }: ITRow) {
  return (
    <tr onMouseEnter={onHover} className={clsx([styles.tr, "h-14"])}>
      {children}
    </tr>
  )
}

export default TRow
