import styled from "@emotion/styled";
import { colors } from 'src/core/theme';

export const StyledChartContainer = styled.section({
  // width: "100%",
  height: 115,
  "& div > div": {
    height: "inherit"
  },
  // Vertical hover point line style
  "& line[fill=none]": {
    stroke: `${colors.white} !important`
  }
})