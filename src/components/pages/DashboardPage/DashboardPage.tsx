import { memo } from 'react'
import NumbersBar from 'src/components/NumbersBar'

const DashboardPage = () => {
  return (
    <div>
      <div>
        {/* <PageTitle /> */}
        {/* <Pie /> */}
        {/* <DivStats /> */}
      </div>
      <div>
        {/* <DivStats /> */}
        {/* <PortfolioGrowthStats /> */}
      </div>
      <NumbersBar />
    </div>
  )
}

export default memo(DashboardPage)