import { IReactChildren } from "src/core/types"

export type PopUpAction = {
  icon?: IReactChildren['children']
  actType?: "delete" | "manual" | "edit"
  title: string
  onClick: () => void
}