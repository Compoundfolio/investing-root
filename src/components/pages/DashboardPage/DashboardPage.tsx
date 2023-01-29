import { memo, useMemo } from 'react'
import NumbersBar from 'src/components/NumbersBar'
import { DashboardColumn, DashboardContainer } from './styled'
import { PageTitle } from '@core'
import { useSelectedBrokeragesStore } from '../BrokerageReportUploadPage/stores'
import { PortfolioAssetsList, PortfolioAssetsPieChart } from './components'
import Brokerage from 'src/inversions/brokerages/Brokerage';
import { useBrokeragesData } from 'src/store'

const DashboardPage = () => {
  const { brokerageEntities } = useBrokeragesData()
// TODO: Refactor
  // const f = new Brokerage(new selectedBrokerages[0])


  const brokeragesIconLinks = useMemo(() => {
    return brokerageEntities.map(brokerageEntity => brokerageEntity.getLogoPath())
  }, [brokerageEntities])
  
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