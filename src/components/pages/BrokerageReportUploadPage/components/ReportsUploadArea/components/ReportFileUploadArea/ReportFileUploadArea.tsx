import { memo } from "react"
import { DndFileArea } from "./components"

const ReportFileUploadArea = () => {
  return (
    <div>
      <div>
        {/* <Title /> */}
        {/* <HelpBtn /> */}
      </div>
      <DndFileArea />
    </div>
  )
}

export default memo(ReportFileUploadArea)