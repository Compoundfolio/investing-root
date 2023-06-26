import { memo } from "react"
import styles from "./ReportsUploadArea.module.css"
import {
  ReportFileUploadArea,
  SelectedBrokeragesSwitchingList,
} from "./components"
import { useSelectedBrokerageToUploadReport } from "./hooks"

const ReportsUploadArea = () => {
  const { selectedBrokerageName, handleChangeSelectedBrokerage } =
    useSelectedBrokerageToUploadReport()

  return (
    <section className={styles.sectionContainer}>
      <SelectedBrokeragesSwitchingList
        selectedBrokerageName={selectedBrokerageName}
        handleChangeSelectedBrokerage={handleChangeSelectedBrokerage}
      />
      <ReportFileUploadArea selectedBrokerageName={selectedBrokerageName} />
      <SelectedBrokeragesSwitchingList
        selectedBrokerageName={selectedBrokerageName}
        handleChangeSelectedBrokerage={handleChangeSelectedBrokerage}
      />
    </section>
  )
}

export default memo(ReportsUploadArea)
