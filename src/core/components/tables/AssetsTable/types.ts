import { AssetPosition } from "src/core/types"

export interface IAssetsTable {
  data: AssetPosition[]
  onRowHover: () => void
}