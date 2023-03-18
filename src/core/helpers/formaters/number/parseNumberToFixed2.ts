import parseNumber from "./parseNumber"

const parseNumberToFixed2 = (number: number) => {
  return parseNumber(number.toFixed(2))
}

export default parseNumberToFixed2