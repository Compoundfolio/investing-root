import styled from "@emotion/styled";
import { colors } from 'src/core/theme';

export const StyledBarChartContainer = styled.section({
  width: "380px",
  height: "380px",
  "& rect[focusable=true]": {
    // fill: "linear-gradient(360deg, rgba(15, 111, 114, 0.31) 0%, #0F6F72 73.44%, #FFD391 100%) !important"
  },
  "& text": {
    fontSize: "8px !important",
    fontFamily: 'Chakra Petch !important',
    fill:`${colors.whiteEasy} !important`
  },
  "& text[dominant-baseline=text-before-edge]": {
    fontSize: "12px !important",
    fontFamily: 'Montserrat !important',
    fill: `${colors.whiteEasy} !important`
  }
})