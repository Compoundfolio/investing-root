import { ShortMonthName } from "@core"

export type DivChartYearlyData = DivChartYearlyDataEntity[]

export type DivChartYearlyDataEntity = {
  month: ShortMonthName
  receivedDividendAmount?: number
  announcedDividendAmount?: number
  estimatedNotReceivedDividendAmount?: number
}

export type DivChartDataSet = {
  [K: number]: DivChartYearlyData
}