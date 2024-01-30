import { useMemo } from "react"
import { useBrokeragesData } from "src/store"
import { getValueChartDataSet } from "../helpers"

const useValueChartData = () => {
  const { brokerageEntities } = useBrokeragesData()

  const dataSet = useMemo(() => {
    const allNoNTradeTransactions =
      brokerageEntities[0]?.getNonTradeTransactions()
    const tradeTransactions = brokerageEntities[0]?.getTradeTransactions()
    const dividends = brokerageEntities[0]?.getTaxedDividends()

    return getValueChartDataSet(
      allNoNTradeTransactions,
      tradeTransactions,
      dividends
    )
  }, [brokerageEntities])

  return dataSet
}

export default useValueChartData
