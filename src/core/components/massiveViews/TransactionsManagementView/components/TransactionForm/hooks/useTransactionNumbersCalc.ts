import { parseNumberToFixed2, percentageOff } from "@core/helpers"
import { useMemo } from "react"
import { defaultFormValues } from "../const"
import { TransactionType } from "../types"

interface IUseTransactionNumbersCalc {
  values: typeof defaultFormValues
}

const transactionNumbersCalcHooks: Record<TransactionType, IUseCalcHook> = {
  "TRADE": ,
  "DIVIDEND": ,
  "DIVIDEND_TAX": ,
  "FEE": ,
  "FUNDING_WITHDRAWAL": ,
}

const useCalcNumbersForRegularTransaction = () => {
  return {
    transactionTotal,
  }
}

export const useTransactionNumbersCalc = ({
  values,
}: IUseTransactionNumbersCalc) => {
  const useCalc = transactionNumbersCalcHooks[values.transactionType]

  const trade = () => {
    const isBuy = values.operationType === "BUY"
    const positionPrice = (Number(values.sharesAmount || 0) * Number(values.sharePrice || 0))
    return isBuy
      ? positionPrice + Number(values.fee || 0)
      : positionPrice - Number(values.fee || 0)
  }

  const dividend = () => {
    const isBuy = values.operationType === "BUY"
    const dividendBeforeTax = (Number(values.sharesAmount || 0) * Number(values.dividendPerShare || 0))
    const dividendAfterTax = percentageOff(dividendBeforeTax, values.dividendTaxPercentage || 0)
    const dividendTaxValue = dividendBeforeTax - dividendAfterTax
    return {
      transactionTotal: dividendTaxValue,
      sub: dividendTaxValue,
    }
  }



  // const transactionTotal = useMemo(, [values.sharesAmount, values.sharesAmount, values.fee, isBuy])

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
    transactionSubResult,
    isBuyingPowerLeftNegative,
  }
}