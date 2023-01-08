import { memo, useState } from "react"
import { BrokeragesSelectionZone } from "./components"

const BrokerageReportUploadPage = () => {
  const [ BrokerageClass, setBrokerageClass ] = useState()

  return (
    <>
      {/* UserGreetingsModal (low proir TODO) */} 

      <BrokeragesSelectionZone />
      {/** BrokeragesSelectionZone
       * -[] BrokerageSelectionTower[X1]
       
       * --- FrameWithBrokerageIcon
       * --- BrokerageTitle
      */}

      {/** BrokerageReportsUploadModal
       * -[] ReportUploadArea
       * --[] Header
       * --- FileFormatUploadTitle[csv]
       * ---[] HowToGetBrokerageReport
       * ---- HowToGetBrokerageReportButton
       * ---- HowToGetBrokerageReportModal (TODO)
       * --[] ReportUploadDropZone (as renamed reusable component) (TODO)
       * -[] NavigationSmth.. (TODO)
       * - ProcessReportsButton
      */}
    </>
  )
}

export default memo(BrokerageReportUploadPage)