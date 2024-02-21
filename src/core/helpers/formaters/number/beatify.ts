import outputNumber from "./outputNumber"

// TODO: Get from storage, when other currencies will be implemented
const HARD_CODED_CURRENCY_SIGN = "$"

const defaultConfig: Config = {
  withSign: true,
}

type Config = {
  withSign: boolean
}

/** This function beatifies `-1234567.890123` number into `- $1 234 567.890123` string */
const beatify = (
  moneyNumber: number,
  { withSign }: Config = defaultConfig
): string => {
  const sign = withSign
    ? moneyNumber! >= 0
      ? moneyNumber === 0
        ? ""
        : "+"
      : "-"
    : ""

  const beatifiedNumberPart = outputNumber(moneyNumber).replaceAll("-", "")

  return `${sign} ${HARD_CODED_CURRENCY_SIGN}${beatifiedNumberPart}`
}

export default beatify
