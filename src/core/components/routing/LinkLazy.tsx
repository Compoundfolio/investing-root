import React, { memo } from 'react'
import { ILinkLazy } from './types'
import Link from 'next/link'
import clsx from 'clsx';
import styles from './LinkLazy.module.css'

const LinkLazy = ({
  children,
  to,
  withoutLiWrapper = false,
  isActive = false,
}: ILinkLazy) => {
  // TODO: Add local env check
  if (!to.startsWith("/")) throw new Error("Link should starts with `/`")

  const props = {
    href: to,
    prefetch: false,
    isActive,
    className: clsx(styles.navLink, isActive && styles.navLink__active),
  }

  return withoutLiWrapper ? (
    <Link key={to} {...props}>{children}</Link>
  ) : (
    <li>
      <Link key={to} {...props}>{children}</Link>
    </li>
  )
}

export default memo(LinkLazy)