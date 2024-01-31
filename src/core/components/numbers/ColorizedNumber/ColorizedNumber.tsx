import React, { memo } from "react"
import { IColorizedNumber } from "./__types__"
import { NumberMoveIcon } from "../../icons"
import { getColorByGainNumber } from "@core/helpers"

const ColorizedNumber = ({
  number,
  // TODO: currency
  currency = "$",
  isPercentage = false,
  isExtraBold = false,
  color,
}: IColorizedNumber) => {
  const numberSymbol = number > 0 ? "+ " : "- "

  // TODO: Pass in other form
  const styles = {
    color: color ?? getColorByGainNumber(number),
    fontFamily: "var(--font-chakra)",
    fontWeight: isPercentage ? (isExtraBold ? 700 : 500) : 400,
    fontSize: isPercentage ? 14 : 13,
  }

  return (
    <div className="flex items-center gap-1">
      {isPercentage && (
        <NumberMoveIcon color={color} isPositiveMove={number > 0} />
      )}
      {/* TODO: Refactor */}
      <span style={styles}>
        {!isPercentage && numberSymbol}
        {!isPercentage && currency}
        {isPercentage ? Math.abs(number) : number}
        {isPercentage && "%"}
      </span>
    </div>
  )
}

export default memo(ColorizedNumber)
