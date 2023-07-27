import { Collapsible, FileUploadArea, Option } from '@core'
import React, { memo } from 'react'

interface ITransactionsUploadArea {
  contentAnimation: { animation: string }
  selectedBrokerageOptions: Option[]
}

const TransactionsUploadArea = ({
  contentAnimation,
  selectedBrokerageOptions,
}: ITransactionsUploadArea) => {
  return (
    <div className='flex flex-col w-[400px] gap-6' style={contentAnimation}>
      {selectedBrokerageOptions.map(selectedBrokerageOption => (
        <Collapsible
          key={selectedBrokerageOption.id}
          openByDefault
          // title={<BrokerageTitleWithLogo />}
          title={selectedBrokerageOption.label}
        >
          <FileUploadArea
            title={selectedBrokerageOption.label}
          />
        </Collapsible>
      ))}
    </div>
  )
}

export default memo(TransactionsUploadArea)