import React, { memo } from "react"
import { AssetOperationSummary } from "./components"
import { Asset } from "src/core/components/blocks"
import { Exchange, Option, Ticker } from "src/core/types"
import { TransactionType } from "../TransactionForm/types"

interface ITransactionShortPreview {
  transactionTotal: number
  assetTitle: string | undefined
  assetTicker: Ticker | undefined
  assetExchange: Exchange | undefined
  assetExchangeCountry: string | undefined
  availableBuyingPower: number
  availableBuyingPowerLeft: number
  transactionTypeValue: TransactionType
  transactionSubResult?: number
  selectedBrokerageIcon: Option["icon"]
}

// TODO: Make sure memo works good after props refactor
const TransactionShortPreview = ({
  transactionTotal,
  assetTitle,
  assetTicker,
  assetExchange,
  assetExchangeCountry,
  availableBuyingPower,
  availableBuyingPowerLeft,
  transactionTypeValue,
  transactionSubResult,
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
        transactionSubResult={transactionSubResult}
        transactionTypeValue={transactionTypeValue}
      />
    </div>
  )
}

export default memo(TransactionShortPreview)
