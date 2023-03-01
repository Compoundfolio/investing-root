export type DivChartData = DivChartDataEntity[]

export type DivChartDataEntity = {
  month: "Jan" | "Feb" | "Mar" | "Apr" | "May" | "Jun" | "Jul" | "Aug" | "Sep" | "Oct" | "Nov" | "Dec"
  receivedDividendAmount?: number
  announcedDividendAmount?: number
  estimatedNotReceivedDividendAmount?: number
}