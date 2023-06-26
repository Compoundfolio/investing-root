import {
  AssetPosition,
  Dividends,
  normalizeArrayOfObjectsBy,
  Dividend,
  sumNormalizedArraysOfNumbers,
  oldDatesFirst,
} from "@core"
import { format } from "date-fns"
import { mergeWith } from "lodash"

const calculateDivAfterTax = (openPositions: AssetPosition[]): Dividends => {
  let divsByDate: Dividends = {}

  openPositions.forEach((openPosition) => {
    if (openPosition.payedDividendTransactions.length === 0) return

    const divsWithFormattedPayDate: Dividend[] =
      openPosition.payedDividendTransactions
        .map((dividend) => ({
          date: format(new Date(dividend.time), "yyy-MM-dd"),
          price: dividend.price,
        }))
        .sort(oldDatesFirst)

    const normalizedDivsByDate = normalizeArrayOfObjectsBy(
      divsWithFormattedPayDate,
      "date"
    )

    mergeWith(
      divsByDate,
      normalizedDivsByDate,
      sumNormalizedArraysOfNumbers("price")
    )
  })

  return divsByDate
}

export default calculateDivAfterTax
