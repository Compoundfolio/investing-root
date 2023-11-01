// import { SupportedBrokerage } from "src/components/pages/BrokerageReportUploadPage"
import { ExanteBrokerage } from "src/inversions"

const getBrokerageClassByBrandName = (brandName: string) => {
  return [ExanteBrokerage].find(
    (Brokerage) => ExanteBrokerage.brandName === brandName
  )
}

export default getBrokerageClassByBrandName
