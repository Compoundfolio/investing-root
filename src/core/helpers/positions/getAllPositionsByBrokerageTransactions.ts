import {
  AssetPosition,
  NormalizedTransactionsByTicker,
  PortfolioOpenClosePositions,
  Ticker,
  Transaction,
  NonTradeTransaction,
} from 'src/core/types';
import {
  getCurrentPositionPrice,
  getDividendStatsByTicker,
  getDividendHistoryByTicker,
  getSharesAmount,
  getNonTradeTransactions,
  getDividendTransactionsWithTax
} from './helpers';
import { TickerAndPrice } from 'src/api/market/types';
import { v4 as uuidv4 } from 'uuid';
import { parseNumberToFixed2 } from '../formaters';

const currentMarketAssetsPrices: TickerAndPrice = {
  ALLY: 33.5,
  BBY: 88.77,
  TROW: 111.00,
  BST: 35.66,
  SCHD: 77.88,
  LOW: 199.33,
  V: 203.44,
  TSCO: 222.43,
  HD: 333.67,
  ABBV: 167.5,
  AVGO: 500.44,
  TXN: 191.91,
}

const getAllPositionsByBrokerageTransactions = (
  tradeTransactionsByTicker: NormalizedTransactionsByTicker,
  nonTradeTransactions: NormalizedTransactionsByTicker<NonTradeTransaction>
): PortfolioOpenClosePositions => {  
  let openPositions: PortfolioOpenClosePositions["openPositions"] = {}
  let closedPositions: PortfolioOpenClosePositions["closedPositions"] = {}

  // const tickersListWithOpenPosition = getTickersListWithOpenPosition(tradeTransactionsByTicker)
  // TODO: Uncomment when API will be purchased
  // const tickersWithOpenPositionMarketPriceDictionary: TickerAndPrice = await Api.POST("/api/market", tickersListWithOpenPosition)  
  const tickersWithOpenPositionMarketPriceDictionary = currentMarketAssetsPrices
  // console.log("tickersWithOpenPositionMarketPriceDictionary", tickersWithOpenPositionMarketPriceDictionary);

  Object
    .entries(tradeTransactionsByTicker)
    .forEach(([ticker, transactionsList]: [Ticker, Transaction[]]) => {
      const sharesAmount = getSharesAmount(transactionsList)
      const openPositionPrice = getCurrentPositionPrice(transactionsList, tickersWithOpenPositionMarketPriceDictionary)
      // const wholeDividendHistoryForTicker = await getDividendHistoryByTicker(ticker)
      const wholeDividendHistoryForTicker = []
      const dividendStats = getDividendStatsByTicker(ticker, sharesAmount)
      const shareMarketPrice = tickersWithOpenPositionMarketPriceDictionary[ticker]
      const nonTradeTransactionsList = nonTradeTransactions[ticker]

      const payedDividendTransactionsWithoutTax = getNonTradeTransactions<"DIVIDEND">(nonTradeTransactionsList, "DIVIDEND")
      const payedDividendTaxTransactions = getNonTradeTransactions<"TAX">(nonTradeTransactionsList, "TAX")
      const payedBrokerageCommissionsTransactions = getNonTradeTransactions<"COMMISSION">(nonTradeTransactionsList, "COMMISSION")
      
      const payedDividendTransactionsWithTax = getDividendTransactionsWithTax(
        payedDividendTransactionsWithoutTax, 
        payedDividendTaxTransactions
      )

      const positionData: AssetPosition = {
        // TODO: Add trade transactions list field
        id: uuidv4(),
        ticker,
        sharesAmount: sharesAmount,
        currentPositionPrice: sharesAmount > 0 ? shareMarketPrice : 0, // Market 1 share price
        // averagePrice: openPositionInvestedValue / sharesAmount,
        averagePrice: sharesAmount > 0 ? openPositionPrice / sharesAmount : 0, // Avg. portfolio 1 share price // TODO: Calculates wrong // TODO: Calc. wrong for sold out positions, openPositionPrice calculates wrong for this case
        actualPositionPrice: sharesAmount > 0 ? parseNumberToFixed2(openPositionPrice) : 0,
        dividendStats,
        wholeMarketDividendHistory: wholeDividendHistoryForTicker,
        payedDividendTransactions: payedDividendTransactionsWithTax,
        payedDividendTaxTransactions,
        payedBrokerageCommissionsTransactions,
      }

      if (positionData.sharesAmount > 0) {  
        openPositions = { ...openPositions, [ticker]: positionData }
      } else {
        closedPositions = { ...closedPositions, [ticker]: positionData }
      }
    })

  let positions: PortfolioOpenClosePositions = {
    openPositions,
    closedPositions,
  }  

  return positions
}

export default getAllPositionsByBrokerageTransactions