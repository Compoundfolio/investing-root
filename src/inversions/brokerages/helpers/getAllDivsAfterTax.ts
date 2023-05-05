import { Dividends, PortfolioOpenClosePositions } from 'src/core/types';
import { calculateDivAfterTax } from './helpers';

const getAllDivsAfterTax = (positions: PortfolioOpenClosePositions): Dividends => {
  const { openPositions, closedPositions } = positions
  const allPositions = Object.values({ ...openPositions, ...closedPositions })
  
  const divsAfterTax = calculateDivAfterTax(allPositions)
  console.log(divsAfterTax);
  
  return divsAfterTax
}

export default getAllDivsAfterTax