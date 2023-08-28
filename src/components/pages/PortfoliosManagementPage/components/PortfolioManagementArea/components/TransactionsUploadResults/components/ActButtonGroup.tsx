"use client"

import {
  ActButton,
} from "@core"
import React from "react"
import usePortfolioManagerContext from "../../../../../context/PortfolioManagerContextData/hook"
import { useRouter } from "next/navigation"
import { ROUTES } from "src/routing"

const ActButtonGroup = () => {
  const { savePortfolioChanges } = usePortfolioManagerContext()
  const router = useRouter()

  const saveAndGoDashboard = () => {
    savePortfolioChanges()
    router.push(ROUTES.DASHBOARD)
  }

  return (
    <div className="flex gap-4">
      <ActButton onClick={saveAndGoDashboard} color="primary">
        Save changes and go to the dashboard
      </ActButton>
    </div>
  )
}

export default ActButtonGroup
