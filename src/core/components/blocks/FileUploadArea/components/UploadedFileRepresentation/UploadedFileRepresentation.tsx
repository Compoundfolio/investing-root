import React from 'react'
import styles from './UploadedFileRepresentation.module.css'
import { FileIcon } from 'src/core/components/icons'

interface IUploadedFileRepresentation {
  userFriendlyFileSize: string
  fileName: string
}

const UploadedFileRepresentation = ({
  userFriendlyFileSize,
  fileName,
}: IUploadedFileRepresentation) => {
  return (
    <div className={styles.fileRepresentation__wrapper}>
      <div className='flex items-center justify-between'>
        <span>1 //</span>
        <span>{userFriendlyFileSize}</span>
      </div>
      <div className='flex items-center justify-center'>
        <FileIcon />
      </div>
      {/* <div className={styles.fileRepresentation__divider} /> */}
      <span className='break-words'>
        {fileName}
      </span>
    </div>
  )
}

export default UploadedFileRepresentation