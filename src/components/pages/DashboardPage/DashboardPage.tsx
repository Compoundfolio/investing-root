import { memo } from 'react';
import NumbersBar from 'src/components/NumbersBar'
import styles from './DashboardPage.module.css'
import { PageTitle } from '@core'
import { DivStatsBarChart, PortfolioAssetsList, PortfolioAssetsPieChart, PortfolioGrowthChart } from './components'
import clsx from 'clsx';

const DashboardPage = () => {
  return (
    <section className={styles.dashboard_container}>
      <section className={clsx(styles.dashboard_column, styles.fitContent)}>
        {/* TODO: Remove hardcoded props */}
        <PageTitle
          title="Portfolio"
          portfolioName="Dividend Growth F.I.R.E till 35th"
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