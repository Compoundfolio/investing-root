import { memo, useMemo } from 'react';
import NumbersBar from 'src/components/NumbersBar'
import styles from './DashboardPage.module.css'
import { PageTitle } from '@core'
import { DivStatsBarChart, PortfolioAssetsList, PortfolioAssetsPieChart, PortfolioGrowthChart } from './components'
import { useBrokeragesData } from 'src/store'
import clsx from 'clsx';

const DashboardPage = () => {
  const { brokerageEntities } = useBrokeragesData()

  const brokeragesIconLinks = useMemo(() => {
    return brokerageEntities.map(brokerageEntity => brokerageEntity.getLogoPath())
  }, [brokerageEntities])

  return (
    <section className={styles.dashboard_container}>
      <section className={clsx(styles.dashboard_column, styles.fitContent)}>
        <PageTitle
          title="Portfolio"
          // TODO: Remove hardcoded portfolioName
          portfolioName="Dividend Growth F.I.R.E till 35th"
          brokeragesIconLinks={brokeragesIconLinks}
        />
        <PortfolioAssetsPieChart />
        <DivStatsBarChart />
      </section>
      <section className={styles.dashboard_column}>
        <PortfolioAssetsList />
        <PortfolioGrowthChart />
      </section>
      <NumbersBar />
    </section>
  )
}

export default memo(DashboardPage)