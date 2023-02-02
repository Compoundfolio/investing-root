import { BrokerageTransactionType, NormalizedTransactionsByTicker, OrderOperation, PortfolioAsset, Transaction } from 'src/core/types';
import { parseNumber } from '../formaters';
import { getCurrentPositionPrice, getSharesAmount } from './helpers';
import { MarketAPI } from 'src/api/market';




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



  const f = await MarketAPI.getSharePriceByTicker("AVGO")
  console.log("f", f);
  

  Object
    .entries(transactionsByTicker)
    .forEach(([ ticker, transactionsList ]) => { 
      const sharesAmount = getSharesAmount(transactionsList)
      const currentPositionPrice = getCurrentPositionPrice(transactionsList, sharesAmount)
      const openPositionData: AssetOpenPosition = {
        sharesAmount,
        currentPositionPrice,
        averagePrice: currentPositionPrice / sharesAmount,
        actualPositionPrice: 1 * sharesAmount
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