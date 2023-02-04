import { NormalizedTransactionsByTicker, PortfolioAsset } from 'src/core/types';
import {  
  getCurrentPositionPrice, 
  getSharesAmount, 
  getTickersListWithOpenPosition,
} from './helpers';
import { MarketAPI } from 'src/api/market';
import { Api } from 'src/inversions';

// TODO: Pass smw else + rename
type AssetOpenPosition = {
  sharesAmount: number;
  /** By all open shares */
  currentPositionPrice: number; // TODO: Rename as invested amount
  
  /** Average open position price */
  averagePrice: number;
  actualPositionPrice: number // actualOneSharePrice*sharesAmount
  
}

const getAllPositionsByBrokerageTransactions = async (
  transactionsByTicker: NormalizedTransactionsByTicker
  //@ts-ignore
): PortfolioAsset => {    
  let positions = {
    openPositions: {} as AssetOpenPosition,
    closedPositions: {},
  }

  const tickersListWithOpenPosition = getTickersListWithOpenPosition(transactionsByTicker)
  const tickersWithOpenPositionMarketPriceDictionary: any = await Api.POST("/api/market", tickersListWithOpenPosition)  

  Object
    .entries(transactionsByTicker)
    .forEach(([ ticker, transactionsList ]) => { 
      const sharesAmount = getSharesAmount(transactionsList)
      const currentPositionPrice = getCurrentPositionPrice(transactionsList, tickersWithOpenPositionMarketPriceDictionary)
      const openPositionData: AssetOpenPosition = {
        sharesAmount,
        currentPositionPrice,
        averagePrice: currentPositionPrice / sharesAmount,
        actualPositionPrice: 1 * sharesAmount
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