import { memo, useMemo } from 'react'
import NumbersBar from 'src/components/NumbersBar'
import { DashboardColumn, DashboardContainer } from './styled'
import { PageTitle } from '@core'
import { useSelectedBrokeragesStore } from '../BrokerageReportUploadPage/stores'
import { PortfolioAssetsList, PortfolioAssetsPieChart } from './components'
import Brokerage from 'src/inversions/brokerages/Brokerage';

const DashboardPage = () => {
  const { selectedBrokerages } = useSelectedBrokeragesStore()
// TODO: Refactor
  // const f = new Brokerage(new selectedBrokerages[0])


  const brokeragesIconLinks = useMemo(() => {
    return selectedBrokerages.map(brokerage => brokerage.getLogoPath())
  }, [selectedBrokerages])
  
  return (
    <DashboardContainer>
      <DashboardColumn>
        <PageTitle 
          title="Portfolio"
          // TODO: Remove hardcoded portfolioName
          portfolioName="Dividend Growth F.I.R.E till 35th"
          brokeragesIconLinks={brokeragesIconLinks}
        />
        <PortfolioAssetsPieChart 
          // assets={}
        />
        {/* <DivStats /> */}
      </DashboardColumn>
      <DashboardColumn>
        {/* <PortfolioAssetsList /> */}
        {/* <PortfolioGrowthStats /> */}
      </DashboardColumn>
      <NumbersBar />
    </DashboardContainer>
  )
}

export default memo(DashboardPage)