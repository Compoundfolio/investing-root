import React, { memo, useCallback, useMemo } from "react"
import styles from "./RatioChart.module.css"
import { RatioChartDataSet } from "./types"
import { calcPercentageChange } from "./helpers"
import clsx from "clsx"

interface IRatioChart {
  title: string
  totalShortDescription: string
  dataSet: RatioChartDataSet
  hoveredTransactionCategory?: string | null
  setHoveredTransactionCategory?: React.Dispatch<
    React.SetStateAction<string | null>
  >
}

const RatioChart = ({
  title,
  totalShortDescription,
  dataSet,
  hoveredTransactionCategory,
  setHoveredTransactionCategory,
}: IRatioChart) => {
  const total = useMemo(() => {
    return (
      dataSet.reduce(
        (prevValue, currentValue) => prevValue + currentValue.value,
        0
      ) || 0
    )
  }, [dataSet])

  const ratioItemStyle = useCallback(
    ({ value }) => ({
      width: `calc(${calcPercentageChange(value ?? 0, total)}% - 2px)`,
      opacity: calcPercentageChange(value ?? 0, total) / 100,
    }),
    [total]
  )

  return (
    <article className="w-full">
      <div className="flex items-center justify-between gap-8 mb-4">
        <h3 className={styles.ratioChart__title}>{title}</h3>
        <div className="flex flex-col items-end gap-1">
          <span className={styles.ratioChart__total}>{total}</span>
          <span className={styles.ratioChart__totalDescription}>
            {totalShortDescription}
          </span>
        </div>
      </div>
      <div className="w-full flex gap-0.5">
        {dataSet.map((ratioDataEntity) => (
          <div
            key={ratioDataEntity.name}
            style={ratioItemStyle(ratioDataEntity)}
            className={clsx(
              styles.ratioChart__item,
              hoveredTransactionCategory === ratioDataEntity.name &&
                styles.ratioChart__item__hovered
            )}
            onMouseMove={() =>
              setHoveredTransactionCategory &&
              setHoveredTransactionCategory(ratioDataEntity.name)
            }
            onMouseLeave={() =>
              setHoveredTransactionCategory &&
              hoveredTransactionCategory &&
              setHoveredTransactionCategory(null)
            }
          >
            {hoveredTransactionCategory === ratioDataEntity.name && (
              <div className="absolute left-0 px-1 py-0.5 text-white top-6 bg-slate-800 text-xs">
                {ratioDataEntity.name}: {ratioDataEntity.value}
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  )
}

export default memo(RatioChart)
