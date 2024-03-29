import { ShortMonthName } from "@core"
import { IReactChildren } from "src/core/types"

export interface IDivStatsBarChart extends IReactChildren {
  openedInModal?: boolean
}

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
