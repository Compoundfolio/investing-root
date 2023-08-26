"use client"

import {
  ActButton,
  AreYouSureModal,
  EmptySelectedPortfolioAreaState,
  ModalBlur,
  PortfolioBrokerage,
  PortfolioCard,
  PortfolioCardContent,
  SectionHead,
  SkeletonRectangle,
  TransactionsManagementView,
  updateObjectFromArrayOfObjects,
  useFadeInOutMountAnimation,
} from "@core"
import React, { ChangeEvent, memo, useCallback } from "react"
import { BrokerageMultiSelector, PortfolioNameArea, TransactionsUploadResults } from "./components"
import TransactionsUploadArea from "./components/TransactionsUploadArea/TransactionsUploadArea"
import styles from "./PortfolioManagementArea.module.css"
import usePortfolioManagerContext from "../../context/PortfolioManagerContextData/hook"
import clsx from "clsx"
import { Portfolio } from "../../../../../core/types/assets/common/Portfolio"
import { useOpen } from 'src/core/hooks';

const PortfolioManagementArea = () => {
  const { selectedPortfolioCard, updateSelectedPortfolio } = usePortfolioManagerContext()
  const [isTransactionsModalOpen, handleTransactionsModalOpen] = useOpen()
  const [isDeletePortfolioModalOpen, handleIsDeletePortfolioModalOpen] = useOpen()

  const isAnyPortfolioSelected = !!selectedPortfolioCard?.id

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
    <section className="relative flex justify-between w-full h-full gap-20">
      <div className={clsx(styles.container, "gap-16")}>
        {isAnyPortfolioSelected ? <>
          <PortfolioNameArea
            name={selectedPortfolioCard.title}
            openTransactionsManagementModal={handleTransactionsModalOpen}
            openPortfolioRenameModal={() => {}}
            openPortfolioDeleteApprovalModal={handleIsDeletePortfolioModalOpen}
          />
          {/* <Input
            value={selectedPortfolioCard?.title ?? ""}
            labelText="Portfolio name"
            onChange={handlePortfolioNameChange}
            name="portfolioName"
            helpText="Shouldn't be longer then 30 symbols."
            withMb={false}
          /> */}
          {/* <ActButton
            color="primary"
            onClick={handleTransactionsModalOpen}
          >
            Manage transactions
          </ActButton> */}
          <BrokerageMultiSelector
            selectedBrokerageOptions={selectedPortfolioCard?.brokerages}
            setSelectedBrokerageOptions={updateSelectedPortfolio}
            selectionSideEffect={causeContentFadeEffect}
          />
        </> : (
          <SkeletonRectangle />
        )}
      </div>
      <div className={styles.container}>
        {isAnyPortfolioSelected ? <>
          <SectionHead title="Transactions upload" />
          {shouldRenderReportsUploadArea && (
            <TransactionsUploadArea
              contentAnimation={contentAnimation}
              selectedBrokerageOptions={selectedPortfolioCard?.brokerages!}
              createHandleFileUpload={createHandleFileUpload}
            />
          )}
        </> : (
          <SkeletonRectangle />
        )}
      </div>
      <div className={styles.container}>
        {isAnyPortfolioSelected ? <>
          <SectionHead title="Transactions upload" />
          <SectionHead title="Results" />
          {!!selectedPortfolioCard?.brokerages[0]?.uploadedTransactionList.length && (
            <TransactionsUploadResults
              selectedBrokerageOptions={selectedPortfolioCard?.brokerages!}
            />
          )}
        </> : (
          <SkeletonRectangle />
        )}
      </div>
      {!isAnyPortfolioSelected && <EmptySelectedPortfolioAreaState />}
    </section>
    <ModalBlur
      noMaxWidth
      isOpen={isTransactionsModalOpen && isAnyPortfolioSelected}
      handleOpenChange={handleTransactionsModalOpen}
    >
      <TransactionsManagementView />
    </ModalBlur>
    <AreYouSureModal
      isOpen={isDeletePortfolioModalOpen}
      title="Permanently delete this portfolio?"
      handleModalOpenStatus={handleIsDeletePortfolioModalOpen}
    >
      <PortfolioCard isSelected={true}>
        <PortfolioCardContent
          title={selectedPortfolioCard?.title!}
          totalReturnValue={selectedPortfolioCard?.totalReturnValue!}
          totalReturnPercentage={
            selectedPortfolioCard?.totalReturnPercentage!
          }
          annualIncome={selectedPortfolioCard?.annualIncome!}
        />
      </PortfolioCard>
    </AreYouSureModal>
  </>
}

export default memo(PortfolioManagementArea)
