import React, { memo, useMemo } from 'react'
import { calcPercentageChange } from '@core/helpers'
import styles from "./RatioChart.module.css"
import { RatioChartDataSet } from './types'

interface IRatioChart {
  title: string
  totalShortDescription: string
  dataSet: RatioChartDataSet
}

const RatioChart = ({
  title,
  totalShortDescription,
  dataSet,
}: IRatioChart) => {

  const total = useMemo(() => {
    return dataSet.reduce((prevValue, currentValue) => prevValue + currentValue.value, 0) ?? 0
  }, [dataSet])

  return (
    <article className='w-full'>
      <div className='flex items-center justify-between gap-8 mb-4'>
        <h3 className={styles.ratioChart__title}>
          {title}
        </h3>
        <div className='flex flex-col items-end gap-1'>
          <span className={styles.ratioChart__total}>
            {total}
          </span>
          <span className={styles.ratioChart__totalDescription}>
            {totalShortDescription}
          </span>
        </div>
      </div>
      <div className='w-full flex gap-0.5'>
        {dataSet.map(ratioDataEntity => (
          <div
            style={{
              width: `calc(${calcPercentageChange(ratioDataEntity?.value ?? 0, total)}% - 2px)`,
              opacity: calcPercentageChange(ratioDataEntity?.value ?? 0, total) / 100
            }}
            className={styles.ratioChart__item}
            title={`${ratioDataEntity.name}: ${ratioDataEntity.value}`}
          />
        ))}
      </div>
    </article>
  )
}

export default memo(RatioChart)