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
        style={{
          width: `${progressPercentage}%`,
        }}
        className={style.linearProgressBar__progress}
      ></div>
    </div>
  )
}

export default LinearStepperProgressBar
