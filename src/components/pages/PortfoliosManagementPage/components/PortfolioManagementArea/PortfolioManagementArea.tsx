"use client"

import { Option, Portfolio, useFadeInOutMountAnimation } from '@core'
import React, { memo, useEffect, useState } from 'react'
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
    shouldRenderChild,
    contentAnimation,
    causeContentFadeEffect,
  } = useFadeInOutMountAnimation()

  // useEffect(() => {
  //   if ((selectedBrokerageOptions.length === 0) || (selectedBrokerageOptions.length === 1 && !shouldRenderChild)) {
  //     alert(1)
  //     causeContentFadeEffect()
  //   }
  // }, [selectedBrokerageOptions])
console.log(shouldRenderChild, contentAnimation);

  return (
    <section className='flex justify-between w-full gap-16'>
      <BrokerageMultiSelector
        selectedBrokerageOptions={selectedBrokerageOptions}
        setSelectedBrokerageOptions={setSelectedBrokerageOptions}
        selectionSideEffect={causeContentFadeEffect}
      />
      {/* {!!selectedBrokerageOptions.length && shouldRenderChild && <> */}
      {shouldRenderChild && <>
        <TransactionsUploadArea contentAnimation={contentAnimation} />
        {/* <TransactionsUploadResults /> */}
      </>}
    </section>
  )
}

export default memo(PortfolioManagementArea)