import { Control, Option } from "src/core/types";

type ControlRequiredFields = Required<Pick<Control, "name" | "placeholder">>

export interface IMultiAutocompleteInput extends ControlRequiredFields {
  selectedOptions: Option[]
  allPossibleOptions: Option[]
  style?: React.CSSProperties
  erroringField?: boolean
  setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>
  selectionSideEffect: () => void
}