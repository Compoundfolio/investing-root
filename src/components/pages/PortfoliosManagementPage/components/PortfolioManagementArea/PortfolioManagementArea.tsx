"use client"

import { Option, useFadeInOutMountAnimation } from '@core'
import React, { ChangeEvent, memo, useCallback, useState } from 'react'
import { BrokerageMultiSelector, TransactionsUploadResults } from './components'
import TransactionsUploadArea from './components/TransactionsUploadArea/TransactionsUploadArea'
import styles from './PortfolioManagementArea.module.css'
import { Input } from 'src/core/client'
import { defaultPortfolioName } from './consts'
import usePortfolioManagerContext from '../../context/PortfolioManagerContextData/hook';

const PortfolioManagementArea = () => {

  const { selectedPortfolioCard } = usePortfolioManagerContext()

  const [selectedBrokerageOptions, setSelectedBrokerageOptions] = useState<Option[]>([])
  const [transactionsUploadStats, setTransactionsUploadStats] = useState<boolean>(false)
  const [portfolioName, setPortfolioName] = useState<string>(selectedPortfolioCard?.title || defaultPortfolioName)

  const {
    shouldRenderChild: shouldRenderReportsUploadArea,
    contentAnimation,
    causeContentFadeEffect,
  } = useFadeInOutMountAnimation()

  const handleFileUpload = useCallback((reportFile: File) => {
    setTimeout(() => {
      setTransactionsUploadStats(true)
    }, 1000)
  }, [])

  const handlePortfolioNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPortfolioName(e.target.value)
  }

  return (
    <section className='flex justify-between w-full gap-20'>
      <div className={styles.container}>
        <Input
          value={portfolioName}
          labelText="Portfolio name"
          onChange={handlePortfolioNameChange}
          name="portfolioName"
          helpText="Shouldn't be longer then 30 symbols."
          withMb={false}
        />
        <BrokerageMultiSelector
          selectedBrokerageOptions={selectedBrokerageOptions}
          setSelectedBrokerageOptions={setSelectedBrokerageOptions}
          selectionSideEffect={causeContentFadeEffect}
        />
      </div>
      <div className={styles.container}>
        {shouldRenderReportsUploadArea && (
          <TransactionsUploadArea
            contentAnimation={contentAnimation}
            selectedBrokerageOptions={selectedBrokerageOptions}
            handleFileUpload={handleFileUpload}
          />
        )}
      </div>
      <div className={styles.container}>
        {transactionsUploadStats && (
          <TransactionsUploadResults
            selectedBrokerageOptions={selectedBrokerageOptions}
          />
        )}
      </div>
    </section>
  )
}

export default memo(PortfolioManagementArea)