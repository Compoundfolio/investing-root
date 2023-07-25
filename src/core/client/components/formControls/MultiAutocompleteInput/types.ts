import { Control, Option } from "src/core/types";

type ControlRequiredFields = Required<Pick<Control, "name" | "placeholder">>

export interface IMultiAutocompleteInput extends ControlRequiredFields {
  selectedOptions: Option[]
  allPossibleOptions: Option[]
  setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>
  style: React.CSSProperties
}