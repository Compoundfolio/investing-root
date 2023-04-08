import { colors } from "@core";
import styled from "@emotion/styled";

export const StyledDndContainer = styled.section({
  height: "auto",
  filter: "drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.3))",
  background: "rgba(15, 111, 114, 0.21)",
  border: "2px dashed #0F6F72",
  backdropFilter: "blur(5px)",
  borderRadius: "20px",
  // maxWidth: 966,
  // maxHeight: 410,
  width: "50vw",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
})

export const StyledDndTitle = styled.p({
  fontSize: 20,
  color: colors.gray,
  margin: 0,
  marginBottom: 24,
})

export const StyledDndTitleSub = styled.span({
  fontSize: 20,
  color: colors.darkLightGreen,
  textDecoration: "underline",
})
