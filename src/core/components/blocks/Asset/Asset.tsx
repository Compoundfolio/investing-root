import React, { memo } from 'react'
import { Exchange, Ticker, TransactionHandlingType } from 'src/core/types'
import styles from "./Asset.module.css"
import clsx from 'clsx';
import Image from 'next/image';

interface IAsset {
  title: string | undefined
  ticker: Ticker | undefined
  exchange: Exchange | undefined
  exchangeCountry: string | undefined // TODO: add Country -kind type
  handlingType?: TransactionHandlingType
  assetLogoUrl?: string
}

// TODO: Skeleton
const Asset = ({
  title,
  ticker,
  exchange,
  exchangeCountry,
  handlingType,
  assetLogoUrl,
}: IAsset) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-4 h-fit w-max',
        handlingType && [styles.handlingType, styles[`handlingType-${handlingType}`]]
      )}
    >
      {assetLogoUrl ? (
        <Image
          width={24}
          height={24}
          src={assetLogoUrl}
          alt={`${title} logo`}
        />
      ) : (
        <div className={styles.asset_undefinedLogo}>
          <span className={styles.asset_ticker}>
            {ticker}
          </span>
        </div>
      )}
      <div className='flex flex-col gap-1'>
        <span className={styles.asset_title}>{title}</span>
        <span className={styles.asset_details}>
          {ticker
            ? <>{ticker} - {exchange} - {exchangeCountry}</>
            : "Asset not selected"
          }
        </span>
      </div>
    </div>
  )
}

export default memo(Asset)