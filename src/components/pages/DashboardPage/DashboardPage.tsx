import { memo } from "react"
import NumbersBar from "src/components/NumbersBar"
import styles from "./DashboardPage.module.css"
import { PageTitle } from "@core"
import {
  DivStatsBarChart,
  PortfolioAssetsList,
  PortfolioAssetsPieChart,
  PortfolioGrowthChart,
} from "./components"

const DashboardPage = () => {
  return (
    <section className={styles.dashboard_container}>
      {/* TODO: Improve grid's adaptivity */}
      <div className={styles.dashboard_column_visualizations_wrapper}>
        <div className={styles.dashboard_column_visualizations__item_1}>
          <PageTitle
            title="Portfolio"
            portfolioName="Dividend Growth F.I.R.E till 35th"
          />
          <PortfolioAssetsPieChart />
        </div>
        <PortfolioAssetsList />
        <DivStatsBarChart />
        <PortfolioGrowthChart />
      </div>
      <NumbersBar />
    </section>
  )
}

export default memo(DashboardPage)
