import { colors } from "src/core/theme"
import { IDivStatsBarChart } from "./types"

export const barChartContainerStyle = ({
  openedInModal,
}: Pick<IDivStatsBarChart, "openedInModal">) =>
  ({
    width: openedInModal ? "100%" : "380px",
    height: openedInModal ? "100%" : "380px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    "& text[dominant-baseline=central]": {
      fontSize: `${openedInModal ? "10" : "8"}px !important`,
      fontFamily: "Chakra Petch !important",
      fontWeight: openedInModal ? 900 : 300,
      fill: `${openedInModal ? colors.white : colors.whiteEasy} !important`,
    },
    "& text[dominant-baseline=middle]": {
      fontSize: "12px !important",
      fontFamily: "Montserrat !important",
      fill: `${colors.whiteEasy} !important`,
      fontWeight: 400,
    },
    "& text[dominant-baseline=middle][data-currentShortMonthName=true]": {
      fill: `${colors.darkGreen} !important`,
      fontWeight: 600,
    },
  } as object)
