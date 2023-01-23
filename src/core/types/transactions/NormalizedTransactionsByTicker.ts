import { Ticker } from "../assets";
import { Transaction } from "../brokerage";

type NormalizedTransactionsByTicker = {
  [Ticker: Ticker]: Transaction[];
}

export default NormalizedTransactionsByTicker