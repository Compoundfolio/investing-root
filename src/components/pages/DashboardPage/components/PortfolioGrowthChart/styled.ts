import { colors } from 'src/core/theme';

export const chartContainerStyled = {
  // width: "100%",
  // height: 115,
  height: "100%",
  "& div > div": {
    height: "inherit"
  },
  // Vertical hover point line style
  "& line[fill=none]": {
    stroke: `${colors.white} !important`
  }
}