import styled from "@emotion/styled";
import { colors } from 'src/core/theme';

export const BackgroundFogBlur = styled.div({
  background: "rgba(18, 33, 38, 0.9)",
  backdropFilter: "blur(5px)",
})

export const StyledModalTitle = styled.h1({
  color: colors.white,
  fontSize: 32,
})
