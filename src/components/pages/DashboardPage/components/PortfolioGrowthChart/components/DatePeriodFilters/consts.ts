import { GrowthChartFilter } from "./types"

export const GROWTH_CHART_FILTERS: GrowthChartFilter[] = [
  { name: "Today" },
  { name: "Week" },
  { name: "Month" },
  { name: "YTD" },
  { name: "1 year" },
  { name: "5 years" },
  { name: "MAX" },
]

export const initialFilter = GROWTH_CHART_FILTERS.at(-1)!
