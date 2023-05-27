import React, { memo } from 'react'
import { useDropzone } from 'react-dropzone'
import { StyledDndContainer, StyledDndTitle, StyledDndTitleSub } from './styled'
import { NonTradeTransaction, Transaction, getBrokerageClassByBrandName } from '@core';
import { useState } from 'react';
import Brokerage from 'src/inversions/brokerages/Brokerage';
import { IDndFileArea } from './__types__';
import { useBrokeragesData } from 'src/store';
import { UploadMetrixCards } from './components';

export default memo(function DndFileArea({
  selectedBrokerageName,
}: IDndFileArea) {
  const [tradeTransactions, setTradeTransactions] = useState<Transaction[]>([])
  const [nonTradeTransactions, setNonTradeTransactions] = useState<NonTradeTransaction[]>([])
  const { addBrokerageEntity } = useBrokeragesData()

  // TODO: Hide the implementation, it's too massive to have it inside component
  const onDrop = (acceptedFiles: File[]) => {
    const inputFile = acceptedFiles[0]
    const reader = new FileReader()

    reader.onload = function (e: any) {
      const unparsedReport: string = e.target.result
      // TODO: Add loader ?
      const SelectedBrokerage = getBrokerageClassByBrandName(selectedBrokerageName)

      if (SelectedBrokerage) {
        const newBrokerageDataEntity = new Brokerage(SelectedBrokerage, unparsedReport)
        addBrokerageEntity(newBrokerageDataEntity)
        setTradeTransactions(newBrokerageDataEntity.getTradeTransactions())
        setNonTradeTransactions(newBrokerageDataEntity.getNonTradeTransactions())
      } else {
        console.error(`Can't find brokerage by brokerageName = ${selectedBrokerageName}`)
      }
    }

    reader.readAsText(inputFile)
  }

  const {
    getRootProps,
    getInputProps,
  } = useDropzone({ onDrop })

  return <>
    {/* TODO: Make upload area kinda fixed */}
    {/* TODO: Pass to reusable <DndFileUploadArea /> component */}
    <StyledDndContainer {...getRootProps()}>
      {/* TODO: Add CSV file validation */}
      <input accept="csv" {...getInputProps()} />
      <StyledDndTitle>Drag & drop the CSV report from your brokerage or</StyledDndTitle>
      <StyledDndTitleSub>browse it</StyledDndTitleSub>
    </StyledDndContainer>
    {(!!tradeTransactions.length || !!nonTradeTransactions.length) && (
      <UploadMetrixCards
        tradesAmount={tradeTransactions.length}
        nonTradesAmount={nonTradeTransactions.length}
      />
    )}
  </>
})
