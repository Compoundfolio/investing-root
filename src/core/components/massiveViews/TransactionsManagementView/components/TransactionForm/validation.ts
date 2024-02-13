import { object, string, number } from "yup"

// TODO: Group solution?
const validation = () =>
  object().shape({
    transactionType: object().required("Please, select transaction type"),
    assetSearchNameOrTicker: string().required("Please, select asset"),
    assignedBrokerage: string().required("Please, select brokerage"),
    operationType: string().required("Please, provide operation type"),

    // Shared
    sharesAmount: number().when("transactionType", {
      is: (transactionType) => transactionType === "TRADE",
      then: () => number().required("Please, provide shares amount"),
    }),
    fee: number().required("Please, provide operation fee"),

    // Trade
    sharePrice: number().required("Please, provide share price"),

    // Div
    dividendPerShare: number().required("Please, provide dividend per. share"),
    taxPercentage: number().required("Please, provide tax"),

    // Div tax
    dividendTaxValue: number().required("Please, provide tax value"),
    dividendTaxPercentage: number().required("Please, provide tax rate"),

    // F-W
    transferValue: number().required("Please, provide transfer value"),

    // Common
    date: string().required("Please, provide operation date"),
  })

export default validation
