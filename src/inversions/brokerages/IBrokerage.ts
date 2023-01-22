import { Transaction } from "src/core/types";
import AbstractSideBrokerage from "./AbstractSideBrokerage";

export default interface IBrokerage {
  brokerage: AbstractSideBrokerage
  getAllTransactions: () => Transaction[]
}