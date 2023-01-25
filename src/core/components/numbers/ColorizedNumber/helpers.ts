import { colors } from 'src/core/theme';

export const getNumberColor = (number: number) => {
  if (typeof number !== "number") return colors.grayD9
  if (number > 0) return colors.darkGreen
  if (number < 0) return colors.pinkSoft
  if (number === 0) return colors.grayD9
}