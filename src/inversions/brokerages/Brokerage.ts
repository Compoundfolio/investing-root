import AbstractBrokerage from './AbstractBrokerage';
import AbstractSideBrokerage from './AbstractSideBrokerage';

export default class Brokerage implements AbstractBrokerage {
  private brokerage: AbstractSideBrokerage;

  constructor(brokerageEntity: AbstractSideBrokerage) {
    this.brokerage = brokerageEntity;
  } 

  getBrandName() {
    return AbstractSideBrokerage.brandName
  };

  getLogoPath() {
    return AbstractSideBrokerage.logoPath
  };

  getAssets() {
    return this.brokerage.assets
  }

  getAllTransactions() {
    return this.brokerage.transactions
  };
}