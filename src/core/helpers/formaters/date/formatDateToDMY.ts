import padTo2Digits from "../number/padTo2Digits"

/**
 * Returns DD.MM.YYYY date string
 */
const formatDateToDMY = (date: Date) => {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("/")
}

export default formatDateToDMY
