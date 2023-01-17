import { memo } from 'react'
import { SSectionContainer } from './styled'
import { ReportFileUploadArea, SelectedBrokeragesSwitchingList } from './components'
import { useSelectedBrokerageToUploadReport } from './hooks'

const ReportsUploadArea = () => {
  const {
    selectedBrokerageName,
    handleChangeSelectedBrokerage
  } = useSelectedBrokerageToUploadReport()

  return (
    <SSectionContainer>
      <SelectedBrokeragesSwitchingList 
        selectedBrokerageName={selectedBrokerageName}
        handleChangeSelectedBrokerage={handleChangeSelectedBrokerage}
      />
      <ReportFileUploadArea 
        selectedBrokerageName={selectedBrokerageName}
      />
      {/* <NavigationAside /> */}
    </SSectionContainer>
  )
}

export default memo(ReportsUploadArea)
