import { memo } from "react"
import { DndFileArea } from "./components"
import { IReportFileUploadArea } from './__types__';

const ReportFileUploadArea = ({
  selectedBrokerageName
}: IReportFileUploadArea) => {
  return (
    <div>
      <div>
        {/* <Title /> */}
        {/* <HelpBtn /> */}
      </div>
      <DndFileArea 
        selectedBrokerageName={selectedBrokerageName} 
      />
    </div>
  )
}

export default memo(ReportFileUploadArea)