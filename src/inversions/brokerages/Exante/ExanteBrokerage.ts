import { Transaction } from 'src/core/types';
import { ExanteCsvData } from './__types__';
import { formatExanteCsvTransactions } from './helpers';
import ISideBrokerage from '../ISideBrokerage';

export default class ExanteBrokerage implements ISideBrokerage {  
  transactions: Transaction[]

  constructor(csvData: ExanteCsvData) {
    this.transactions = formatExanteCsvTransactions(csvData);
  }
}

