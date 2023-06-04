import React from 'react'
import { LinkLazy } from '@core'
import navItems from './navItems'

const Navigation = () => {
  return (
    <nav>
      <ul className='flex flex-col justify-center gap-4'>
        {navItems.map(({ path, child }) => (
          <LinkLazy key={path} to={path}>
            {child}
          </LinkLazy>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation