import { Transaction } from "src/core/types";

export default abstract class AbstractSideBrokerage {
  public transactions: Transaction[] = []
  static brandName: string
  static logoPath: string
  // TODO:
  constructor(reportUnParsedData: string) {}
}
