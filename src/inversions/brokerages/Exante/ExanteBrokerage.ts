import { PortfolioOpenClosePositions, Transaction } from 'src/core/types';
import { 
  formatExanteCsvTransactions, 
  getExanteAssetListFromTransactions,
} from './helpers';
import AbstractSideBrokerage from '../AbstractSideBrokerage';

class ExanteBrokerage implements AbstractSideBrokerage {  
  transactions: Transaction[] = []
 
  assets: PortfolioOpenClosePositions

  static brandName = "Exante"
  static logoPath = "https://exante.eu/static/i/dest/website/components/logos/flat_icon_1024x1024.png"

  constructor(reportUnParsedData: string) {
    this.transactions = formatExanteCsvTransactions(reportUnParsedData)
    this.assets = getExanteAssetListFromTransactions(this.transactions)    
    console.log(123, this.transactions, this.assets);
    
  }
}

export default ExanteBrokerage

