import { FileUploadArea, Option } from "@core"
import React, { memo, useEffect } from "react"
import styles from "./ReportsUploadArea.module.css"

interface IReportsUploadArea {
  uploadedReports: string[]
  selectedBrokerages: Option[]
  createHandleFileUpload: (brokerage: Option) => (file: File) => void
  disableContinueButton: React.Dispatch<React.SetStateAction<boolean>>
}

const ReportsUploadArea = ({
  uploadedReports,
  selectedBrokerages,
  createHandleFileUpload,
  disableContinueButton,
}: IReportsUploadArea) => {
  useEffect(() => {
    const disableButton = !(
      uploadedReports.length === selectedBrokerages.length
    )
    disableContinueButton(disableButton)
  }, [uploadedReports, selectedBrokerages])

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
            {selectedBrokerageOption.icon}
            <span className={styles.reportUpload__item_brokerageName}>
              {selectedBrokerageOption.label}
            </span>
          </div>
          <FileUploadArea
            title="Upload report"
            index={index + 1}
            handleFileUpload={createHandleFileUpload(selectedBrokerageOption)}
          />
          {/* TODO: Upload date */}
        </article>
      ))}
    </section>
  )
}

export default memo(ReportsUploadArea)
