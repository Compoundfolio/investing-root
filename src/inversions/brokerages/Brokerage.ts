import { SupportedBrokerage } from 'src/components/pages/BrokerageReportUploadPage';
import AbstractBrokerage from './AbstractBrokerage';
import AbstractSideBrokerage from './AbstractSideBrokerage';

/** Brokerage dependency inversion root */
export default class Brokerage implements AbstractBrokerage {
  private brokerage: AbstractSideBrokerage;
  private brandName: string
  private logoPath: string

  constructor(
    SideBrokerageClass: SupportedBrokerage,
    unparsedReport: string, 
  ) {
    this.brokerage = new SideBrokerageClass(unparsedReport);
    this.brandName = SideBrokerageClass.brandName
    this.logoPath = SideBrokerageClass.logoPath
  } 

  getBrandName() {
    return this.brandName
  };

  getLogoPath() {
    return this.logoPath
  };

  getAssets() {
    return this.brokerage.assets
  }

  getAllTransactions() {
    return this.brokerage.transactions
  };
}