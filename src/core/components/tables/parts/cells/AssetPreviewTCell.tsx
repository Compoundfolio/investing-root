import React, { memo } from 'react'
import TCell from '../TCell'
import Image from 'next/image'
import { colors } from 'src/core/theme'
import styled from '@emotion/styled';
import { Ticker } from 'src/core/types';

interface IAssetPreviewTCell {
  logoSrc: string
  ticker: Ticker
  assetFullName: string
  sharesAmount: number
}

const commonStyles = {
  fontSize: 14,
  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
} as const

const StyledAssetName = styled.span({
  ...commonStyles,
  fontWeight: 700,
  "& > span": {
    fontWeight: 400,
  }
})

const StyledSharesAmount = styled.span({
  ...commonStyles,
  color: colors.gray4C,
})

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
          <Image  
            width={32}
            height={32}
            src={logoSrc} 
            alt='Logo'
          />
        </div>
        <div className="flex flex-col">
          <StyledAssetName>
            {ticker} • <span>{assetFullName}</span>
          </StyledAssetName>
          <StyledSharesAmount>
            {/* TODO: Share / Shares ... */}
            {sharesAmount} shares
          </StyledSharesAmount>
        </div>
      </div>
    </TCell>
  )
}

export default memo(AssetPreviewTCell)