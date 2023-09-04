import styles from "./TRow.module.css"
import React from "react"
import IReactChildren from "../../../types/react/IReactChildren"
import clsx from "clsx"
import { Checkbox } from 'src/core/client';

interface ITRow extends IReactChildren {
  isSelected?: boolean
  isChecked?: boolean
  onHover?: () => void
  onCheck?: () => void
}

function TRow({
  children,
  isSelected,
  isChecked,
  onCheck,
  onHover,
}: ITRow) {
  return (
    <tr onMouseEnter={onHover} className={clsx([styles.tr, "h-14"], isSelected && styles.tr_selected)}>
      {onCheck && (
        <td valign="middle">
          <Checkbox
            name="tableRowCheck"
            checked={isChecked!}
            withMb={false}
            onChange={onCheck}
          />
        </td>
      )}
      {children}
    </tr>
  )
}

export default TRow
