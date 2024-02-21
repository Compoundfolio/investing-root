import { object, string, number } from "yup"
import { isRequired } from "./helpers"
import { VALIDATION_MESSAGE } from "src/core/consts"

const validation = () =>
  object().shape({
    transactionType: object().required(VALIDATION_MESSAGE.REQUIRED),
    assetSearchNameOrTicker: string().required(VALIDATION_MESSAGE.REQUIRED),
    assignedBrokerage: object().required(VALIDATION_MESSAGE.REQUIRED),

    operationType: string().when(
      "transactionType",
      isRequired(["TRADE", "FUNDING_WITHDRAWAL"], string)
    ),

    sharePrice: number().when("transactionType", isRequired("TRADE")),
    fee: number().when("transactionType", isRequired("TRADE")),
    sharesAmountForTrade: number().when("transactionType", isRequired("TRADE")),

    dividendPerShare: number().when("transactionType", isRequired("DIVIDEND")),
    sharesAmountForDividend: number().when(
      "transactionType",
      isRequired("DIVIDEND")
    ),
    taxPercentage: number().when("transactionType", isRequired("DIVIDEND")),

    dividendTaxValue: number().when(
      "transactionType",
      isRequired(["DIVIDEND_TAX", "DIVIDEND"])
    ),
    dividendTaxPercentage: number().when(
      "transactionType",
      isRequired("DIVIDEND_TAX")
    ),

    feeTransactionValue: number().when("transactionType", isRequired("FEE")),

    transferValue: number().when(
      "transactionType",
      isRequired("FUNDING_WITHDRAWAL")
    ),

    date: string().required(VALIDATION_MESSAGE.REQUIRED),
  })

export default validation
