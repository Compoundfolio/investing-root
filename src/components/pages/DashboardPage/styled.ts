import styled from "@emotion/styled";

export const DashboardContainer = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
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
  gap: 64,
}))