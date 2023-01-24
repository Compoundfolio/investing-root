import styled from "@emotion/styled";
import { colors } from 'src/core/theme';

export const StyledContainer = styled.div({
  color: colors.white,
  borderBottom: `1px solid ${colors.darkGray}`
})

export const StyledH5 = styled.h5({
  fontWeight: 600,
  fontSize: 18,
  margin: 0,
})

export const StyledCurrencySign = styled.p({
  margin: 0,
  fontSize: 24,
  color: colors.darkGray,
  padding: "22px 0px",
})

export const StyledNumber = styled.span({
  fontFamily: 'Chakra Petch',
  fontWeight: 400,
  fontSize: "40px",
  lineHeight: "52px",
  color: colors.white
})

export const StyledChangeValue = styled.span({
  fontFamily: 'Chakra Petch',
  fontWeight: 700,
  fontSize: "10px",
  lineHeight: "13px",
  color: colors.darkGreen,
})