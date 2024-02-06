import { object, string, number } from "yup"

const validation = () =>
  object().shape({
    transactionType: object().required("Please, provide asset type"),
    assetSearchNameOrTicker: string().required("Please, provide asset name"),
    operationType: string().required("Please, provide operation type"),
    amount: number().required("Please, provide asset amount"),
    price: number().required("Please, provide one asset price"),
    fee: number().required("Please, provide operation fee"),
    date: string().required("Please, provide operation date"),
  })

export default validation
