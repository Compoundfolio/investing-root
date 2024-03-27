import { Portfolio as GqlSchemaPortfolioType } from "src/services/user"
import { ID } from "../../ids"

export type PortfolioBrokerage = {
  id: ID
  title: Portfolio
  logoSrcLink: string
  uploadedTransactionList: Transaction[]
}

export type Portfolio = GqlSchemaPortfolioType
