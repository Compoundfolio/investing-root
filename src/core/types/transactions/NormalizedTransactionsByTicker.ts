import { Ticker } from "../assets";
import { Transaction } from "../brokerage";

type NormalizedTransactionsByTicker<T = Transaction> = {
  [Ticker: Ticker]: T[];
}

export default NormalizedTransactionsByTicker