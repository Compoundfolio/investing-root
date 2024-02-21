import { Currency, Option } from "src/core/types"
import { Asset } from "../types"
import { ReactNode } from "react"

export type AssetSearchOptionData = {
  title: Asset["title"]
  ticker: Asset["ticker"]
  exchange: Asset["exchange"]
  exchangeCountry: Asset["exchangeCountry"]
  type: any
  currentMarketPrice: number
  currency: Currency
  icon?: ReactNode
}

const dataHardCodeAppl: AssetSearchOptionData = {
  title: "Apple Inc.",
  ticker: "APPL",
  exchange: "NASDAQ",
  exchangeCountry: "US",
  type: "Stock",
  currentMarketPrice: 199.18,
  currency: Currency.USD,
}

const dataHardCodeTgt: AssetSearchOptionData = {
  title: "Target",
  ticker: "TGT",
  exchange: "NASDAQ",
  exchangeCountry: "US",
  type: "Stock",
  currentMarketPrice: 172.47,
  currency: Currency.USD,
}

const dataHardCodeHd: AssetSearchOptionData = {
  title: "Home Depot",
  ticker: "TXN",
  exchange: "ARCA",
  exchangeCountry: "US",
  type: "Stock",
  currentMarketPrice: 364.5,
  currency: Currency.USD,
}

export const useAssetSearch = () => {
  const serverSearchRequest = async (
    searchValue: string
  ): Promise<Option[]> => {
    if (!searchValue) return []

    return new Promise((resolve) =>
      setTimeout(() => {
        resolve([
          {
            id: "nf4jnfjnf4",
            value: "Apple Inc.",
            label: "Apple Inc.",
            data: dataHardCodeAppl,
            icon: () =>
              "https://cdn.snowball-analytics.com/asset-logos/AAPL-NASDAQ-USD.png",
          },
          {
            id: "nf4jnfjnsdff4",
            value: "Home Depot",
            label: "Home Depot",
            data: dataHardCodeHd,
            icon: () =>
              "https://cdn.snowball-analytics.com/asset-logos/HD-NYSE-USD.png",
          },
          {
            id: "nf4jnfjnf21",
            value: "Target",
            label: "Target",
            data: dataHardCodeTgt,
            icon: () =>
              "https://cdn.snowball-analytics.com/asset-logos/TGT-NYSE-USD.png",
          },
        ] satisfies Option<AssetSearchOptionData>[])
      }, 1000)
    )
  }

  return {
    serverSearchRequest,
  }
}
