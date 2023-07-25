import { Control, Option } from "src/core/types";

type ControlRequiredFields = Required<Pick<Control, "name" | "placeholder">>

export interface IMultiAutocompleteInput extends ControlRequiredFields  {
  options: Option[]
  selectedOptions: Option[]
  setSelectedOptions: React.Dispatch<React.SetStateAction<Option[]>>
}