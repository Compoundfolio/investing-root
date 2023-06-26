/**
 * @example
 * outputNumber(1234567.890123) // 1 234 567.890 123
 */
const outputNumber = (num: number) => {
  let parts = num.toString().split(".")
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ")
  return parts.join(".")
}

export default outputNumber
