import AbstractBrokerage from './AbstractBrokerage';
import AbstractSideBrokerage from './AbstractSideBrokerage';

export default class Brokerage implements AbstractBrokerage {
  private brokerage: AbstractSideBrokerage;

  constructor(brokerageEntity: AbstractSideBrokerage) {
    this.brokerage = brokerageEntity;
  } 

  getBrandName() {
    return this.brokerage.brandName
  };

  getLogoPath() {
    return this.brokerage.logoPath
  };

  getAssets() {
    return this.brokerage.assets
  }

  getAllTransactions() {
    return this.brokerage.transactions
  };
}