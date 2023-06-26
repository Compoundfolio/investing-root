import React, { memo } from "react"
import TCell from "../TCell"
import styles from "./NumbersDifferenceCell.module.css"
import clsx from "clsx"

interface INumbersDifferenceCell {
  topNumber: number
  bottomNumber: number
  isPercentages?: boolean
}

const NumbersDifferenceCell = ({
  topNumber,
  bottomNumber,
  isPercentages = false,
}: INumbersDifferenceCell) => {
  return (
    <TCell>
      <span className={clsx(styles.number, styles.number_top)}>
        {topNumber}
        {isPercentages && "%"}
      </span>
      <span className={clsx(styles.number, styles.number_bottom)}>
        {bottomNumber}
        {isPercentages && "%"}
      </span>
    </TCell>
  )
}

export default memo(NumbersDifferenceCell)
