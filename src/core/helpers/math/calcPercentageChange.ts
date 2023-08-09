import { parseNumber } from "../formaters"

/**
 * Returns positive change between two numbers
 * @example
 * calcPercentageChange(10,100) // 10
 * calcPercentageChange(100,10) // 1000
 */
const calcPercentageChange = (
  progress: number,
  targetNumber: number,
  isPresentative?: boolean
) => {
  console.log(progress);
  console.log(targetNumber);
  console.log(isPresentative);
  
  const percentageChange = (progress / targetNumber) * 100

  return isPresentative ? parseNumber(percentageChange)! : percentageChange
}

export default calcPercentageChange
