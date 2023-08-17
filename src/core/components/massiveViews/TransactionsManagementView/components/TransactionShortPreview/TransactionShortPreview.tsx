import React from 'react'
import { AssetOperationSummary } from './components'
import { Asset } from 'src/core/components/blocks'
import { Exchange, Ticker } from 'src/core/types'

interface ITransactionShortPreview {
  transactionTotal: number,
  assetTitle: string | undefined,
  assetTicker: Ticker | undefined,
  assetExchange: Exchange | undefined,
  assetExchangeCountry: string | undefined,
}

const TransactionShortPreview = ({
  transactionTotal,
  assetTitle,
  assetTicker,
  assetExchange,
  assetExchangeCountry,
}: ITransactionShortPreview) => {

  // TODO:
  const getAvailableBuyingPower = () => 10000

  const availableBuyingPower = getAvailableBuyingPower()

  // TODO: Handle case, when availableBuyingPowerLeft becomes negative
  const availableBuyingPowerLeft = availableBuyingPower - transactionTotal

  return (
    <div className='flex justify-between'>
      <Asset
        title={assetTitle}
        ticker={assetTicker}
        exchange={assetExchange}
        exchangeCountry={assetExchangeCountry}
      />
      <AssetOperationSummary
        availableBuyingPower={availableBuyingPower}
        transactionTotal={transactionTotal}
        availableBuyingPowerLeft={availableBuyingPowerLeft}
      />
    </div>
  )
}

export default TransactionShortPreview