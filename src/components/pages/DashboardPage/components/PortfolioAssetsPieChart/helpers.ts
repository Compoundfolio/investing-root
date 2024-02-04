import { NormalizedPositions } from "@core"
import { Data } from "./types"

export const getChartDataSet = (openPositions: NormalizedPositions): Data => {
  // @ts-ignore - TODO: Resolve after MVV stage
  return openPositions
    ? Object.entries(openPositions).map(([ticker, assets]) => ({
        id: ticker,
        label: ticker,
        value: assets.actualPositionPrice,
      }))
    : []
}
