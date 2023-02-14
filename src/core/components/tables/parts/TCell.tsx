import React from 'react'
import { IReactChildren } from 'src/core/types'
import clsx from 'clsx';

interface ITCell extends IReactChildren {
  th?: boolean
  align?: "left" | "center" | "right"
}

function TCell({ 
  children, 
  th = false,
  align = "left"
}: ITCell) {
  const commonStyles = `text-${align}`

  return th ? (
    <th className={clsx(commonStyles, ["h-14", "p-6"])}>{children}</th>
  ) : (
    <td className={clsx(commonStyles, ["px-6 py-1"])}>{children}</td>
  )
}

export default TCell