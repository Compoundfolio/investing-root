import { memo, useEffect } from 'react';
import { BrokeragesSelectionZone } from "./components"
import { useSelectedBrokeragesStore } from "./stores"
import { useOpen } from "src/core/hooks"
import ModalBlur from 'src/core/components/blocks/ModalBlur';

const BrokerageReportUploadPage = () => {
  const { selectedBrokerages } = useSelectedBrokeragesStore()

  const [ 
    isReportsUploadModalOpen,
    handleReportsCsvUploadModalOpen,
    setIsReportsUploadModalOpen,
  ] = useOpen()

  useEffect(() => {
    selectedBrokerages.length && setIsReportsUploadModalOpen(true)
  }, [selectedBrokerages.length])

  return (
    <>
      {/* UserGreetingsModal (low proir TODO) */} 

      <BrokeragesSelectionZone  />
      <ModalBlur
        isOpen={isReportsUploadModalOpen}
        handleOpenChange={handleReportsCsvUploadModalOpen}
      >
        {/* <ReportsUploadArea /> */}
        <div>ReportsUploadArea</div>
      </ModalBlur>
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