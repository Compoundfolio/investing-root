import React from "react"
import Link from "next/link"
import styles from "./LinkCustom.module.css"
import clsx from "clsx"

interface ILinkCustom {
  title: string
  to?: `/${string}`
  className?: string
  onClick: () => void
}

/** **Note:** If there are no `href` prop passed - it behaves as button element */
const LinkCustom = ({
  title,
  /** @example "/example-route" */
  to,
  className,
  onClick,
}: ILinkCustom) => {
  const styleClasses = clsx([styles.link, className])

  return to ? (
    <Link className={styleClasses} href={to}>
      {title}
    </Link>
  ) : (
    <button onClick={onClick} className={styleClasses}>
      {title}
    </button>
  )
}

export default LinkCustom
