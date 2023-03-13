import { Ticker } from '../common';
import AssetOpenPosition from './AssetOpenPosition';

type OpenPosition = { 
  [K: Ticker]: AssetOpenPosition
} | {}

export default OpenPosition