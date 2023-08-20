import React, { memo } from 'react'
import { Exchange, Ticker } from 'src/core/types'
import styles from "./Asset.module.css"

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
    <div className='flex items-center gap-4 h-fit'>
      <div className={styles.asset_undefinedLogo}>
        <span className={styles.asset_ticker}>
          {ticker}
        </span>
      </div>
      <div className='flex flex-col gap-1'>
        <span className={styles.asset_title}>{title}</span>
        <span className={styles.asset_details}>
          {ticker
            ? <><b>{ticker}</b> - {exchange} - {exchangeCountry}</>
            : "Asset not selected"
          }
          
        </span>
      </div>
    </div>
  )
}

export default memo(Asset)