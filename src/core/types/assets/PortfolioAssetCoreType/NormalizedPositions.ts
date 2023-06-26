import { Ticker } from "../common"
import AssetPosition from "./AssetPosition"

type NormalizedPositions =
  | {
      [K: Ticker]: AssetPosition
    }
  | {}

export default NormalizedPositions
