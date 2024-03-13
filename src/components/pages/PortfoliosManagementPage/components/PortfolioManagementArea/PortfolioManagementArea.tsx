"use client"

import {
  AreYouSureModal,
  EmptySelectedPortfolioAreaState,
  ModalBlur,
  PortfolioBrokerage,
  SectionHead,
  SkeletonRectangle,
  TransactionsManagementView,
  updateObjectFromArrayOfObjects,
  useFadeInOutMountAnimation,
} from "@core"
import React, { memo, useCallback } from "react"
import {
  BrokerageMultiSelector,
  PortfolioNameArea,
  PortfolioNameChanger,
  TransactionsUploadResults,
} from "./components"
import TransactionsUploadArea from "../InitialTransactionsUploadExperience/experiences/BrokerageReportUploadStepper/components/stepContent/ReportsUploadArea/ReportsUploadArea"
import styles from "./PortfolioManagementArea.module.css"
import usePortfolioManagerContext from "../../context/PortfolioManagerContextData/hook"
import clsx from "clsx"
import { useOpen } from "src/core/hooks"
import {
  portfolioDeleteAgreement,
  uploadAreaDescription,
  uploadResultDescription,
} from "./consts"
import { usePortfolioName } from "./hooks"
import Services from "src/services"

const PortfolioManagementArea = () => {
  const {
    selectedPortfolioCard,
    updateSelectedPortfolio,
    deleteSelectedPortfolio,
  } = usePortfolioManagerContext()

  const { newPortfolioName, handleTitleChange, savePortfolioTitleChange } =
    usePortfolioName(updateSelectedPortfolio, selectedPortfolioCard)

  const { mutate: deletePortfolio } = Services.User.Portfolios.useDeleteById(
    deleteSelectedPortfolio
  )

  const isAnyPortfolioSelected = !!selectedPortfolioCard?.id

  const [isTransactionsModalOpen, handleTransactionsModalOpen] = useOpen()
  const [isDeletePortfolioModalOpen, handleIsDeletePortfolioModalOpen] =
    useOpen()
  const [isPortfolioNameChangeModalOpen, handleIsPortfolioNameChangeModalOpen] =
    useOpen()

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

  return (
    <>
      <section className="relative flex justify-between w-full h-full gap-20">
        <div className={clsx(styles.container, "gap-16")}>
          {isAnyPortfolioSelected ? (
            <>
              <PortfolioNameArea
                name={selectedPortfolioCard.title}
                openTransactionsManagementModal={handleTransactionsModalOpen}
                openPortfolioRenameModal={handleIsPortfolioNameChangeModalOpen}
                openPortfolioDeleteApprovalModal={
                  handleIsDeletePortfolioModalOpen
                }
              />
              <BrokerageMultiSelector
                selectedBrokerageOptions={selectedPortfolioCard?.brokerages}
                setSelectedBrokerageOptions={updateSelectedPortfolio}
                selectionSideEffect={causeContentFadeEffect}
              />
            </>
          ) : (
            <SkeletonRectangle />
          )}
        </div>
        <div className={styles.container}>
          {isAnyPortfolioSelected ? (
            <>
              <SectionHead
                title="Transactions upload"
                dataVisDescription={uploadAreaDescription}
              />
              {shouldRenderReportsUploadArea && (
                <TransactionsUploadArea
                  contentAnimation={contentAnimation}
                  selectedBrokerageOptions={selectedPortfolioCard?.brokerages!}
                  createHandleFileUpload={createHandleFileUpload}
                />
              )}
            </>
          ) : (
            <SkeletonRectangle />
          )}
        </div>
        <div className={styles.container}>
          {isAnyPortfolioSelected ? (
            <>
              <SectionHead
                title="Results"
                dataVisDescription={uploadResultDescription}
              />
              {!!selectedPortfolioCard?.brokerages[0]?.uploadedTransactionList
                .length && (
                <TransactionsUploadResults
                  selectedBrokerageOptions={selectedPortfolioCard?.brokerages!}
                />
              )}
            </>
          ) : (
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
        title="Permanently delete this portfolio?"
        isOpen={isDeletePortfolioModalOpen}
        selectedPortfolioCard={selectedPortfolioCard}
        sureAgreement={portfolioDeleteAgreement}
        handleModalOpenStatus={handleIsDeletePortfolioModalOpen}
        actionToCall={() => deletePortfolio({ id: selectedPortfolioCard?.id! })}
      />
      <AreYouSureModal
        title="Update portfolio name"
        subTitle="Shouldn't be longer then 30 symbols."
        portfolioChangedTitle={newPortfolioName}
        isOpen={isPortfolioNameChangeModalOpen}
        selectedPortfolioCard={selectedPortfolioCard}
        handleModalOpenStatus={handleIsPortfolioNameChangeModalOpen}
        actionToCall={savePortfolioTitleChange}
      >
        <PortfolioNameChanger
          currentPortfolioTitle={selectedPortfolioCard?.title!}
          newPortfolioName={newPortfolioName}
          handleTitleChange={handleTitleChange}
        />
      </AreYouSureModal>
    </>
  )
}

export default memo(PortfolioManagementArea)
