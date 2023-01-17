import { Transaction } from 'src/core/types';
import { formatExanteCsvTransactions } from './helpers';
import AbstractSideBrokerage from '../AbstractSideBrokerage';

class ExanteBrokerage implements AbstractSideBrokerage {  
  transactions: Transaction[] = []

  static brandName = "Exante"
  static logoPath = "https://exante.eu/static/i/dest/website/components/logos/flat_icon_1024x1024.png"

  constructor(reportUnParsedData: string) {
    this.transactions = formatExanteCsvTransactions(reportUnParsedData)
  }
}

export default ExanteBrokerage

