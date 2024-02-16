import React, { memo } from "react"
import {
  Exchange,
  Option,
  Ticker,
  TransactionHandlingType,
} from "src/core/types"
import styles from "./Asset.module.css"
import clsx from "clsx"
import Image from "next/image"

interface IAsset {
  title: string | undefined
  ticker: Ticker | undefined
  exchange: Exchange | undefined
  exchangeCountry: string | undefined // TODO: add Country -kind type
  handlingType?: TransactionHandlingType
  assetLogoUrl?: string
  selectedBrokerageIcon: Option["icon"]
}

// TODO: Skeleton
const Asset = ({
  title,
  ticker,
  exchange,
  exchangeCountry,
  handlingType,
  assetLogoUrl,
  selectedBrokerageIcon,
}: IAsset) => {
  return (
    <div
      className={clsx(
        "flex items-center gap-4 h-fit w-max",
        handlingType && [
          styles.handlingType,
          styles[`handlingType-${handlingType}`],
        ]
      )}
    >
      <div className="relative">
        {assetLogoUrl ? (
          <Image
            width={24}
            height={24}
            src={assetLogoUrl}
            alt={`${title} logo`}
            className="z-10"
          />
        ) : (
          <div className={styles.asset_undefinedLogo}>
            <span className={styles.asset_ticker}>{ticker}</span>
          </div>
        )}
        {selectedBrokerageIcon && (
          <div className="absolute -bottom-[6px] -right-[6px] z-20">
            {selectedBrokerageIcon(12, true)}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <span className={styles.asset_title}>{title}</span>
        <span className={styles.asset_details}>
          {ticker ? (
            <>
              {ticker} - {exchange} - {exchangeCountry}
            </>
          ) : (
            "Asset not selected"
          )}
        </span>
      </div>
    </div>
  )
}

export default memo(Asset)
