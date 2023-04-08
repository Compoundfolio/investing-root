import { memo } from "react"
import { DndFileArea } from "./components"
import { IReportFileUploadArea } from './__types__';
import HelpToUploadBtn from "./components/HelpToUploadBtn/HelpToUploadBtn";

const ReportFileUploadArea = ({
  selectedBrokerageName
}: IReportFileUploadArea) => {
  return (
    <div>
      <div>
        {/* TODO: */}
        {/* <Title /> */}
        <HelpToUploadBtn 
          // selectedBrokerageName={selectedBrokerageName} 
        />
      </div>
      <DndFileArea 
        selectedBrokerageName={selectedBrokerageName} 
      />
    </div>
  )
}

export default memo(ReportFileUploadArea)