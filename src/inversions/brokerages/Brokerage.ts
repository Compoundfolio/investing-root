import ExanteBrokerage from './Exante/ExanteBrokerage';
import IBrokerage from './IBrokerage';

export default class Brokerage implements IBrokerage {
  public brokerage: IBrokerage;

  constructor(brokerage: IBrokerage) {
    this.brokerage = brokerage;
  }

  getAssetsAmount() {
    return this.brokerage.getAssetsAmount()
  }

  getAllTransactions() {
    return this.brokerage.getAllTransactions()
  };
}

const brokerage = new Brokerage(new ExanteBrokerage([])) 
brokerage.getAssetsAmount()
brokerage.getAllTransactions()