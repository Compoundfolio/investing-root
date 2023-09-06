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
        { id: "nf4jnfjnf4", value: "Apple Inc.", label: "Apple Inc.", data: dataHardCode, icon: "https://cdn.snowball-analytics.com/asset-logos/AAPL-NASDAQ-USD.png" },
        { id: "nf4jnfjnsdff4", value: "Home Depot", label: "Home Depot", data: dataHardCode, icon: "https://cdn.snowball-analytics.com/asset-logos/HD-NYSE-USD.png" },
        { id: "nf4jnfjnf21", value: "Target Corporation", label: "Target Corporation", data: dataHardCode, icon: "https://cdn.snowball-analytics.com/asset-logos/TGT-NYSE-USD.png" },
      ] satisfies Option<AssetSearchOptionData>[])
    }, 1000))
  }

  return {
    serverSearchRequest,
  }
}