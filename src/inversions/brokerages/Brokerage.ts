import ExanteBrokerage from './Exante/ExanteBrokerage';
import IBrokerage from './IBrokerage';
import ISideBrokerage from './ISideBrokerage';

export default class Brokerage implements IBrokerage {
  public brokerage: ISideBrokerage;

  constructor(brokerage: ISideBrokerage) {
    this.brokerage = brokerage;
  }

  getAllTransactions() {
    return this.brokerage.transactions
  };
}

const brokerage = new Brokerage(new ExanteBrokerage([])) 
brokerage.getAllTransactions()