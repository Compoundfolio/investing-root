import { IReactChildren } from "src/core/types";

export default interface IModalBlur extends IReactChildren {
  isOpen: boolean
  noMaxWidth?: boolean
  title?: string
  handleOpenChange: () => void
  onSave?: () => void
}