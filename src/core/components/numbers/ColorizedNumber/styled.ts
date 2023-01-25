import styled from "@emotion/styled";
import { IColorizedNumber } from "./__types__";
import { getNumberColor } from "./helpers";

export const StyledNumber = styled.span
(({ number }: Pick<IColorizedNumber, "number">) => ({
  color: getNumberColor(number),
  fontFamily: 'Chakra Petch',
  fontWeight: 500,
  fontSize: "14px",
}))