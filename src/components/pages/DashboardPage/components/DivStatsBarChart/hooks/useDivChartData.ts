import { useMemo } from "react"
import { useBrokeragesData } from "src/store"

const useDivChartData = () => {
  const { brokerageEntities } = useBrokeragesData()

  const dataSet = useMemo(() => {
    const assets = brokerageEntities[0].getAssets()
    return getDivChartDataSet(assets?.openPositions)
  }, [brokerageEntities])

  return {
    dataSet
  }
}

export default useDivChartData