import React, { memo } from 'react'
import {useDropzone} from 'react-dropzone'
import { StyledDndContainer, StyledDndTitle, StyledDndTitleSub } from './styled'
import { Transaction, getBrokerageClassByBrandName } from '@core';
import { useState } from 'react';
import Brokerage from 'src/inversions/brokerages/Brokerage';
import { IDndFileArea } from './__types__';

export default memo(function DndFileArea({
  selectedBrokerageName,
}: IDndFileArea) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  
  // TODO: Hide the implementation, it's too massive to have it inside component
  const onDrop = (acceptedFiles: File[]) => {
    const inputFile = acceptedFiles[0]
    const reader = new FileReader()

    reader.onload = function (e: any) {
      const reportUnParsedData: string = e.target.result
      // TODO: Add loader ?
      const SelectedBrokerage = getBrokerageClassByBrandName(selectedBrokerageName)

      if (SelectedBrokerage) {
        const brokerage = new Brokerage(new SelectedBrokerage(reportUnParsedData))
        setTransactions(brokerage.getAllTransactions())
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
  
  return (
    // TODO: Pass to reusable <DndFileUploadArea /> component
    <StyledDndContainer {...getRootProps()}>
      <input {...getInputProps()} />
      <StyledDndTitle>Drag & drop the CSV report from your brokerage or</StyledDndTitle>
      <StyledDndTitleSub>browse it</StyledDndTitleSub>
      {!!transactions && transactions.length}
    </StyledDndContainer>
  )
})
