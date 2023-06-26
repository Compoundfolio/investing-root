import React, { memo, useMemo } from "react"
import { INumberMaxi } from "./types"
import styles from "./NumberMaxi.module.css"
import ColorizedNumber from "../ColorizedNumber"
import { outputNumber } from "@core/helpers"

const NumberMaxi = ({ title, numbers, curency, gainNumber }: INumberMaxi) => {
  const [intNumberPart, floatNumberPart] = useMemo(() => {
    return outputNumber(numbers).split(".")
  }, [numbers])

  return (
    <div className={styles.numberMaxi_container}>
      <h5 className={styles.numberMaxi_container_title}>{title}</h5>
      <div className="relative pt-5 pb-2.5">
        <p className={styles.numberMaxi_container_currencySign}>
          {curency && curency}
        </p>
        <span className={styles.numberMaxi_container_number}>
          {intNumberPart}
          <span className={styles.numberMaxi_container_number_floatPart}>
            .{floatNumberPart}
          </span>
        </span>
        <div className={styles.numberMaxi_container_changeValue}>
          <ColorizedNumber number={numbers} isPercentage />
        </div>
      </div>
    </div>
  )
}

export default memo(NumberMaxi)
