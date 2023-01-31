import { BrokerageTransactionType, NormalizedTransactionsByTicker, OrderOperation, PortfolioAsset, Transaction } from 'src/core/types';
import { parseNumber } from '../formaters';
import { getAveragePositionPrice, getCurrentPositionPrice, getSharesAmount } from './helpers';
import { MarketAPI } from 'src/inversions';




// TODO: Pass smw else + rename
type AssetOpenPosition = {
  sharesAmount: number;
  /** By all open shares */
  currentPositionPrice: number; // TODO: Rename as invested amount
  
  /** Average open position price */
  averagePrice: number;
  actualPositionPrice: number // actualOneSharePrice*sharesAmount
  
}

const getAllPositionsByBrokerageTransactions = (
  transactionsByTicker: NormalizedTransactionsByTicker
): PortfolioAsset => {    
  let positions = {
    openPositions: {} as AssetOpenPosition,
    closedPositions: {},
  }

  Object
    .entries(transactionsByTicker)
    .forEach(([ ticker, transactionsList ]) => { 
      const sharesAmount = getSharesAmount(transactionsList)
      const currentPositionPrice = getCurrentPositionPrice(transactionsList, sharesAmount)
      const openPositionData: AssetOpenPosition = {
        sharesAmount,
        currentPositionPrice,
        averagePrice: currentPositionPrice / sharesAmount,
        actualPositionPrice: MarketAPI.getSharePriceByTicker(ticker) * sharesAmount
      }

      if (openPositionData.sharesAmount > 0) {
        positions.openPositions = { ...positions.openPositions, [ticker]: openPositionData }
      } else {
        positions.closedPositions = { ...positions.closedPositions, [ticker]: {} }
      }
    }) 

  return positions
}

export default getAllPositionsByBrokerageTransactions