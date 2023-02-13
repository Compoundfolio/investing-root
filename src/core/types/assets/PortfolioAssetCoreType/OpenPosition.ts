import { AssetOpenPosition } from '../../../helpers/positions/getAllPositionsByBrokerageTransactions';
import { Ticker } from '../common';

type OpenPosition = { 
  [K: Ticker]: AssetOpenPosition 
} | {}

export default OpenPosition