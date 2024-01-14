"use client"

import React, { InputHTMLAttributes } from "react"
import { useFileUpload, useHoverViewMode } from "./hooks"
import styles from "./FileUploadArea.module.css"
import { UploadedFileRepresentation } from "./components"
import clsx from "clsx"
import { AddIcon } from "../../icons"
import { colors } from "src/core/theme"

export interface IFileUploadArea {
  title: string
  acceptFiles?: InputHTMLAttributes<HTMLInputElement>["accept"]
  index?: number
  handleFileUpload: (file: File) => void
}

const FileUploadArea = ({
  title,
  acceptFiles,
  index = 1,
  handleFileUpload,
}: IFileUploadArea) => {
  const {
    file,
    userFriendlyFileMbSize,
    fileUploadInputNodeRef,
    reuploadFile,
    getRootProps,
    getInputProps,
  } = useFileUpload(handleFileUpload)

  const { isActButtonsShowed, showOnHoverView, hideOnHoverView } =
    useHoverViewMode(!!file)

  return (
    <button
      onMouseEnter={showOnHoverView}
      onMouseLeave={hideOnHoverView}
      className={styles.fileUploadArea__wrapper}
      {...getRootProps()}
    >
      {file ? (
        <section
          className={clsx(
            styles.fileUploadArea__plateSection,
            isActButtonsShowed && styles.fileUploadArea__plateSection_hovered
          )}
        >
          {isActButtonsShowed ? (
            <div>
              <button
                className={styles.fileUploadArea__actButton}
                onClick={reuploadFile}
              >
                Reupload
              </button>
            </div>
          ) : (
            <UploadedFileRepresentation
              index={index}
              fileName={file.name}
              userFriendlyFileSize={userFriendlyFileMbSize}
            />
          )}
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <input
            accept={acceptFiles}
            ref={fileUploadInputNodeRef}
            {...getInputProps()}
          />
          <AddIcon color={colors.darkGreen} />
          <p className={styles.fileUploadArea__title}>{title}</p>
        </div>
      )}
    </button>
  )
}

export default FileUploadArea
