import IBrokerage from '../IBrokerage';
import { ExanteCsvData } from './__types__';
import { formatExanteCsvTransactions } from './helpers';

export default class ExanteBrokerage implements IBrokerage {
  csvData: ExanteCsvData

  constructor(csvData: ExanteCsvData) {
    this.csvData = csvData
  }

  getAssetsAmount() {
    return this.csvData.length
  }

  getAllTransactions() {
    const transactions = formatExanteCsvTransactions(this.csvData);
    return transactions
  };
}