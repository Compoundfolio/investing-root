import { Transaction } from "src/core/types";
import ISideBrokerage from "./AbstractSideBrokerage";

export default interface IBrokerage {
  brokerage: ISideBrokerage
  getAllTransactions: () => Transaction[]
}