"use client"

import {
  ActButton,
  ModalBlur,
  PortfolioBrokerage,
  SectionHead,
  TransactionsManagementView,
  updateObjectFromArrayOfObjects,
  useFadeInOutMountAnimation,
} from "@core"
import React, { ChangeEvent, memo, useCallback } from "react"
import { BrokerageMultiSelector, TransactionsUploadResults } from "./components"
import TransactionsUploadArea from "./components/TransactionsUploadArea/TransactionsUploadArea"
import styles from "./PortfolioManagementArea.module.css"
import { Input } from "src/core/client"
import usePortfolioManagerContext from "../../context/PortfolioManagerContextData/hook"
import clsx from "clsx"
import { Portfolio } from "../../../../../core/types/assets/common/Portfolio"
import { useOpen } from 'src/core/hooks';

const PortfolioManagementArea = () => {
  const { selectedPortfolioCard, updateSelectedPortfolio } = usePortfolioManagerContext()
  const [ isTransactionsModalOpen, handleTransactionsModalOpen ] = useOpen()

  const {
    shouldRenderChild: shouldRenderReportsUploadArea,
    contentAnimation,
    causeContentFadeEffect,
  } = useFadeInOutMountAnimation()

  const createHandleFileUpload = useCallback(
    (brokerage: PortfolioBrokerage) => (reportFile: File) => {
      // TODO: Request
      const uploadedTransactionList = [{}]

      updateSelectedPortfolio((prev) => ({
        ...prev!,
        brokerages: prev?.brokerages.length
          ? updateObjectFromArrayOfObjects<PortfolioBrokerage>(
              prev.brokerages,
              { ...brokerage, uploadedTransactionList },
              "id"
            )
          : [
              {
                id: Math.random(),
                title: brokerage.title,
                logoSrcLink: brokerage.logoSrcLink,
                uploadedTransactionList,
              } satisfies PortfolioBrokerage,
            ],
      }))
    },
    [selectedPortfolioCard]
  )

  const handlePortfolioNameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      updateSelectedPortfolio(
        (prev) =>
          ({
            ...prev!,
            title: e.target.value,
          } satisfies Portfolio)
      )
    },
    []
  )

  return <>
    <section className="flex justify-between w-full gap-20">
      <div className={clsx(styles.container, "gap-16")}>
        <Input
          value={selectedPortfolioCard?.title ?? ""}
          labelText="Portfolio name"
          onChange={handlePortfolioNameChange}
          name="portfolioName"
          helpText="Shouldn't be longer then 30 symbols."
          withMb={false}
        />
        <ActButton
          color="primary"
          onClick={handleTransactionsModalOpen}
        >
          Manage transactions
        </ActButton>
        <BrokerageMultiSelector
          selectedBrokerageOptions={selectedPortfolioCard?.brokerages}
          setSelectedBrokerageOptions={updateSelectedPortfolio}
          selectionSideEffect={causeContentFadeEffect}
        />
      </div>
      <div className={styles.container}>
        <SectionHead title="Transactions upload" />
        {shouldRenderReportsUploadArea && (
          <TransactionsUploadArea
            contentAnimation={contentAnimation}
            selectedBrokerageOptions={selectedPortfolioCard?.brokerages!}
            createHandleFileUpload={createHandleFileUpload}
          />
        )}
      </div>
      <div className={styles.container}>
        <SectionHead title="Results" />
        {!!selectedPortfolioCard?.brokerages[0]?.uploadedTransactionList.length && (
          <TransactionsUploadResults
            selectedBrokerageOptions={selectedPortfolioCard?.brokerages!}
          />
        )}
      </div>
    </section>
    <ModalBlur
      noMaxWidth
      isOpen={isTransactionsModalOpen}
      handleOpenChange={handleTransactionsModalOpen}
    >
      <TransactionsManagementView  />
    </ModalBlur>
  </>
}

export default memo(PortfolioManagementArea)
