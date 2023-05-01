import { useMemo } from "react"
import { useBrokeragesData } from "src/store"
import { getValueChartDataSet } from "../helpers"

const useValueChartData = () => {
  const { brokerageEntities } = useBrokeragesData()

  const dataSet = useMemo(() => {
    const allNoNTradeTransactions = brokerageEntities[0].getNonTradeTransactions()
    const dividends = brokerageEntities[0].getTaxedDividends()

    return getValueChartDataSet(
      allNoNTradeTransactions,
      dividends,
    )
  }, [brokerageEntities])  

  return dataSet
}

export default useValueChartData