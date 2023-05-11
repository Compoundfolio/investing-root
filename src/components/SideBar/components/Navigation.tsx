import Link from 'next/link'
import React from 'react'
import { DashboardPageIcon } from '../icons'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={'/dashboard'}>
            <DashboardPageIcon />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation