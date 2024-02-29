"use client" // TODO: REMOVE

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
import { useGetUserPortfolios } from "src/services"

const PortfoliosManagementPage = () => {
  const portfoliosContext = usePortfolioManagerContext()

  const { data, isLoading, error } = useGetUserPortfolios()

  if (data) return "Реакт-квераю кверик ..."
  if (error) {
    console.warn(123, error)
    return error.message
  }

  if (isLoading)
    return (
      <div className="flex flex-col w-full gap-8">
        {portfoliosContext?.isNoPortfolios ? (
          <PlateAddButton
            key="portfolioCreateButton"
            title="Create Portfolio"
          />
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
