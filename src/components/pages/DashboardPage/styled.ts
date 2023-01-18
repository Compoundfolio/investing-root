import styled from "@emotion/styled";

export const GridContainer = styled.div({
  padding: "1rem",
  height: "100%",
})

export const GridItem = styled.section({
  maxWidth: "1200px",
  margin: "0 auto",
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
})