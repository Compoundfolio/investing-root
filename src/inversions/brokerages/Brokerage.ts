import { SupportedBrokerage } from 'src/components/pages/BrokerageReportUploadPage';
import AbstractBrokerage from './AbstractBrokerage';
import AbstractSideBrokerage from './AbstractSideBrokerage';
import { NonTradeTransaction, PortfolioOpenClosePositions, Transaction } from 'src/core/types';

/** Brokerage dependency inversion root */
export default class Brokerage implements AbstractBrokerage {
  private brokerage: AbstractSideBrokerage;
  private brandName: string
  private logoPath: string

  private transactions: Transaction[] = [] 
  private nonTradeTransactions: NonTradeTransaction[] = []
  private assets: PortfolioOpenClosePositions

  constructor(
    SideBrokerageClass: SupportedBrokerage,
    unparsedReport: string, 
  ) {
    const brokerageEntity = new SideBrokerageClass(unparsedReport)

    this.brokerage = brokerageEntity;
    this.brandName = SideBrokerageClass.brandName
    this.logoPath = SideBrokerageClass.logoPath
    this.transactions = brokerageEntity.transactions
    this.assets = brokerageEntity.assets
  } 

  getBrandName() {
    return this.brandName
  };

  getLogoPath() {
    return this.logoPath
  };

  getAssets() {
    return this.assets
  }

  getTradeTransactions() {
    return this.transactions
  };

  getNonTradeTransactions() {
    return this.nonTradeTransactions
  };
}