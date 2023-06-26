export type ValueChartDataSetEntity = {
  x: string
  y: number
}

export type NormalizedValueChartDataSet = {
  [K: ValueChartDataSetEntity["x"]]: ValueChartDataSetEntity[]
}

export type ValueChartDataSet = ValueChartDataSetEntity[]
