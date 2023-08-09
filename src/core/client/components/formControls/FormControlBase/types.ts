import { Control, IReactChildren } from "src/core/types"

type ControlCommonRequiredFields = Required<Pick<Control, "value" | "name">>

export interface IFormControlBase extends ControlCommonRequiredFields, IReactChildren {
  /** Field, which may be filled out with errors */
  erroringField?: boolean
  children: Required<IReactChildren["children"]>
  errorMessage?: Control["errorMessage"]
  required?: Control["required"]
  labelText?: Control["labelText"]
  setErrorMessage?: Control["setErrorMessage"]
  helpText?: Control["helpText"]
  withMb?: boolean
}