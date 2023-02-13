import { NormalizedTransactionsByTicker, PortfolioOpenClosePositions } from 'src/core/types';
import {  
  getCurrentPositionPrice, 
  getSharesAmount, 
} from './helpers';
import { TickerAndPrice } from 'src/api/market/types';

// TODO: Pass smw else + rename
export type AssetOpenPosition = {
  sharesAmount: number;
  /** By all open shares */
  currentPositionPrice: number; // TODO: Rename as invested amount
  
  /** Average open position price */
  averagePrice: number;
  actualPositionPrice: number // actualOneSharePrice*sharesAmount
  
}

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
  transactionsByTicker: NormalizedTransactionsByTicker
  //@ts-ignore
): PortfolioOpenClosePositions => {    
  let positions: PortfolioOpenClosePositions = {
    openPositions: {},
    closedPositions: {},
  }  

  // const tickersListWithOpenPosition = getTickersListWithOpenPosition(transactionsByTicker)
  // TODO: Uncomment when API will be purchased
  // const tickersWithOpenPositionMarketPriceDictionary: TickerAndPrice = await Api.POST("/api/market", tickersListWithOpenPosition)  
  const tickersWithOpenPositionMarketPriceDictionary = testData  
  // console.log("tickersWithOpenPositionMarketPriceDictionary", tickersWithOpenPositionMarketPriceDictionary);

  Object
    .entries(transactionsByTicker)
    .forEach(([ ticker, transactionsList ]) => { 
      const openSharesAmount = getSharesAmount(transactionsList)
      const openPositionPrice = getCurrentPositionPrice(transactionsList, tickersWithOpenPositionMarketPriceDictionary)
      const shareMarketPrice = tickersWithOpenPositionMarketPriceDictionary[ticker]

      const openPositionData: AssetOpenPosition = {
        sharesAmount: openSharesAmount,
        currentPositionPrice: shareMarketPrice, // Market 1 share price
        // averagePrice: openPositionInvestedValue / openSharesAmount,
        averagePrice: openPositionPrice / openSharesAmount, // Avg. portfolio 1 share price // TODO: Calculates wrong
        actualPositionPrice: openPositionPrice
      }
      // TODO: Count sold out positions too
      
      if (openPositionData.sharesAmount > 0) {
        positions.openPositions = { ...positions.openPositions, [ticker]: openPositionData }
      } else {
        positions.closedPositions = { ...positions.closedPositions, [ticker]: {} }
      }
    }) 

  return positions
}

export default getAllPositionsByBrokerageTransactions