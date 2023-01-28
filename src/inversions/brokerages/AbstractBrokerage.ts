import { PortfolioAsset, Transaction } from "src/core/types";
import AbstractSideBrokerage from "./AbstractSideBrokerage";

export default class AbstractBrokerage {
  private static brokerage: AbstractSideBrokerage

  constructor(brokerageEntity: AbstractSideBrokerage) {
    AbstractBrokerage.brokerage = brokerageEntity
  }

  getBrandName!: () => string
  getLogoPath!: () => string
  getAllTransactions!: () => Transaction[]
  getAssets!: () => PortfolioAsset[]
}