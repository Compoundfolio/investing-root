import { DeleteIcon, EditIcon, ManualIcon } from "src/core/components/icons";
import { PopUpAction } from "../types";

export const getActIcon = (actType: PopUpAction['actType']) => {
  if (actType === "manual") return <ManualIcon />
  if (actType === "delete") return <DeleteIcon className="w-5 h-5" />
  if (actType === "edit") return <EditIcon className="w-5 h-5" />
  return null
}