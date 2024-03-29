import { FileUploadArea, ID, Option, Spinner } from "@core"
import React, { memo, useCallback, useEffect } from "react"
import styles from "./ReportsUploadArea.module.css"
import Services from "src/services"
import { useIsMutating } from "@tanstack/react-query"
import { transactionsUploadQk } from "src/services/user"

interface IReportsUploadArea {
  uploadedReports: string[]
  selectedBrokerages: Option[]
  selectedPortfolioId: ID
  createHandleFileUpload: (brokerage: Option) => (file: File) => void
  disableContinueButton: React.Dispatch<React.SetStateAction<boolean>>
}

const ReportsUploadArea = ({
  uploadedReports,
  selectedBrokerages,
  selectedPortfolioId,
  createHandleFileUpload,
  disableContinueButton,
}: IReportsUploadArea) => {
  useEffect(() => {
    const disableButton = !(
      uploadedReports.length === selectedBrokerages.length
    )
    disableContinueButton(disableButton)
  }, [uploadedReports, selectedBrokerages])

  const { mutate: uploadBrokerageReport } =
    Services.User.Transactions.useUpload()

  const isUploading = useIsMutating({
    mutationKey: [transactionsUploadQk],
    exact: true,
  })

  const handleFileUpload = useCallback(
    (selectedBrokerageOption: Option) => (file: File) => {
      const formData = new FormData()
      // formData.append("brokerage", selectedBrokerageOption.label.toUpperCase())
      // formData.append("portfolioId", `${selectedPortfolioId}`)
      formData.append("file", file)
      // brokerage
      // @ts-ignore
      uploadBrokerageReport({
        upload: { file: formData },
        brokerage: "EXANTE",
        portfolioId: selectedBrokerageOption.id as string,
      })
    },
    [selectedPortfolioId]
  )

  return (
    <section className="flex gap-9">
      {selectedBrokerages.map((selectedBrokerageOption, index) => (
        <article
          className="flex flex-col gap-6"
          key={selectedBrokerageOption.value}
        >
          <div
            className="flex items-center gap-2"
            aria-description={`${selectedBrokerageOption.label} brokerage report upload area`}
          >
            {selectedBrokerageOption?.icon?.()}
            <span className={styles.reportUpload__item_brokerageName}>
              {selectedBrokerageOption.label}
            </span>
          </div>
          <FileUploadArea
            title="Upload report"
            index={index + 1}
            handleFileUpload={handleFileUpload(selectedBrokerageOption)}
          />
          {/* TODO: Upload date */}
          {!!isUploading && <Spinner />}
        </article>
      ))}
    </section>
  )
}

export default memo(ReportsUploadArea)
