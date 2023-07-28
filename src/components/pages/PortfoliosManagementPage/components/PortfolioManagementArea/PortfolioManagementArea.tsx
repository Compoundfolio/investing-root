"use client"

import { Option, Portfolio, useFadeInOutMountAnimation } from '@core'
import React, { memo, useCallback, useEffect, useState } from 'react'
import { BrokerageMultiSelector } from './components'
import TransactionsUploadArea from './components/TransactionsUploadArea/TransactionsUploadArea'

interface IPortfolioManagementArea {
  portfolio: Portfolio
}

const PortfolioManagementArea = ({
  portfolio,
}: IPortfolioManagementArea) => {
  const [ selectedBrokerageOptions, setSelectedBrokerageOptions ] = useState<Option[]>([])

  const {
    shouldRenderChild: shouldRenderReportsUploadArea,
    contentAnimation,
    causeContentFadeEffect,
  } = useFadeInOutMountAnimation()

  const handleFileUpload = useCallback((reportFile: File) => {
    
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
        {/* <div style={contentAnimation}>
         <p>Test</p>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>
          <p>Test</p>

        </div> */}
        {/* <div /> */}
        {/* <TransactionsUploadResults /> */}
      </>}
    </section>
  )
}

export default memo(PortfolioManagementArea)