import { colors } from "src/core/theme"

const getColorByGainNumber = (gain: number) => {
  if (gain === 0) return colors.gray4C
  if (gain > 0) return colors.darkGreen
  return colors.pinkSoft
}

export default getColorByGainNumber