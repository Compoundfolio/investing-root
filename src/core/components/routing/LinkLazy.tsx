"use client"

import React, { memo } from "react"
import { ILinkLazy } from "./types"
import Link from "next/link"
import clsx from "clsx"
import styles from "./LinkLazy.module.css"
import { usePathname } from "next/navigation"

const LinkLazy = ({ children, to, withoutLiWrapper = false }: ILinkLazy) => {
  // TODO: Add local env check
  if (!to.startsWith("/")) throw new Error("Link should starts with `/`")

  const pathname = usePathname()

  const isActive = pathname === to

  const props = {
    href: to,
    prefetch: false,
    isActive,
    className: clsx(styles.navLink, isActive && styles.navLink__active),
  }

  return withoutLiWrapper ? (
    <Link key={to} {...props}>
      {children}
    </Link>
  ) : (
    <li>
      <Link key={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default memo(LinkLazy)
