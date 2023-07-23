import React, { memo } from 'react'
import { PortfoliosMenu } from './components'

const PortfoliosManagementPage = () => {
  return (
    <div className='w-full'>
      <PortfoliosMenu />
      {/* <Divider /> */}
      {/* <PortfolioManagementArea /> */}
    </div>
  )
}

export default memo(PortfoliosManagementPage)