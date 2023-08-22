import React from "react"
import { IReactChildren } from "src/core/types"
import clsx from "clsx"
import styles from "./TCell.module.css"

interface ITCell extends IReactChildren {
  th?: boolean
  number?: boolean
  bold?: boolean
  align?: "left" | "center" | "right"
  valign?: "top" | "middle" | "bottom"
}

function TCell({
  children,
  th = false,
  number = false,
  bold = false,
  align = "left",
  valign = "middle",
  className,
  title,
}: ITCell) {
  const commonStyles = clsx(
    `text-${align} w-full align-${valign}`,
    number && "font-chakra",
    bold && "font-semibold",
    styles.tcell,
    className,
  )

  return th ? (
    <th
      title={title}
      className={clsx(commonStyles, "h-14 p-5")}
    >
      {children}
    </th>
  ) : (
    <td
      title={title}
      className={clsx(commonStyles, "px-5 py-2.5")}
    >
      {children}
    </td>
  )
}

export default TCell
