"use client"

import React, { memo } from "react"
import {
  MainAreaWrapper,
  PortfolioManagementArea,
  PortfoliosMenu,
  InitialTransactionsUploadExperience,
  AddPortfolioPlateButton,
} from "./components"
import { Divider, Spinner } from "@core"
import { usePortfolioManagerContext } from "./context/PortfolioManagerContextData"
import Services from "src/services"

const PortfoliosManagementPage = () => {
  const portfoliosContext = usePortfolioManagerContext()

  const { isLoading, error } = Services.User.Portfolios.useGetAll(
    portfoliosContext.setPortfolios
  )

  if (error) return error.message

  return (
    <div className="flex flex-col w-full h-full gap-8">
      {isLoading ? (
        <div className="flex items-center justify-center gap-2 w-fit">
          <Spinner />
          <div className="text-center">
            <span className="text-white text-shadow-white">
              Loading portfolios
            </span>
          </div>
        </div>
      ) : portfoliosContext?.isNoPortfolios ? (
        <AddPortfolioPlateButton key="portfolioCreateButton" />
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
