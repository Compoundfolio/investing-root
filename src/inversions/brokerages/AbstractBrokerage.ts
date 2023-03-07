import { PortfolioOpenClosePositions, Transaction } from "src/core/types";
import AbstractSideBrokerage from "./AbstractSideBrokerage";

export default class AbstractBrokerage {
  private static brokerage: AbstractSideBrokerage
  private static transactions: Transaction[] = []
  private static assets: PortfolioOpenClosePositions = {
    openPositions: {},
    closedPositions: {},
  }
  // constructor(brokerageEntity: AbstractSideBrokerage) {
  //   AbstractBrokerage.brokerage = brokerageEntity
  // }

  getBrandName!: () => string
  getLogoPath!: () => string
  getTradeTransactions!: () => Transaction[] | []
  getAssets!: () => PortfolioOpenClosePositions[] | {}
}