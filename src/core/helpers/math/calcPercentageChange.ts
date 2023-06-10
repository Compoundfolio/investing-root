import { parseNumber } from "../formaters"

/**
 * Returns positive change between two numbers
 * @example
 * calcPercentageChange(10,100) // 10
 * calcPercentageChange(100,10) // 1000
 */
 const calcPercentageChange = (progress: number, targetNumber: number, isPresentative?: boolean) => {
  const percentageChange = (progress / targetNumber) * 100

  return isPresentative 
    ? parseNumber(percentageChange)!
    : percentageChange
}

export default calcPercentageChange