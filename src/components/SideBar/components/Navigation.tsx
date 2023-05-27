import React from 'react'
import { LinkLazy } from '@core'
import { useRouter } from 'next/router'
import navItems from './navItems'

const Navigation = () => {
  const router = useRouter()

  return (
    <nav>
      <ul className='flex flex-col justify-center gap-4'>
        {navItems.map(({ path, child }) => (
          <LinkLazy key={path} to={path} isActive={router.pathname === path}>
            {child}
          </LinkLazy>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation