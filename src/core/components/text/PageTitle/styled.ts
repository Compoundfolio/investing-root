import styled from "@emotion/styled";
import { colors } from "src/core/theme";

export const StyledPageName = styled.h1({
  fontWeight: 500,
  fontSize: 36,
  lineHeight: "44px",
  margin: 0,
  marginRight: 8,
  color: colors.white,
})

export const StyledPortfolioName = styled.span({
  fontFamily: 'Open Sans',
  fontSize: 12,
  letterSpacing: "0.4px",
  color: colors.white,
  mixBlendMode: "normal",
  opacity: 0.5,
})
