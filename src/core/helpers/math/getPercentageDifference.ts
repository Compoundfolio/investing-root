// TODO: Rename
/**
 * Returns either positive or negative diff between two numbers
 * @example
 * getPercentageDifference(1,2) // -66.6666666
 * getPercentageDifference(2,1) //  66.6666666
 */
const getPercentageDifference = (a: number, b: number) => {
  const percentageDifference = 100 * Math.abs((a - b) / ((a + b) / 2))
  return a > b ? percentageDifference : -percentageDifference
}

export default getPercentageDifference
