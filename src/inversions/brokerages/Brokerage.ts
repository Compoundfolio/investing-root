import IBrokerage from './IBrokerage';
import ISideBrokerage from './AbstractSideBrokerage';

export default class Brokerage implements IBrokerage {
  public brokerage: ISideBrokerage;

  constructor(brokerage: ISideBrokerage) {
    this.brokerage = brokerage;
  }

  getAllTransactions() {
    return this.brokerage.transactions
  };
}