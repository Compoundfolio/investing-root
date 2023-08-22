import { useEffect } from "react"
import { Currency, PortfolioTransaction, UseFormHookHelpers } from "src/core/types"
import { defaultFormValues } from "../const"
import { AssetSearchOptionData } from "./useAssetSearch"

interface IUseFormFetch {
  transactionToEdit: PortfolioTransaction | null,
  setAsset: (value: React.SetStateAction<AssetSearchOptionData | null | undefined>) => void,
  setValues: UseFormHookHelpers['setValues']
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
        type: transactionToEdit.assetType,
        currentMarketPrice: transactionToEdit.price,
        currency: Currency.USD,
      })
      setValues({
        assetType: transactionToEdit.assetType,
        assetSearchNameOrTicker: transactionToEdit.ticker,
        operationType: transactionToEdit.operationType,
        amount: transactionToEdit.amount,
        price: transactionToEdit.price,
        fee: transactionToEdit.fee,
        date: transactionToEdit.date,
      } satisfies typeof defaultFormValues)
    }
  }, [transactionToEdit])
}