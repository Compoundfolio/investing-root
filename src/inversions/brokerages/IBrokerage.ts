import { Transaction } from "src/core/types";
import ISideBrokerage from "./ISideBrokerage";

export default interface IBrokerage {
  brokerage: ISideBrokerage
  getAllTransactions: () => Transaction[]
}