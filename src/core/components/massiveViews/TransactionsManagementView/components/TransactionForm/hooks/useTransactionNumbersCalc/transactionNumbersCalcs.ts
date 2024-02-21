import { parseNumberToFixed2, percentageOff } from "@core/helpers"
import { TransactionFormValues, TransactionType } from "../../types"
import { TransactionNumberCalcFn } from "./types"

const transactionNumbersCalcs: Record<
  TransactionType,
  TransactionNumberCalcFn
> = {
  TRADE: ({
    operationType,
    sharesAmountForTrade,
    sharePrice,
    fee,
  }: TransactionFormValues) => {
    const isBuy = operationType === "BUY"
    const positionPrice =
      Number(sharesAmountForTrade || 0) * Number(sharePrice || 0)
    const positionPriceAfterFees = isBuy
      ? positionPrice + Number(fee || 0)
      : positionPrice - Number(fee || 0)

    return {
      transactionTotal: parseNumberToFixed2(
        isBuy ? -positionPriceAfterFees : +positionPriceAfterFees
      ),
    }
  },
  DIVIDEND: ({
    sharesAmountForDividend,
    dividendPerShare,
    taxPercentage,
  }: TransactionFormValues) => {
    const dividendBeforeTax =
      Number(sharesAmountForDividend || 0) * Number(dividendPerShare || 0)

    const dividendAfterTax = percentageOff(
      dividendBeforeTax,
      taxPercentage || 0
    )

    const dividendTaxValue = -(dividendBeforeTax - dividendAfterTax)

    return {
      initialSummaryValue: parseNumberToFixed2(dividendBeforeTax),
      transactionTotal: parseNumberToFixed2(dividendTaxValue),
      transactionSubResult: parseNumberToFixed2(dividendAfterTax),
    }
  },
  DIVIDEND_TAX: ({ dividendTaxValue }: TransactionFormValues) => {
    return {
      transactionTotal: parseNumberToFixed2(-dividendTaxValue || 0),
    }
  },
  FEE: ({ feeTransactionValue }: TransactionFormValues) => {
    return {
      transactionTotal: parseNumberToFixed2(-feeTransactionValue || 0),
    }
  },
  FUNDING_WITHDRAWAL: ({
    transferValue,
    operationType,
  }: TransactionFormValues) => {
    const total = operationType === "FUNDING" ? transferValue : -transferValue

    return {
      transactionTotal: parseNumberToFixed2(total || 0),
    }
  },
}

export default transactionNumbersCalcs
