import { Transaction } from "src/core/types";

export default abstract class AbstractSideBrokerage {
  public transactions: Transaction[] = []
  public brandName!: string;
  public logoPath!: string;

  public assets: any = {
    openPositions: {},
    closedPositions: {},
  }
  // TODO:
  constructor(reportUnParsedData: string) {}
}
