import { Collapsible, PortfolioBrokerage } from '@core'
import React, { memo } from 'react'
import FileUploadArea from '../../../../../../../core/components/blocks/FileUploadArea/FileUploadArea';

interface ITransactionsUploadArea {
  contentAnimation: { animation: string }
  selectedBrokerageOptions: PortfolioBrokerage[]
  createHandleFileUpload: (brokerage: PortfolioBrokerage) => (file: File) => void
}

const TransactionsUploadArea = ({
  contentAnimation,
  selectedBrokerageOptions,
  createHandleFileUpload,
}: ITransactionsUploadArea) => {

  return (
    <div className='flex flex-col gap-6' style={contentAnimation}>
      {selectedBrokerageOptions.map(selectedBrokerageOption => (
        <Collapsible
          key={selectedBrokerageOption.id}
          openByDefault
          title={selectedBrokerageOption.title}
        >
          <FileUploadArea
            title="Upload report"
            handleFileUpload={createHandleFileUpload(selectedBrokerageOption)}
          />
        </Collapsible>
      ))}
    </div>
  )
}

export default memo(TransactionsUploadArea)