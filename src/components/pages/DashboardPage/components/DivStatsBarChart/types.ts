import { ShortMonthName } from "@core"

export type DivChartData = DivChartDataEntity[]

export type DivChartDataEntity = {
  month: ShortMonthName
  receivedDividendAmount?: number
  announcedDividendAmount?: number
  estimatedNotReceivedDividendAmount?: number
}