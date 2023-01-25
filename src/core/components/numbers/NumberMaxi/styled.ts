import styled from "@emotion/styled";
import { colors } from 'src/core/theme';

export const StyledContainer = styled.div({
  color: colors.white,
  borderBottom: `1px solid ${colors.darkGray}`,
})

export const StyledH5 = styled.h5({
  fontWeight: 600,
  fontSize: 18,
  margin: 0,
})

export const StyledCurrencySign = styled.p({
  position: "absolute",
  top: 0,
  left: 0,
  margin: 0,
  fontSize: 24,
  color: colors.darkGray,
  display: "inline-block",
  width: "100%",
})

export const StyledNumber = styled.span({
  fontFamily: 'Chakra Petch',
  fontWeight: 400,
  fontSize: "40px",
  lineHeight: "52px",
  color: colors.white,
  paddingLeft: 28
})

export const StyledChangeValue = styled.div({
  position: "absolute",
  top: 0,
  right: 0,
})