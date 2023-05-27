import styled from "@emotion/styled";
import Link from "next/link";
import { colors } from "src/core/theme";
import { ILinkLazy } from "./types";

export const StyledLink = styled(Link)
(({ isActive }: Pick<ILinkLazy , "isActive">) => ({
  backgroundColor: isActive ? colors.darkGray : "initial",
  borderRadius: 4,
  padding: 4,
  display: "inline-block",
  "& svg": {
    width: 26,
    height: 26,
  }
}))