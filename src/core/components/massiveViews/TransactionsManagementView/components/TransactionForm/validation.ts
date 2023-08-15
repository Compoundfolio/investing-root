import { object, string } from 'yup';

const validation = () =>
  object().shape({
    assetType: string().required("Please, provide asset type"),
    assetSearchNameOrTicker: string().required("Please, provide asset name"),
    operationType: string().required("Please, provide operation type"),
    amount: string().required("Please, provide asset amount"),
    price: string().required("Please, provide one asset price"),
    fee: string().required("Please, provide operation fee"),
    date: string().required("Please, provide operation date"),
  })

export default validation