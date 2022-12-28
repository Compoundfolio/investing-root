import { Transaction } from "src/core/types";

export default interface IBrokerage {
  getAssetsAmount: () => number;
  getAllTransactions: () => Transaction[]
}