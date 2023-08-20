import { CSSProperties } from "react"
import { IReactChildren } from "src/core/types"

export interface ICircleButton extends IReactChildren {
  onClick: () => void
  style?: object | CSSProperties
  noShadow?: boolean
}
