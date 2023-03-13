import {
  AssetOpenPosition,
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
} from './helpers';
import { TickerAndPrice } from 'src/api/market/types';
import { v4 as uuidv4 } from 'uuid';

const testData: TickerAndPrice = {
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
  const tickersWithOpenPositionMarketPriceDictionary = testData
  // console.log("tickersWithOpenPositionMarketPriceDictionary", tickersWithOpenPositionMarketPriceDictionary);

  Object
    .entries(tradeTransactionsByTicker)
    .forEach(async ([ticker, transactionsList]: [Ticker, Transaction[]]) => {
      const openSharesAmount = getSharesAmount(transactionsList)
      const openPositionPrice = getCurrentPositionPrice(transactionsList, tickersWithOpenPositionMarketPriceDictionary)
      const wholeDividendHistoryForTicker = await getDividendHistoryByTicker(ticker)
      const dividendStats = getDividendStatsByTicker(ticker, openSharesAmount)
      const shareMarketPrice = tickersWithOpenPositionMarketPriceDictionary[ticker]
      const nonTradeTransactionsList = nonTradeTransactions[ticker]

      const openPositionData: AssetOpenPosition = {
        // TODO: Add trade transactions list field
        id: uuidv4(),
        ticker,
        sharesAmount: openSharesAmount,
        currentPositionPrice: shareMarketPrice, // Market 1 share price
        // averagePrice: openPositionInvestedValue / openSharesAmount,
        averagePrice: openPositionPrice / openSharesAmount, // Avg. portfolio 1 share price // TODO: Calculates wrong
        actualPositionPrice: Number(openPositionPrice.toFixed(2)),
        dividendStats,
        wholeMarketDividendHistory: wholeDividendHistoryForTicker,
        payedDividendTaxTransactions: getNonTradeTransactions(nonTradeTransactionsList, ["US TAX", "TAX"]),
        payedBrokerageCommissionsTransactions: getNonTradeTransactions(nonTradeTransactionsList, "COMMISSION"),
        payedDividendTransactions: getNonTradeTransactions(nonTradeTransactionsList, "DIVIDEND"),
      }

      // TODO: Count sold out positions too

      if (openPositionData.sharesAmount > 0) {
        openPositions = { ...positions.openPositions, [ticker]: openPositionData }
      } else {
        closedPositions = { ...positions.closedPositions, [ticker]: {} }
      }
    })

  let positions: PortfolioOpenClosePositions = {
    openPositions: {},
    closedPositions: {},
  }

  return positions
}

export default getAllPositionsByBrokerageTransactions