import { Dividends, NonTradeTransaction, PortfolioOpenClosePositions, Transaction } from 'src/core/types';
import { 
  formatExanteCsvTransactions, 
  getExanteAssetListFromTransactions,
} from './helpers';
import AbstractSideBrokerage from '../AbstractSideBrokerage';

class ExanteBrokerage implements AbstractSideBrokerage {  
  transactions: Transaction[] = []
  nonTradeTransactions: NonTradeTransaction[] = []
  assets: PortfolioOpenClosePositions
  taxedDividends: Dividends = {}

  static brandName = "Exante"
  static logoPath = "https://exante.eu/static/i/dest/website/components/logos/flat_icon_1024x1024.png"

  constructor(reportUnParsedData: string) {
    const { parsedTradeTransactions, parsedNonTradeTransactions } = formatExanteCsvTransactions(reportUnParsedData)
    
    this.transactions = parsedTradeTransactions
    this.nonTradeTransactions = parsedNonTradeTransactions
    this.assets = getExanteAssetListFromTransactions(this.transactions, this.nonTradeTransactions)   
  }
}

export default ExanteBrokerage

