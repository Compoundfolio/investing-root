import { Ticker, Exchange } from "src/core/types"
import { SymbolId, SymbolIdParts } from "./__types__"

const splitSymbolId = (symbolId: SymbolId, part: SymbolIdParts): Ticker | Exchange | "" => {
  console.log(symbolId, part);
  
  return (symbolId ? symbolId?.split(".")?.[part]?.toUpperCase() : "") as Ticker | Exchange
}

/**
 * Get EXANTE asset ticker and stock exchange names
 */
const getPartsFromSymbolId = (symbolId: SymbolId) => {
  return {
    ticker: splitSymbolId(symbolId, SymbolIdParts.TICKER),
    exchange: splitSymbolId(symbolId, SymbolIdParts.EXCHANGE),
  }
}

export default getPartsFromSymbolId