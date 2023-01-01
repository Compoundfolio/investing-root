/**
 * Parses string to number. Returns null in case of NaN value
 */
const parseNumber = (str?: string) => {
  const number = Number(str)
  return isNaN(number) ? null : number
}

export default parseNumber