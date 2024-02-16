import React from "react"
import { AssetOperationSummary } from "./components"
import { Asset } from "src/core/components/blocks"
import { Exchange, Option, Ticker } from "src/core/types"

interface ITransactionShortPreview {
  transactionTotal: number
  assetTitle: string | undefined
  assetTicker: Ticker | undefined
  assetExchange: Exchange | undefined
  assetExchangeCountry: string | undefined
  availableBuyingPower: number
  availableBuyingPowerLeft: number
  selectedBrokerageIcon: Option["icon"]
}

const TransactionShortPreview = ({
  transactionTotal,
  assetTitle,
  assetTicker,
  assetExchange,
  assetExchangeCountry,
  availableBuyingPower,
  availableBuyingPowerLeft,
  selectedBrokerageIcon,
}: ITransactionShortPreview) => {
  return (
    <div className="flex justify-between mt-2 mb-4">
      <Asset
        title={assetTitle}
        ticker={assetTicker}
        exchange={assetExchange}
        exchangeCountry={assetExchangeCountry}
        selectedBrokerageIcon={selectedBrokerageIcon}
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
