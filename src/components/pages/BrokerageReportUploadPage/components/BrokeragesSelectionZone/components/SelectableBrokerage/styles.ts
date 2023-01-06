import styled from "@emotion/styled";
import Image from "next/image";

export const SelectableBrokerageButton = styled.button({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#111F28",
  border: "1px solid rgba(15, 111, 114, 0.5)",
  boxShadow: "8px 8px 8px 5px rgba(0, 0, 0, 0.25)",
  borderRadius: "8px",
  width: "162px",
  height: "156px",
  cursor: "pointer",

  "&:hover": {
    color: "#fff",
    boxShadow: "0px 0px 50px #fff",
  }
})

export const StyledImage = styled(Image)({
  border: "1px solid #fff",
  borderRadius: "16px",
})

export const StyledBrokerageBrandName = styled.h2({
  fontWeight: "500",
  fontSize: "14px",
  lineHeight: "17px",
  textAlign: "center",
  color: "#4C596B",
  margin: 0,
  marginTop: "8px",
})