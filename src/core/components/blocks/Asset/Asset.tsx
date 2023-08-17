import React, { memo } from 'react'
import { Exchange, Ticker } from 'src/core/types'

interface IAsset {
  title: string | undefined
  ticker: Ticker | undefined
  exchange: Exchange | undefined
  exchangeCountry: string | undefined // TODO: add Country -kind type
}

// TODO: Skeleton
const Asset = ({
  title,
  ticker,
  exchange,
  exchangeCountry,
}: IAsset) => {
  return (
    <div className='flex gap-4'>
      <div className='relative flex items-center justify-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="url(#paint0_linear_426_12436)" />
          <defs>
            <linearGradient id="paint0_linear_426_12436" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
              <stop stop-color="#D9D9D9" />
              <stop offset="1" stop-color="#0F6F72" />
            </linearGradient>
          </defs>
        </svg>
        <span className='absolute translate-x-1/2 translate-y-1/2 top-1/2 left-1/2'>
          {ticker}
        </span>
      </div>
      <div className='flex flex-col gap-1'>
        <span>{title}</span>
        <span>{ticker} {exchange}({exchangeCountry})</span>
      </div>
    </div>
  )
}

export default memo(Asset)