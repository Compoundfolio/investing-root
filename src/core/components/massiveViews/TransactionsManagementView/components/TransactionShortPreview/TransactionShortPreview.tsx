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
  initialTransactionSummaryValue: number
  finalTransactionSummaryValue: number
  transactionTypeValue: TransactionType
  transactionSubResult?: number
  dividendTaxPercentage?: number
  assetLogo: React.ReactNode
  selectedBrokerageIcon: Option["icon"]
}

// TODO: Make sure memo works good after props refactor
const TransactionShortPreview = ({
  transactionTotal,
  assetTitle,
  assetTicker,
  assetExchange,
  assetExchangeCountry,
  initialTransactionSummaryValue,
  finalTransactionSummaryValue,
  transactionTypeValue,
  transactionSubResult,
  dividendTaxPercentage,
  assetLogo,
  selectedBrokerageIcon,
}: ITransactionShortPreview) => {
  return (
    <div className="flex justify-between mt-2 mb-4">
      <Asset
        title={assetTitle}
        ticker={assetTicker}
        exchange={assetExchange}
        exchangeCountry={assetExchangeCountry}
        assetLogo={assetLogo}
        selectedBrokerageIcon={selectedBrokerageIcon}
      />
      <AssetOperationSummary
        initialTransactionSummaryValue={initialTransactionSummaryValue}
        finalTransactionSummaryValue={finalTransactionSummaryValue}
        transactionTotal={transactionTotal}
        transactionSubResult={transactionSubResult}
        dividendTaxPercentage={dividendTaxPercentage}
        transactionTypeValue={transactionTypeValue}
      />
    </div>
  )
}

export default memo(TransactionShortPreview)
