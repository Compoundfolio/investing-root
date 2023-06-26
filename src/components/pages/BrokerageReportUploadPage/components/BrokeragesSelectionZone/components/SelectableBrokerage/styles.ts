import { ISelectableBrokerage } from "./__types__"
import { colors } from "src/core/theme"

// TODO: Refactor to use CSS style

export const brokerageButtonStyle = ({
  isSelected,
}: Pick<ISelectableBrokerage, "isSelected">) =>
  ({
    flexDirection: "column",
    justifyContent: "center",
    background: "#111F28",
    boxShadow: isSelected
      ? `0px 0px 5px #05CD99`
      : `8px 8px 8px 5px rgba(0, 0, 0, 0.25)`,
    width: "162px",
    height: "156px",
    borderRadius: "8px",
    border: `1px solid ${colors.green}`,
    color: isSelected ? colors.white : "#4C596B",

    "&:hover": {
      transition: "all 0.5s linear",
      color: colors.white,
      "& img": {
        transition: "opacity 0.5s linear", // TODO: Disable animation for borderRadius
        opacity: 1,
      },
    },
  } as object)

export const imageStyle = ({
  isSelected,
}: Pick<ISelectableBrokerage, "isSelected">) =>
  isSelected
    ? {
        opacity: 1,
        transform: "scale(1)",
      }
    : {
        opacity: 0.65,
        transform: "scale(0.9)",
      }

export const brokerageBrandNameStyle = {
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  textAlign: "center",
  margin: 0,
  marginTop: "8px",
} as const
