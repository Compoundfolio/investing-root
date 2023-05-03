import { DividendStats, ID, Ticker } from "@core";
import { EHDDividend } from "ehd-js/src/types/model";
import { NonTradeTransaction } from 'src/core/types';

type AssetPosition = {
  id: ID
  ticker: Ticker;
  /** Total shares owned at the moment */
  sharesAmount: number;
  /** By all open shares */
  currentPositionPrice: number; // TODO: Rename as invested amount
  /** Average open position price */
  averagePrice: number;
  actualPositionPrice: number // actualOneSharePrice*sharesAmount
  dividendStats: DividendStats;
  wholeMarketDividendHistory: EHDDividend[],
  payedDividendTaxTransactions: NonTradeTransaction<"TAX">[]
  payedBrokerageCommissionsTransactions: NonTradeTransaction<"COMMISSION">[],
  /** Taxed divs */
  payedDividendTransactions: NonTradeTransaction<"DIVIDEND">[]
}

export default AssetPosition