import { IReactChildren } from "src/core/types";

export default interface IModalBlur extends IReactChildren {
  isOpen: boolean
  handleOpenChange: () => void
}