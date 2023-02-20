import styled from "@emotion/styled";
import { IColorizedNumber } from "./__types__";
import { getColorByGainNumber } from "@core/helpers";

export const StyledNumber = styled.span
(({ number, isPercentage, isExtraBold }: Pick<IColorizedNumber, "number" | "isPercentage" | "isExtraBold">) => ({
  color: getColorByGainNumber(number),
  fontFamily: 'Chakra Petch',
  fontWeight: isPercentage 
    ? isExtraBold ? 700 : 500 
    : 400,
  fontSize: isPercentage 
    ? 14
    : 13,
}))