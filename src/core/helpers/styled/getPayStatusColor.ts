import { isBefore } from "date-fns"
import { colors } from "src/core/theme"

const getPayStatusColor = (payDate: Date) => {
  const currentDate = new Date()
  
  return isBefore(payDate, currentDate)
    ? { color: colors.darkGreen, status: "Payed" }
    : { color: colors.yellow, status: "Pending" }
}

export default getPayStatusColor