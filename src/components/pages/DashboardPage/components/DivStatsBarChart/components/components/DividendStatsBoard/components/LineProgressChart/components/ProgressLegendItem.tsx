import React from 'react'

interface IProgressLegendItem {
  name: string
  percentage: number
  isFaded?: boolean
}

const ProgressLegendItem = ({
  name,
  percentage,
  isFaded = false,
}: IProgressLegendItem) => {
  const legendItem = isFaded ? 'progressLegendItemFaded' : 'progressLegendItem'

  return (
    <div className='flex gap-4'>
      <div className={legendItem} />
      <div className='flex flex-col gap-1'>
        <span className='progressLegendTitle'>{name}</span>
        <span className='progressLegendValue'>{percentage.toFixed(2)}%</span>
      </div>
    </div>
  )
}

export default ProgressLegendItem