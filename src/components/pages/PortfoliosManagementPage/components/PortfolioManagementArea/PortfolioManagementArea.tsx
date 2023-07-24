import { Portfolio } from '@core'
import React, { memo } from 'react'
import { BrokerageMultiSelector } from './components'

interface IPortfolioManagementArea {
  portfolio: Portfolio
}

const PortfolioManagementArea = ({
  portfolio,
}: IPortfolioManagementArea) => {
  return (
    <section className='flex justify-between w-full gap-16'>
      <BrokerageMultiSelector />
      {/* <div className='flex justify-between w-full gap-16'> */}
        {/* <TransactionsUploadArea /> */}
        {/* <TransactionsUploadResultsByBrokerage /> */}
        <div>TransactionsUploadArea</div>
        TransactionsUploadResultsByBrokerage
      {/* </div> */}
    </section>
  )
}

export default memo(PortfolioManagementArea)