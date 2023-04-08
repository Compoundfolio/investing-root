import { memo, useEffect } from 'react';
import { BrokeragesSelectionZone, ReportsUploadArea } from "./components"
import { useSelectedBrokeragesStore } from "./stores"
import { useOpen } from "src/core/hooks"
import ModalBlur from 'src/core/components/blocks/ModalBlur';
import { useRouter } from 'next/router';
import { DASHBOARD_PAGE_PATH } from 'src/routing';

const BrokerageReportUploadPage = () => {
  const { selectedBrokerages } = useSelectedBrokeragesStore()
  const router = useRouter()

  const [ 
    isReportsUploadModalOpen,
    handleReportsCsvUploadModalOpen,
    setIsReportsUploadModalOpen,
  ] = useOpen()

  useEffect(() => {
    selectedBrokerages.length && setIsReportsUploadModalOpen(true)
  }, [selectedBrokerages.length])

  const handleReportsUpload = () => {
    router.push(DASHBOARD_PAGE_PATH)
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
        noMaxWidth
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