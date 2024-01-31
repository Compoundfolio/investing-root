import { GROWTH_CHART_FILTERS } from "./consts"

export const findFilterByName = (filterName: string) => {
  return GROWTH_CHART_FILTERS.find(({ name }) => name === filterName)!
}
