"use client"

import { memo, ChangeEvent } from 'react'
import { Input } from 'src/core/client'

interface IPortfolioNameChanger {
  currentPortfolioTitle: string
  newPortfolioName: string,
  handleTitleChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const PortfolioNameChanger = ({
  currentPortfolioTitle,
  newPortfolioName,
  handleTitleChange,
}: IPortfolioNameChanger) => {
  return (
    <div className='flex flex-col justify-center w-full'>
      {/* TODO: 30 symbols validation */}
      <Input
        required
        labelText="New name"
        name="portfolioName"
        className='w-full'
        withMb={false}
        contentCentered
        value={newPortfolioName}
        onChange={handleTitleChange}
      />
      <span className="block text-center subTitle" style={{ marginTop: 32 }}>
        {currentPortfolioTitle} {`->`} {newPortfolioName}
      </span>
    </div>
  )
}

export default memo(PortfolioNameChanger)