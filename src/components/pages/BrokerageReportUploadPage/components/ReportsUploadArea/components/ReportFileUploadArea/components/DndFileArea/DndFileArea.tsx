import React from 'react'
import {useDropzone} from 'react-dropzone'
import { StyledDndContainer, StyledDndTitle, StyledDndTitleSub } from './styled'
import { getExanteTransactionsList } from '@core';
import { useState } from 'react';
import Brokerage from 'src/inversions/brokerages/Brokerage';

export default function DndFileArea() {
  const [transactions, setTransactions] = useState<any>([]);
  // const [UserBrokerage, setUserBrokerage] = useState<Brokerage>()
  // const [BrokerageClass, setBrokerageClass] = useState<any>();
  
  // TODO: Make it work
  const onDrop = (acceptedFiles: File[]) => {
    const inputFile = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = function (e: any) {
      const transactionsList = getExanteTransactionsList(e.target.result)
      setTransactions(transactionsList)
      // const B = BrokerageClass === "EXANTE" ? ExanteBrokerage : null
      // BrokerageClass && B && setUserBrokerage(new Brokerage(new B(transactionsList)))
    };

    reader.readAsText(inputFile);
  }

  const {
    getRootProps,
    getInputProps,
  } = useDropzone({ onDrop })
  
  return (
    <StyledDndContainer {...getRootProps()}>
      <input {...getInputProps()} />
      <StyledDndTitle>Drag & drop the CSV report from your brokerage or</StyledDndTitle>
      <StyledDndTitleSub>browse it</StyledDndTitleSub>
      {!!transactions && transactions.length}
    </StyledDndContainer>
  )
}
