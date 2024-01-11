import React from "react"
import style from "./LinearStepperProgressBar.module.css"

interface ILinearStepperProgressBar {
  progressPercentage: number
}

const LinearStepperProgressBar = ({
  progressPercentage,
}: ILinearStepperProgressBar) => {
  return (
    <div role="progressbar" className={style.linearProgressBar}>
      <div
        className={style.linearProgressBar__progress}
        style={{
          transform: `translateX(-${100 - progressPercentage}%)`,
        }}
      />
    </div>
  )
}

export default LinearStepperProgressBar
