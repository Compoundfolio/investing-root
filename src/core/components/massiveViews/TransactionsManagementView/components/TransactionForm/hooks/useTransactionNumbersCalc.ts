import { parseNumberToFixed2 } from "@core/helpers"
import { useMemo } from "react"
import { defaultFormValues } from "../const"

interface IUseTransactionNumbersCalc {
  values: typeof defaultFormValues
}

export const useTransactionNumbersCalc = ({
  values,
}: IUseTransactionNumbersCalc) => {
  const isBuy = values.operationType === "BUY"

  const transactionTotal = useMemo(() => {
    const positionPrice = (Number(values.amount || 0) * Number(values.price || 0))
    return isBuy
      ? positionPrice + Number(values.fee || 0)
      : positionPrice - Number(values.fee || 0)
  }, [values.amount, values.price, values.fee, isBuy])

  // TODO: server request
  const getAvailableBuyingPower = () => 10000

  const availableBuyingPower = getAvailableBuyingPower()

  const availableBuyingPowerLeft = availableBuyingPower - transactionTotal

  const totalNumber = parseNumberToFixed2(isBuy ? transactionTotal : -transactionTotal)!

  const isBuyingPowerLeftNegative = availableBuyingPowerLeft < 0

  return {
    transactionTotal,
    totalNumber,
    availableBuyingPower,
    availableBuyingPowerLeft,
    isBuyingPowerLeftNegative
  }
}