import styled from '@emotion/styled'
import { colors } from 'src/core/theme';

export const Container = styled.div({
  display: "flex",
  flexDirection: "column",
})

export const Title = styled.h6({
  margin: 0,
  fontWeight: 500,
  fontSize: 12,
  lineHeight: "15px",
  color: colors.white,
  marginBottom: 24,
})

export const MiniNumber = styled.span({
  fontFamily: 'Chakra Petch',
  fontWeight: 600,
  fontSize: 24,
  lineHeight: "31px",
  color: colors.grayD9,
})

export const SubTitle = styled.span({
  fontWeight: 700,
  fontSize: 14,
  lineHeight: "17px",
  color: colors.darkGray,
})