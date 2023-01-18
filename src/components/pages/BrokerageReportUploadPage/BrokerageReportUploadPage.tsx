import { memo, useEffect } from 'react';
import { BrokeragesSelectionZone, ReportsUploadArea } from "./components"
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

  const handleReportsUpload = () => {
    // Save selected brokerages classes entity list to the storage
    // Save selected report data to the storage
    // Save selected report data to the storage
  }

  return (
    <>
      {/* UserGreetingsModal (low prior TODO) */} 
      <BrokeragesSelectionZone  />
      <ModalBlur
        isOpen={isReportsUploadModalOpen}
        handleOpenChange={handleReportsCsvUploadModalOpen}
        onSave={handleReportsUpload}
        // saveButtonTitle=""
      >
        <ReportsUploadArea />
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