import { colors, getPercentageDifference } from '@core'
import React from 'react'
import ProgressLegendItem from './components/ProgressLegendItem'

interface ILineProgressChart {
  lowerNumber: number
  greaterNumber: number
}

const LineProgressChart = ({
  lowerNumber,
  greaterNumber,
}: ILineProgressChart) => {

  // TODO: Add local env check
  if (lowerNumber > greaterNumber) throw new Error("")

  const percentageDifference = getPercentageDifference(greaterNumber, lowerNumber)
  const restPercentageDifference = 100 - percentageDifference
  const progressSizeStyle = { width: `${percentageDifference}%` }
  
  const t = `bg-[${colors.gold}]`

  return (
    <section className='w-full'>
      <div className='flex items-center justify-between gap-4'>
        <span>{lowerNumber}</span>
        <span>{greaterNumber}</span>
      </div>
      <div className="w-full h-[16px] bg-neutral-200 dark:bg-neutral-600 rounded-xl">
        <div className={`h-[16px] ${t} shadow-md rounded-xl`} style={progressSizeStyle} />
      </div>
      <legend className='flex gap-16'>
        <ProgressLegendItem 
          name="Payed" 
          percentage={percentageDifference} 
        />
        <ProgressLegendItem 
          name="Expected" 
          percentage={restPercentageDifference} 
        />
      </legend>
    </section>
  )
}

export default LineProgressChart