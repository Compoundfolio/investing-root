import { IReactChildren } from "src/core/types"

export interface ISquareButton extends IReactChildren {
  onClick: () => void
  disabled?: boolean
  hoverTitle?: string
}
