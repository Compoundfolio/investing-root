import { FileUploadArea, Option } from "@core"
import React, { memo } from "react"
import styles from "./ReportsUploadArea.module.css"

interface IReportsUploadArea {
  selectedBrokerages: Option[]
  createHandleFileUpload: (brokerage: Option) => (file: File) => void
}

const ReportsUploadArea = ({
  selectedBrokerages,
  createHandleFileUpload,
}: IReportsUploadArea) => {
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
