import React, { ReactNode } from "react"
import styles from "./SectionHead.module.css"
import { DescriptionPopUp } from "./components"
import { IReactChildren } from "src/core/types"

export interface IDataVisHeading extends IReactChildren {
  title: string
  dataVisDescription?: ReactNode
}
 
const SectionHead = ({
  title,
  dataVisDescription,
  children,
  ...restProps
}: IDataVisHeading) => {
  return (
    <div {...restProps} className={`flex flex-col w-full gap-8 ${!children && "mb-8"}`}>
      <div className="flex items-center gap-4">
        <span className={styles.title}>{title}</span>
        {dataVisDescription && <DescriptionPopUp description={dataVisDescription} />}
      </div>
      {children && <div className="flex flex-col">{children}</div>}
    </div>
  )
}

export default SectionHead
