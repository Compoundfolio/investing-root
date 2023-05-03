import { Dividends, PortfolioOpenClosePositions } from 'src/core/types';
import { calculateDivAfterTax } from './helpers';

const getAllDivsAfterTax = (positions: PortfolioOpenClosePositions): Dividends => {
  const { openPositions, closedPositions } = positions
  const allPositions = Object.values({ ...openPositions, ...closedPositions })
  const divsAfterTax = calculateDivAfterTax(allPositions)
  // TODO: Extend closedPositions type
  // TODO: openPositions & closedPositions MUST HAVE SAME TYPE!


}

export default getAllDivsAfterTax