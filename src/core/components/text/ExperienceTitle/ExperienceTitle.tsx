import React, { ReactNode, memo } from "react"
import style from "./ExperienceTitle.module.css"

interface IExperienceTitle {
  title: string
  subTitle?: string
  className?: string
  subTitleLink?: ReactNode
}

/**
 * Example:
 *
 * https://www.figma.com/file/dqpGvDxgbH8O6v6okHLwbJ/Compoundfolio---Stage-1?type=design&node-id=1315-12304&mode=design&t=0umYCvzFrkKlx67p-4
 */
function ExperienceTitle({
  title,
  subTitle,
  subTitleLink,
  className = "",
}: IExperienceTitle) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <h1 className={style.experienceTitle}>{title}</h1>
      {subTitleLink ?? (
        <span className={style.experienceSubTitle}>{subTitle}</span>
      )}
    </div>
  )
}

export default memo(ExperienceTitle)
