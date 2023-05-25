import styled from "@emotion/styled";

const DASHBOARD_VIEWS_GAP = 40 as const

export const DashboardContainer = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  gap: DASHBOARD_VIEWS_GAP
})

interface IDashboardColumn {
  fitContent?: boolean
}
export const DashboardColumn = styled.section
(({ fitContent }: IDashboardColumn) => ({
  width: fitContent ? "fit-content" : "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: DASHBOARD_VIEWS_GAP,
}))