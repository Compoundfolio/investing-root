import { useEffect } from "react"
import {
  Currency,
  Option,
  PortfolioTransactionV2,
  UseFormHookHelpers,
} from "src/core/types"
import { AssetSearchOptionData } from "./useAssetSearch"
import { TransactionFormValues, TransactionTypeOption } from "../types"

interface IUseFormFetch {
  transactionToEdit: PortfolioTransactionV2 | null
  setAsset: (
    value: React.SetStateAction<AssetSearchOptionData | null | undefined>
  ) => void
  setValues: UseFormHookHelpers["setValues"]
}

export const useFormFetch = ({
  transactionToEdit,
  setAsset,
  setValues,
}: IUseFormFetch) => {
  useEffect(() => {
    if (transactionToEdit) {
      setAsset({
        title: transactionToEdit.title,
        ticker: transactionToEdit.ticker,
        exchange: transactionToEdit.exchange,
        exchangeCountry: transactionToEdit.exchangeCountry,
        type: transactionToEdit.transactionType,
        currentMarketPrice: transactionToEdit.price || 0,
        currency: Currency.USD,
        icon: transactionToEdit?.icon,
      })
      setValues({
        assignedBrokerage: transactionToEdit.assignedBrokerage,
        transactionType:
          transactionToEdit.transactionType as TransactionTypeOption,
        assetSearchNameOrTicker: transactionToEdit.ticker,
        operationType: transactionToEdit.operationType,
        sharesAmountForTrade: transactionToEdit.amount,
        sharePrice: transactionToEdit.price,
        fee: transactionToEdit.fee,
        date: transactionToEdit.date,
      } satisfies Partial<TransactionFormValues>)
    }
  }, [transactionToEdit])
}
