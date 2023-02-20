import { isBefore } from "date-fns"
import { colors } from "src/core/theme"

const getPayStatusColor = (payDate: Date) => {
  const currentDate = new Date()
  
  return isBefore(payDate, currentDate)
    ? { color: colors.darkGreen, status: "payed" }
    : { color: colors.yellow, status: "pending" }
}

export default getPayStatusColor