import { useMemo } from "react"
import { useBrokeragesData } from "src/store"
import { getValueChartDataSet } from "../helpers"

const useValueChartData = () => {
  const { brokerageEntities } = useBrokeragesData()

  const dataSet = useMemo(() => {
    const allNoNTradeTransactions = brokerageEntities[0].getNonTradeTransactions()
    return getValueChartDataSet(allNoNTradeTransactions)
  }, [brokerageEntities])  

  return dataSet
}

export default useValueChartData