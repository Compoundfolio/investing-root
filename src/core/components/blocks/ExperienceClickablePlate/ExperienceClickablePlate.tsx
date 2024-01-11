import React, { ReactNode } from "react"
import style from "./ExperienceClickablePlate.module.css"
import clsx from "clsx"

interface IExperienceClickablePlate {
  lessVisible?: boolean
  title: string
  description: string
  icon: ReactNode
  onClick: () => void
}

const ExperienceClickablePlate = ({
  lessVisible,
  title,
  description,
  icon,
  onClick,
}: IExperienceClickablePlate) => {
  return (
    <button
      onClick={onClick}
      className={clsx([
        style.experiencePlate,
        lessVisible && style.experiencePlate_lessVisible,
      ])}
    >
      <div className={style.experiencePlate__marker} />
      <div className={style.experiencePlate__iconWrap}>{icon}</div>
      <h2 className={style.experiencePlate__title}>{title}</h2>
      <span className={style.experiencePlate__subTitle}>{description}</span>
    </button>
  )
}

export default ExperienceClickablePlate
