"use client"

import { ID, Option, Portfolio, useFadeInOutMountAnimation } from '@core'
import React, { memo, useCallback, useState } from 'react'
import { BrokerageMultiSelector, TransactionsUploadResults } from './components'
import TransactionsUploadArea from './components/TransactionsUploadArea/TransactionsUploadArea'
import { flushSync } from 'react-dom'

interface IPortfolioManagementArea {
  portfolio: Portfolio
}

const PortfolioManagementArea = ({
  portfolio,
}: IPortfolioManagementArea) => {
  const [selectedBrokerageOptions, setSelectedBrokerageOptions] = useState<Option[]>([])
  const [transactionsUploadStats, setTransactionsUploadStats] = useState<boolean>(false)

  const {
    shouldRenderChild: shouldRenderReportsUploadArea,
    contentAnimation,
    causeContentFadeEffect,
  } = useFadeInOutMountAnimation()

  const handleFileUpload = useCallback((reportFile: File) => {
    setTimeout(() => {
      setTransactionsUploadStats(true)
    }, 5000)
  }, [])

  return (
    <section className='flex justify-between w-full gap-16'>
      <BrokerageMultiSelector
        selectedBrokerageOptions={selectedBrokerageOptions}
        setSelectedBrokerageOptions={setSelectedBrokerageOptions}
        selectionSideEffect={causeContentFadeEffect}
      />
      {shouldRenderReportsUploadArea && <>
        <TransactionsUploadArea
          contentAnimation={contentAnimation}
          selectedBrokerageOptions={selectedBrokerageOptions}
          handleFileUpload={handleFileUpload}
        />
        {transactionsUploadStats ? (
          <TransactionsUploadResults />
        ) : (
          <div />
        )}
      </>}
    </section>
  )
}

export default memo(PortfolioManagementArea)