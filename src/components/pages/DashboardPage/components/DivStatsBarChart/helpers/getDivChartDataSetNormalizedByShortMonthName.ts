import { NonTradeTransaction } from 'src/core/types';
import { normalizeArrayOfObjectsBy } from '@core';

const getDivChartDataSetNormalizedByShortMonthName = (
  payedDividendTransactions:  NonTradeTransaction<"DIVIDEND">[]
) => {
  let normalizedDivData = {}

  normalizeArrayOfObjectsBy(payedDividendTransactions, "") // TODO: Year too ....

  return normalizedDivData
}

export default getDivChartDataSetNormalizedByShortMonthName