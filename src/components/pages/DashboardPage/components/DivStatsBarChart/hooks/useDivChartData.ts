import { useMemo } from "react"
import { useBrokeragesData } from "src/store"
import { getDivChartDataSet } from "../helpers"

const useDivChartData = () => {
  const { brokerageEntities } = useBrokeragesData()

  const dataSet = useMemo(() => {
    const assets = brokerageEntities[0].getAssets()
    const openPositionsListing = Object.values(assets?.openPositions)
    return getDivChartDataSet(openPositionsListing)
  }, [brokerageEntities])

  return {
    dataSet
  }
}

export default useDivChartData