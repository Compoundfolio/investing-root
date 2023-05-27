import React, { memo } from 'react'
import { ILinkLazy } from './types'
import { StyledLink } from './styled'

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
  }

  return withoutLiWrapper ? (
    <StyledLink key={to} {...props}>{children}</StyledLink>
  ) : (
    <li>
      <StyledLink key={to} {...props}>{children}</StyledLink>
    </li>
  )
}

export default memo(LinkLazy)