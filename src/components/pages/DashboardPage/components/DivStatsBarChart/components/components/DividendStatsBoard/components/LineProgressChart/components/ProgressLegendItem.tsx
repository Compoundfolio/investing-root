import React from 'react'

interface IProgressLegendItem {
  name: string
  percentage: number
}

const ProgressLegendItem = ({
  name,
  percentage,
}: IProgressLegendItem) => {
  return (
    <div className='flex gap-4'>
      <div className='h-1 w-7 rounded-xl' />
      <div className='flex flex-col gap-1'>
        <span>{name}</span>
        <span>{percentage}</span>
      </div>
    </div>
  )
}

export default ProgressLegendItem