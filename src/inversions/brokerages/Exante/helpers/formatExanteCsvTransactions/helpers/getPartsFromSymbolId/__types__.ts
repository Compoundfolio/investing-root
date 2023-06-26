import { Exchange, Ticker } from "src/core/types"

export enum SymbolIdParts {
  TICKER = 0,
  EXCHANGE = 1,
}

export type SymbolId = Uppercase<`${Ticker}.${Exchange}`> | undefined
