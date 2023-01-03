import { memo } from "react"

const BrokerageReportUploadPage = () => {
  return (
    <>
      {/* UserGreetingsModal */}

      {/** BrokeragesSelectionZone
       * -[] BrokerageSelectionTower[X1]
       * -- AppLogo[withTitle] (z-indexed on modal appear)
       * -- HelpLegend
       * --[] .map => BrokerageSelectionBrick (z-indexed on modal appear [selected ones])
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