import styled from "@emotion/styled";
import { IColorizedNumber } from "./__types__";
import { getColorByGainNumber } from "@core/helpers";

export const StyledNumber = styled.span
(({ number, isPercentage }: Pick<IColorizedNumber, "number" | "isPercentage">) => ({
  color: getColorByGainNumber(number),
  fontFamily: 'Chakra Petch',
  fontWeight: isPercentage ? 700 : 400,
  fontSize: isPercentage ? 14 : 13,
}))