"use client" // TODO: REMOVE

import React, { memo, useEffect } from "react"
import {
  MainAreaWrapper,
  PlateAddButton,
  PortfolioManagementArea,
  PortfoliosMenu,
  InitialTransactionsUploadExperience,
} from "./components"
import { Divider, Spinner } from "@core"
import { usePortfolioManagerContext } from "./context/PortfolioManagerContextData"
import { useGetUserPortfolios } from "src/services"

const PortfoliosManagementPage = () => {
  const portfoliosContext = usePortfolioManagerContext()

  const { isLoading, error } = useGetUserPortfolios(
    portfoliosContext.setPortfolios
  )

  if (error) return error.message

  return (
    <div className="flex flex-col w-full h-full gap-8">
      {isLoading ? (
        <div>
          <Spinner />
          <div className="text-center">
            <h1 className="text-white text-shadow-white">Loading portfolios</h1>
          </div>
        </div>
      ) : portfoliosContext?.isNoPortfolios ? (
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
