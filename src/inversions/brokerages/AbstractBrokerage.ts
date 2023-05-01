import { PortfolioOpenClosePositions, Transaction, Dividends } from "src/core/types";
import AbstractSideBrokerage from "./AbstractSideBrokerage";

export default class AbstractBrokerage {
  private static brokerage: AbstractSideBrokerage
  private static transactions: Transaction[] = []
  private static assets: PortfolioOpenClosePositions = {
    openPositions: {},
    closedPositions: {},
  }
  
  private static taxedDividends: Dividends

  getBrandName!: () => string
  getLogoPath!: () => string
  getTradeTransactions!: () => Transaction[] | []
  getAssets!: () => PortfolioOpenClosePositions[] | {}
  getTaxedDividends!: () => Dividends | {}
}