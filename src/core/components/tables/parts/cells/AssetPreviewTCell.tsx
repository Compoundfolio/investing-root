import React, { memo } from "react"
import TCell from "../TCell"
import Image from "next/image"
import styles from "./AssetPreviewTCell.module.css"
import { Ticker } from "src/core/types"
import clsx from "clsx"

interface IAssetPreviewTCell {
  logoSrc: string
  ticker: Ticker
  assetFullName: string
  sharesAmount: number
}

function AssetPreviewTCell({
  ticker,
  assetFullName,
  sharesAmount,
  logoSrc,
}: IAssetPreviewTCell) {
  return (
    <TCell>
      <div className="flex items-center gap-4">
        <div>
          <Image width={32} height={32} src={logoSrc} alt="Logo" />
        </div>
        <div className="flex flex-col">
          <span
            className={clsx(
              styles.assetPreviewCell,
              styles.assetPreviewCell_assetName
            )}
          >
            {ticker} •{" "}
            <span className={styles.assetPreviewCell_assetName_fullName}>
              {assetFullName}
            </span>
          </span>
          <span
            className={clsx(
              styles.assetPreviewCell,
              styles.assetPreviewCell_sharesAmount
            )}
          >
            {/* TODO: Share / Shares ... */}
            {sharesAmount} shares
          </span>
        </div>
      </div>
    </TCell>
  )
}

export default memo(AssetPreviewTCell)
