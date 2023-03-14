import { memo, useMemo } from 'react';
import NumbersBar from 'src/components/NumbersBar'
import { DashboardColumn, DashboardContainer } from './styled'
import { PageTitle } from '@core'
import { DivStatsBarChart, PortfolioAssetsList, PortfolioAssetsPieChart } from './components'
import { useBrokeragesData } from 'src/store'

const DashboardPage = () => {
  const { brokerageEntities } = useBrokeragesData()

  const brokeragesIconLinks = useMemo(() => {
    return brokerageEntities.map(brokerageEntity => brokerageEntity.getLogoPath())
  }, [brokerageEntities])
  
  return (
    <DashboardContainer>
      <DashboardColumn fitContent>
        <PageTitle 
          title="Portfolio"
          // TODO: Remove hardcoded portfolioName
          portfolioName="Dividend Growth F.I.R.E till 35th"
          brokeragesIconLinks={brokeragesIconLinks}
        />
        <PortfolioAssetsPieChart />
        <DivStatsBarChart />
      </DashboardColumn>
      <DashboardColumn>
        <PortfolioAssetsList />
        {/* <PortfolioGrowthStats /> */}
      </DashboardColumn>
      <NumbersBar />
    </DashboardContainer>
  )
}

export default memo(DashboardPage)