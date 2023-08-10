import React, { memo } from 'react'
import { MainAreaWrapper, PortfolioManagementArea, PortfoliosMenu } from './components'
import { Divider } from '@core';

const PortfoliosManagementPage = () => {
  return (
    <div className='flex flex-col w-full gap-8'>
      <PortfoliosMenu />
      <MainAreaWrapper>
        <Divider />
        <PortfolioManagementArea />
      </MainAreaWrapper>
    </div>
  )
}

export default memo(PortfoliosManagementPage)