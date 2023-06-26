import React from "react"
import CircleButton from "../CircleButton"
import { ArrowIcon } from "../../icons"
import { ICircleArrowButton } from "./types"

const CircleArrowButton = ({
  onClick,
  arrowIconOrientation,
}: ICircleArrowButton) => {
  return (
    <CircleButton onClick={onClick}>
      <ArrowIcon orientation={arrowIconOrientation} />
    </CircleButton>
  )
}

export default CircleArrowButton
