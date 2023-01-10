import styled from "@emotion/styled";
import Image from "next/image";
import { ISelectableBrokerage } from "./__types__";
import { colors } from "src/core/theme";

export const SelectableBrokerageButton = styled.button
(({ isSelected }: Pick<ISelectableBrokerage, "isSelected">) => ({
  flexDirection: "column",
  justifyContent: "center",
  background: "#111F28",
  boxShadow: `8px 8px 8px 5px ${isSelected ? "rgba(0, 0, 0, 0.5)" : "rgba(0, 0, 0, 0.25)"}`,
  width: "162px",
  height: "156px",
  borderRadius: "8px",
  border: `1px solid ${isSelected ? colors.white : colors.green}`,
  color: isSelected ? colors.white :"#4C596B",

  "&:hover": {
    transition: "all 0.5s linear",
    color: colors.white,
    "& img": {
      transition: "opacity 0.5s linear", // TODO: Disable animation for borderRadius
      opacity: 1
    }
  }
}))

// TODO: Default
export const StyledImage = styled(Image)
(({ isSelected }: Pick<ISelectableBrokerage, "isSelected">) => isSelected ? {
  border: `1px solid ${colors.white}`,
  borderRadius: 16,
  opacity: 1,
  transform: "scale(1)",
} : {
  opacity: 0.65,
  transform: "scale(0.9)",
})

export const StyledBrokerageBrandName = styled.h2({
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  textAlign: "center",
  margin: 0,
  marginTop: "8px",
})