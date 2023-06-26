import { Metadata } from "next"
import React from "react"
import BrokerageReportUploadPage from "src/components/pages/BrokerageReportUploadPage/BrokerageReportUploadPage"

export const metadata: Metadata = {
  title: "Initial setup",
}

const BrokeragesSelection = () => {
  return <BrokerageReportUploadPage />
}

export default BrokeragesSelection
