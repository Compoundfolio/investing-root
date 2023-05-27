import { memo, useEffect } from 'react';
import { BrokeragesSelectionZone, ReportsUploadArea } from "./components"
import { useSelectedBrokeragesStore } from "./stores"
import { useOpen } from "src/core/hooks"
import ModalBlur from 'src/core/components/blocks/ModalBlur';
import { useRouter } from 'next/router';
import { ROUTES } from '../../../routing/routes';

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
    router.push(ROUTES.DASHBOARD)
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
    </>
  )
}

export default memo(BrokerageReportUploadPage)