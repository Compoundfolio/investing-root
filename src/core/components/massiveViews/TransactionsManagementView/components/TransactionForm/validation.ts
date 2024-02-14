import { object, string, number } from "yup"
import { TransactionType } from "./types"

const validation = (transactionType: TransactionType) =>
  object().shape({
    transactionType: object().required("Please, select transaction type"),
    assetSearchNameOrTicker: string().required("Please, select asset"),
    assignedBrokerage: string().required("Please, select brokerage"),

    ...((transactionType === "TRADE" ||
      transactionType === "FUNDING_WITHDRAWAL") && {
      operationType: string().required("Please, provide operation type"),
    }),

    ...((transactionType === "TRADE" || transactionType === "FEE") && {
      fee: number().required("Please, provide operation fee"),
    }),

    // Trade
    ...(transactionType === "TRADE" && {
      sharePrice: number().required("Please, provide share price"),
    }),

    // Div
    ...(transactionType === "DIVIDEND" && {
      dividendPerShare: number().required(
        "Please, provide dividend per. share"
      ),
      taxPercentage: number().required("Please, provide tax"),
    }),

    // Div tax
    ...(transactionType === "DIVIDEND_TAX" && {
      dividendTaxValue: number().required("Please, provide tax value"),
      dividendTaxPercentage: number().required("Please, provide tax rate"),
    }),

    // F-W
    ...(transactionType === "FUNDING_WITHDRAWAL" && {
      transferValue: number().required("Please, provide transfer value"),
    }),

    // Common
    date: string().required("Please, provide operation date"),
  })

export default validation
