import React, { memo, useMemo } from "react"
import TCell from "../TCell"
import { ColorizedNumber, PayCircleStatus } from "src/core/components"
import styles from "./UpcomingDividendCell.module.css"
import { getPayStatusColor } from "@core/helpers"

interface IUpcomingDividendCell {
  dividendAmount: number
  dividendPayDate: Date
}

const UpcomingDividendCell = ({
  dividendAmount,
  dividendPayDate,
}: IUpcomingDividendCell) => {
  const payStatusColor = useMemo(
    () => getPayStatusColor(dividendPayDate),
    [dividendPayDate]
  )

  return (
    <TCell title={payStatusColor.status}>
      <div className="flex items-center gap-2.5">
        <PayCircleStatus
          payDate={dividendPayDate}
          payStatusColor={payStatusColor}
        />
        <span className={styles.dividendTableCell_payDate}>
          {/* {dividendPayDate} */}
          {/* TODO: Resolve hard-code */}
          Aug 20
        </span>
      </div>
      <ColorizedNumber number={dividendAmount} color={payStatusColor.color} />
    </TCell>
  )
}

export default memo(UpcomingDividendCell)
