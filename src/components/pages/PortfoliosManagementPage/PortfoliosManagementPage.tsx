import React, { memo } from "react"
import {
  MainAreaWrapper,
  PlateAddButton,
  PortfolioManagementArea,
  PortfoliosMenu,
  InitialTransactionsUploadExperience,
} from "./components"
import { Divider } from "@core"
import { usePortfolioManagerContext } from "./context/PortfolioManagerContextData"

const PortfoliosManagementPage = () => {
  const portfoliosContext = usePortfolioManagerContext()

  return (
    <div className="flex flex-col w-full gap-8">
      {portfoliosContext?.isNoPortfolios ? (
        <PlateAddButton key="portfolioCreateButton" title="Create Portfolio" />
      ) : (
        <>
          <PortfoliosMenu />
          <MainAreaWrapper>
            <Divider />
            {portfoliosContext?.selectedPortfolioCard?.transactions ? (
              <PortfolioManagementArea />
            ) : (
              <InitialTransactionsUploadExperience />
            )}
          </MainAreaWrapper>
        </>
      )}
    </div>
  )
}

export default memo(PortfoliosManagementPage)
