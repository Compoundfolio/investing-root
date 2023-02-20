import { AssetOpenPosition } from "src/core/types"

export interface IAssetsTable {
  data: AssetOpenPosition[]
  onRowHover: () => void
}