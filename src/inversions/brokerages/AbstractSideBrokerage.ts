import { Transaction } from "src/core/types";

export default abstract class AbstractSideBrokerage {
  public transactions: Transaction[] = []
  public assets: any = {
    openPositions: {},
    closedPositions: {},
  }
  static brandName: string
  static logoPath: string
  // TODO:
  constructor(reportUnParsedData: string) {}
}
