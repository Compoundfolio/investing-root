import { colors } from 'src/core/theme';

export const chartContainerStyled = {
  height: "100%",
  "& div > div": {
    height: "inherit"
  },
  // Vertical hover point line style
  "& line[fill=none]": {
    stroke: `${colors.white} !important`
  }
}