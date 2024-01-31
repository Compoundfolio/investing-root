import React, { memo, useCallback, useState } from "react"
import clsx from "clsx"
import styles from "./DatePeriodFilters.module.css"
import { GrowthChartFilter } from "./types"
import { initialFilter, GROWTH_CHART_FILTERS } from "./consts"
import { findFilterByName } from "./helpers"

const DatePeriodFilters = () => {
  const [appliedFilter, setAppliedFilter] =
    useState<GrowthChartFilter>(initialFilter)

  const handleFilter = useCallback((filterName: string) => {
    // TODO: Api call
    const filter = findFilterByName(filterName)
    setAppliedFilter(filter)
  }, [])

  return (
    <section className="flex items-center">
      {GROWTH_CHART_FILTERS.map(({ name }) => (
        <button
          key={name}
          onClick={() => handleFilter(name)}
          className={clsx([
            styles.datePeriodFilters__item,
            appliedFilter.name === name &&
              styles.datePeriodFilters__item_active,
          ])}
        >
          {name}
        </button>
      ))}
    </section>
  )
}

export default memo(DatePeriodFilters)
