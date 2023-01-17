import { SUPPORTED_BROKERAGES } from '../../../components/pages/BrokerageReportUploadPage/consts'

const getBrokerageClassByBrandName = (brandName: string) => {
  return SUPPORTED_BROKERAGES.find(Brokerage => Brokerage.brandName === brandName)
}

export default getBrokerageClassByBrandName