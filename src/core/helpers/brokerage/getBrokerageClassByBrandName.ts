import { SupportedBrokerage } from 'src/components/pages/BrokerageReportUploadPage';
import { SUPPORTED_BROKERAGES } from '../../../components/pages/BrokerageReportUploadPage/components/BrokeragesSelectionZone/BrokeragesSelectionZone';

const getBrokerageClassByBrandName = (brandName: string) => {
  return SUPPORTED_BROKERAGES
    .find(Brokerage => Brokerage.brandName === brandName) as SupportedBrokerage
}

export default getBrokerageClassByBrandName