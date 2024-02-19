import { useMemo } from "react"
import { TransactionFormValues } from "../../types"
import transactionNumbersCalcs from "./transactionNumbersCalcs"

interface IUseTransactionNumbersCalc {
  values: TransactionFormValues
}

export const useTransactionNumbersCalc = ({
  values,
}: IUseTransactionNumbersCalc) => {
  const transactionType = values.transactionType?.value

  // TODO: Optimize deps
  const { transactionTotal, ...optionalNumbers } = useMemo(() => {
    const calc = transactionNumbersCalcs[transactionType]
    return calc(values)
  }, [values])

  // TODO: server request
  const availableBuyingPower = 10000
  const availableBuyingPowerLeft = availableBuyingPower - transactionTotal

  // const totalNumber = transactionType === "TRADE" ? isBuy ? transactionTotal : -transactionTotal :

  const isBuyingPowerLeftNegative = availableBuyingPowerLeft < 0

  return {
    transactionTotal,
    availableBuyingPower,
    availableBuyingPowerLeft,
    transactionSubResult: optionalNumbers?.transactionSubResult,
    isBuyingPowerLeftNegative,
  }
}
