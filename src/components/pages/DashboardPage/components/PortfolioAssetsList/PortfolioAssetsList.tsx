"use client"

import { AssetPosition, AssetsTable } from "@core"
import { memo, useMemo, useCallback } from "react"
import { useBrokeragesData } from "src/store"

const HARD_CODED_DATA: AssetPosition[] = [
  {
    id: 123,
    ticker: "TSCO",
    sharesAmount: 12,
    currentPositionPrice: 239.88,
    averagePrice: 211.43,
    actualPositionPrice: 2878.56,
    dividendStats: {
      divYield: 1.4,
      div1yGrowth: 8.9,
      div5yGrowth: 9.9,
      div10yGrowth: 10.3,
      divForOneShare: 12.44,
      divForAllShares: 123.01,
    },
    wholeMarketDividendHistory: [],
    payedDividendTaxTransactions: [],
    payedBrokerageCommissionsTransactions: [],
    payedDividendTransactions: [],
    allTradeTransactions: [],
  },
  {
    id: 24,
    ticker: "SCHD",
    sharesAmount: 12,
    currentPositionPrice: 239.88,
    averagePrice: 211.43,
    actualPositionPrice: 2878.56,
    dividendStats: {
      divYield: 1.4,
      div1yGrowth: 8.9,
      div5yGrowth: 9.9,
      div10yGrowth: 10.3,
      divForOneShare: 12.44,
      divForAllShares: 123.01,
    },
    wholeMarketDividendHistory: [],
    payedDividendTaxTransactions: [],
    payedBrokerageCommissionsTransactions: [],
    payedDividendTransactions: [],
    allTradeTransactions: [],
  },
  {
    id: 111,
    ticker: "AVGO",
    sharesAmount: 12,
    currentPositionPrice: 239.88,
    averagePrice: 211.43,
    actualPositionPrice: 2878.56,
    dividendStats: {
      divYield: 1.4,
      div1yGrowth: 8.9,
      div5yGrowth: 9.9,
      div10yGrowth: 10.3,
      divForOneShare: 12.44,
      divForAllShares: 123.01,
    },
    wholeMarketDividendHistory: [],
    payedDividendTaxTransactions: [],
    payedBrokerageCommissionsTransactions: [],
    payedDividendTransactions: [],
    allTradeTransactions: [],
  },
  {
    id: 889,
    ticker: "TXN",
    sharesAmount: 12,
    currentPositionPrice: 239.88,
    averagePrice: 211.43,
    actualPositionPrice: 2878.56,
    dividendStats: {
      divYield: 1.4,
      div1yGrowth: 8.9,
      div5yGrowth: 9.9,
      div10yGrowth: 10.3,
      divForOneShare: 12.44,
      divForAllShares: 123.01,
    },
    wholeMarketDividendHistory: [],
    payedDividendTaxTransactions: [],
    payedBrokerageCommissionsTransactions: [],
    payedDividendTransactions: [],
    allTradeTransactions: [],
  },
  {
    id: 786,
    ticker: "ABBV",
    sharesAmount: 12,
    currentPositionPrice: 239.88,
    averagePrice: 211.43,
    actualPositionPrice: 2878.56,
    dividendStats: {
      divYield: 1.4,
      div1yGrowth: 8.9,
      div5yGrowth: 9.9,
      div10yGrowth: 10.3,
      divForOneShare: 12.44,
      divForAllShares: 123.01,
    },
    wholeMarketDividendHistory: [],
    payedDividendTaxTransactions: [],
    payedBrokerageCommissionsTransactions: [],
    payedDividendTransactions: [],
    allTradeTransactions: [],
  },
]

const PortfolioAssetsList = ({ ...restProps }) => {
  const { brokerageEntities } = useBrokeragesData()

  // TODO: Make component server-oriented and take the data from fetch call inside this component
  // const rows: AssetPosition[] | [] = useMemo(() => {
  //   if (brokerageEntities?.length) {
  //     const assets = brokerageEntities[0]?.getAssets()

  //     return brokerageEntities?.length
  //       ? Object.entries(assets?.openPositions).map(
  //           ([_ticker, positionData]) => positionData
  //         )
  //       : []
  //   }

  //   return []
  // }, [brokerageEntities])

  const handleRowHover = useCallback(() => {}, [])

  return (
    <div {...restProps}>
      <AssetsTable data={HARD_CODED_DATA} onRowHover={handleRowHover} />
    </div>
  )
}

export default memo(PortfolioAssetsList)
