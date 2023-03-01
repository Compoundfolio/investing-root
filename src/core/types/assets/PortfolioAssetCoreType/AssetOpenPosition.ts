import { DividendHistory, DividendStats, ID, Ticker } from "@core";

type AssetOpenPosition = {
  id: ID
  ticker: Ticker;
  /** Total shares owned at the moment */
  sharesAmount: number;
  /** By all open shares */
  currentPositionPrice: number; // TODO: Rename as invested amount
  /** Average open position price */
  averagePrice: number;
  actualPositionPrice: number // actualOneSharePrice*sharesAmount
  /** **Attention!** It's div history based on div. transactions from brokerage, not from API */
  dividendHistory: DividendHistory;
  dividendStats: DividendStats;
}

export default AssetOpenPosition