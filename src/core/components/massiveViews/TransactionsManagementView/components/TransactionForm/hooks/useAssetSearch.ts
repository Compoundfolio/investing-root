import { Currency, Option } from "src/core/types"
import { Asset } from "../types"

export type AssetSearchOptionData = {
  title: Asset['title']
  ticker: Asset['ticker']
  exchange: Asset['exchange']
  exchangeCountry: Asset['exchangeCountry']
  type: any
  currentMarketPrice: number
  currency: Currency
}

const dataHardCode: AssetSearchOptionData = {
  title: "Texas Instruments Inc.",
  ticker: "TXN",
  exchange: "NASDAQ",
  exchangeCountry: "US",
  type: "Stock",
  currentMarketPrice: 172.48,
  currency: Currency.USD,
}

export const useAssetSearch = () => {
  const serverSearchRequest = async (searchValue: string): Promise<Option[]> => {
    if (!searchValue) return []

    return new Promise(resolve => setTimeout(() => {
      resolve([
        { id: "nf4jnfjnf4", value: "Test", label: "Test asset", data: dataHardCode },
        { id: "nf4jnfjnsdff4", value: "Test 2", label: "Test asset 2", data: dataHardCode },
        { id: "nf4jnfjnf21", value: "Test 2", label: "Test asset 3", data: dataHardCode },
      ] satisfies Option<AssetSearchOptionData>[])
    }, 1000))
  }

  return {
    serverSearchRequest,
  }
}