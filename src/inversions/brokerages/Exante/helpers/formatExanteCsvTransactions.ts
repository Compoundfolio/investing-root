import { Transaction } from "src/core/types"
import { ExanteCsvData } from "../__types__"
// TODO:
const formatExanteCsvTransactions = (csvData: ExanteCsvData): Transaction[] => {
  let compaundfolioTransactions: Transaction[] = []

  for (const exanteTransaction of csvData) {
    compaundfolioTransactions.push({
      id: 1, // TODO: Generate id
      type: exanteTransaction.Type,
      time: exanteTransaction.Time ?? exanteTransaction.Type ?? exanteTransaction["Value Date"],
      currency: exanteTransaction.Currency,
      orderAssetType?: exanteTransaction.Type,
      orderAmount?: exanteTransaction.Quantity,
      ticker: exanteTransaction["Symbol ID"],
      stockExchange: exanteTransaction["Symbol ID"],
      commission: exanteTransaction.Commission, // handling COMMISION || DIVTAX will be fun ... 
      orderPrice: exanteTransaction.Price,
      operation: exanteTransaction.Side, // byu/sell
    })
  } 

  return compaundfolioTransactions
}

export default formatExanteCsvTransactions