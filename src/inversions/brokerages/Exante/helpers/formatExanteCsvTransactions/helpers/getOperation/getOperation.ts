import { OrderOperation } from "src/core/types"
import ExanteSide from "../../../../__types__/ExanteSide"

const getOperation = (exanteAssetOperation: ExanteSide) => {
  const upperCasedExanteOperation = exanteAssetOperation?.toUpperCase()

  if (!upperCasedExanteOperation) return
  if (upperCasedExanteOperation === OrderOperation.BUY)
    return OrderOperation.BUY
  if (upperCasedExanteOperation === OrderOperation.SELL)
    return OrderOperation.SELL
}

export default getOperation
