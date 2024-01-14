import React from "react"
import styles from "./UploadedFileRepresentation.module.css"
import { FileIcon } from "src/core/components/icons"

interface IUploadedFileRepresentation {
  userFriendlyFileSize: string
  fileName: string
  index?: number
}

const UploadedFileRepresentation = ({
  userFriendlyFileSize,
  fileName,
  index = 1,
}: IUploadedFileRepresentation) => {
  return (
    <div className={styles.fileRepresentation__wrapper}>
      <div className="flex items-center justify-between">
        <span>{index} //</span>
        <span>{userFriendlyFileSize}</span>
      </div>
      <div className="flex items-center justify-center">
        <FileIcon />
      </div>
      <span className="break-words">{fileName}</span>
    </div>
  )
}

export default UploadedFileRepresentation
