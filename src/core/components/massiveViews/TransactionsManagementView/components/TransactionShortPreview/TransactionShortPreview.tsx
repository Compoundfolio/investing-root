import React from 'react'
import { AssetOperationSummary } from './components'

const TransactionShortPreview = ({
  availableBuyingPower,
  transactionTotal,
  availableBuyingPowerLeft,
}) => {
  return (
    <div className='flex justify-between'>
      <Asset />
      <AssetOperationSummary
        availableBuyingPower={availableBuyingPower}
        transactionTotal={transactionTotal}
        availableBuyingPowerLeft={availableBuyingPowerLeft}
      />
    </div>
  )
}

export default TransactionShortPreview