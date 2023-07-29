import { ID } from "../../ids"

type Transaction = object

export type PortfolioBrokerage = {
  id: ID
  title: string
  logoSrcLink: string
  uploadedTransactionList: Transaction[]
}

export type Portfolio = {
  id: string
  title: string
  totalReturnValue: number
  totalReturnPercentage: number
  annualIncome: number
  brokerages: PortfolioBrokerage[]
}