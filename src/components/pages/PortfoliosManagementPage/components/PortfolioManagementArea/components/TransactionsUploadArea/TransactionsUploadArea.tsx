import { Collapsible, Option } from '@core'
import React, { memo } from 'react'
import FileUploadArea from '../../../../../../../core/components/blocks/FileUploadArea/FileUploadArea';

interface ITransactionsUploadArea {
  contentAnimation: { animation: string }
  selectedBrokerageOptions: Option[]
  handleFileUpload: (file: File) => void
}

const TransactionsUploadArea = ({
  contentAnimation,
  selectedBrokerageOptions,
  handleFileUpload,
}: ITransactionsUploadArea) => {
  return (
    <div className='flex flex-col gap-6' style={contentAnimation}>
      {selectedBrokerageOptions.map(selectedBrokerageOption => (
        <Collapsible
          key={selectedBrokerageOption.id}
          openByDefault
          title={selectedBrokerageOption.label}
        >
          <FileUploadArea
            title="Upload report"
            handleFileUpload={handleFileUpload}
          />
        </Collapsible>
      ))}
    </div>
  )
}

export default memo(TransactionsUploadArea)