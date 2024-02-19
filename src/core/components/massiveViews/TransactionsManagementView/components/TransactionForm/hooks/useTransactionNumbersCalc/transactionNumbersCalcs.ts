import { parseNumberToFixed2, percentageOff } from "@core/helpers"
import { TransactionFormValues, TransactionType } from "../../types"
import { TransactionNumberCalcFn } from "./types"

const transactionNumbersCalcs: Record<
  TransactionType,
  TransactionNumberCalcFn
> = {
  TRADE: ({
    operationType,
    sharesAmount,
    sharePrice,
    fee,
  }: TransactionFormValues) => {
    const isBuy = operationType === "BUY"
    const positionPrice = Number(sharesAmount || 0) * Number(sharePrice || 0)
    const positionPriceAfterFees = isBuy
      ? positionPrice + Number(fee || 0)
      : positionPrice - Number(fee || 0)

    return {
      transactionTotal: parseNumberToFixed2(
        isBuy ? positionPriceAfterFees : -positionPriceAfterFees
      ),
    }
  },
  DIVIDEND: ({
    sharesAmount,
    dividendPerShare,
    dividendTaxPercentage,
  }: TransactionFormValues) => {
    const dividendBeforeTax =
      Number(sharesAmount || 0) * Number(dividendPerShare || 0)

    const dividendAfterTax = percentageOff(
      dividendBeforeTax,
      dividendTaxPercentage || 0
    )
    const dividendTaxValue = dividendBeforeTax - dividendAfterTax

    return {
      transactionTotal: parseNumberToFixed2(dividendTaxValue),
      transactionSubResult: parseNumberToFixed2(dividendTaxValue),
    }
  },
  DIVIDEND_TAX: ({ dividendTaxValue }: TransactionFormValues) => {
    return {
      transactionTotal: parseNumberToFixed2(dividendTaxValue || 0),
    }
  },
  FEE: ({ fee }: TransactionFormValues) => {
    return {
      transactionTotal: parseNumberToFixed2(fee || 0),
    }
  },
  FUNDING_WITHDRAWAL: ({ transferValue }: TransactionFormValues) => {
    return {
      transactionTotal: parseNumberToFixed2(transferValue || 0),
    }
  },
}

export default transactionNumbersCalcs
