import React from 'react'
import { IReactChildren } from 'src/core/types'
import clsx from 'clsx';

interface ITCell extends IReactChildren {
  th?: boolean
  align?: "left" | "center" | "right"
  valign?: "top" | "middle" | "bottom"
}

function TCell({ 
  children, 
  th = false,
  align = "left",
  valign = "middle",
  className
}: ITCell) {
  const commonStyles = `text-${align} w-full align-${valign}`

  return th ? (
    <th className={clsx(commonStyles, ["h-14", "p-5", className])}>{children}</th>
  ) : (
    <td className={clsx(commonStyles, ["px-5 py-2.5", className])}>{children}</td>
  )
}

export default TCell