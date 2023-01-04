import { Transaction } from 'src/core/types';
import { ExanteCsvData } from './__types__';
import { formatExanteCsvTransactions } from './helpers';
import AbstractSideBrokerage from '../AbstractSideBrokerage';

class ExanteBrokerage implements AbstractSideBrokerage {  
  transactions: Transaction[] = []

  static brandName = "Exante"
  static logoPath = "https://exante.eu/static/i/dest/website/components/logos/flat_icon_1024x1024.png"

  constructor(csvData: ExanteCsvData) {
    this.transactions = formatExanteCsvTransactions(csvData)
  }
}

export default ExanteBrokerage

