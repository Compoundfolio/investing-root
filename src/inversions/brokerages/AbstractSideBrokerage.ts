import { PortfolioOpenClosePositions, Transaction } from "src/core/types";

export default abstract class AbstractSideBrokerage {
  static brandName: string;
  static logoPath: string;
  
  public transactions: Transaction[] = []
  public assets: PortfolioOpenClosePositions = {
    openPositions: {},
    closedPositions: {},
  }
  // TODO:
  constructor(reportUnParsedData: string) {}
}
