"use client"

import React, { InputHTMLAttributes } from 'react'
import { useFileUpload, useHoverViewMode } from './hooks'
import styles from './FileUploadArea.module.css'
import { UploadedFileRepresentation } from './components'

export interface IFileUploadArea {
  title: string
  handleFileUpload: (file: File) => void
  acceptFiles: InputHTMLAttributes<HTMLInputElement>["accept"]
}

const FileUploadArea = ({
  title,
  handleFileUpload,
  acceptFiles,
}: IFileUploadArea) => {

  const {
    file,
    userFriendlyFileMbSize,
    fileUploadInputNodeRef,
    reuploadFile,
    getRootProps,
    getInputProps,
  } = useFileUpload(handleFileUpload)

  const {
    isActButtonsShowed,
    showOnHoverView,
    hideOnHoverView
  } = useHoverViewMode(!!file)

  return (
    <button
      onMouseEnter={showOnHoverView}
      onMouseLeave={hideOnHoverView}
      className={styles.fileUploadArea__wrapper}
      {...getRootProps()}
    >
      {isActButtonsShowed ? (
        <div>
          <button className={styles.fileUploadArea__actButton} onClick={reuploadFile}>
            Reupload
          </button>
        </div>
      ) : file ? (
        <UploadedFileRepresentation
          fileName={file.name}
          userFriendlyFileSize={userFriendlyFileMbSize}
        />
      ) : <>
        <input
          accept={acceptFiles}
          ref={fileUploadInputNodeRef}
          {...getInputProps()}
        />
        <p className={styles.fileUploadArea__title}>
          {title}
        </p>
      </>}
    </button>
  )
}

export default FileUploadArea