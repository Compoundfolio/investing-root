import { memo } from 'react'
import { SSectionContainer } from './styled'
import { SelectedBrokeragesSwitchingList } from './components'

const ReportsUploadArea = () => {
  return (
    <SSectionContainer>
      <SelectedBrokeragesSwitchingList />
      {/* <ReportFileUploadArea /> */}
      {/* <NavigationAside /> */}
    </SSectionContainer>
  )
}

export default memo(ReportsUploadArea)
