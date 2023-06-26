import { IArrowIcon } from "../../icons"

export interface ICircleArrowButton {
  onClick: () => void
  arrowIconOrientation: IArrowIcon["orientation"]
}
