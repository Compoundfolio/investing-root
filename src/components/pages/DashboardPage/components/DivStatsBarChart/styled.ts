import styled from "@emotion/styled";
import { colors } from 'src/core/theme';

export const StyledBarChartContainer = styled.section({
  width: "380px",
  height: "380px",
  "& text[dominant-baseline=central]": {
    fontSize: "8px !important",
    fontFamily: 'Chakra Petch !important',
    fill:`${colors.whiteEasy} !important`
  },
  "& text[dominant-baseline=middle]": {
    fontSize: "12px !important",
    fontFamily: 'Montserrat !important',
    fill: `${colors.whiteEasy} !important`,
    fontWeight: 400,

  },
  '& text[dominant-baseline=middle][data-currentShortMonthName=true]': {
    fill: `${colors.darkGreen} !important`,
    fontWeight: 600,
  }
})