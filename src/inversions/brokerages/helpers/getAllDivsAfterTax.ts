import { Dividends, PortfolioOpenClosePositions } from 'src/core/types';
import { calculateDivAfterTax } from './helpers';

const getAllDivsAfterTax = (positions: PortfolioOpenClosePositions): Dividends => {
  const { openPositions, closedPositions } = positions
  const allPositions = Object.values({ ...openPositions, ...closedPositions })
  console.log(openPositions);
  console.log(closedPositions);
  
  const divsAfterTax = calculateDivAfterTax(allPositions)
  return divsAfterTax
}

export default getAllDivsAfterTax