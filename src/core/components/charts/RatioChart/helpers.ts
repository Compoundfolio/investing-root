import { parseNumber } from "@core/helpers"

export const calcPercentageChange = (progress: number,targetNumber: number, isPresentative?: boolean) => {
  const percentageChange = (progress / targetNumber) * 100
  return isPresentative ? parseNumber(percentageChange)! : percentageChange
}