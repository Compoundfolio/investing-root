import { useMemo } from "react"
import { useBrokeragesData } from "src/store"
import { getDivChartDataSet } from "../helpers"

const useDivChartData = () => {
  const { brokerageEntities } = useBrokeragesData()

  const dataSet = useMemo(() => {
    const assets = brokerageEntities[0].getAssets()     
    const positionsListing = Object.values({ ...assets?.openPositions, ...assets?.closedPositions })    
    return getDivChartDataSet(positionsListing)
  }, [brokerageEntities])  

  return {
    dataSet
  }
}

export default useDivChartData