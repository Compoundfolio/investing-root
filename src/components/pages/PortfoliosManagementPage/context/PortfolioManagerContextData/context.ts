"use client"

import { Portfolio } from "@core"
import { Dispatch, SetStateAction, createContext } from "react"

export interface PortfolioManagerContextData {
  portfolioList: Portfolio[]
  isNoPortfolios: boolean
  selectedPortfolioCard: Portfolio | null
  setPortfolios: (portfolios: Portfolio[]) => void
  addPortfolio: (portfolio: Portfolio) => void
  savePortfolioChanges: () => void
  deleteSelectedPortfolio: () => void
  selectPortfolioById: (id: string | null) => void
  createNewPortfolioCard: (portfolio: Portfolio) => void
  updateSelectedPortfolio: Dispatch<SetStateAction<Portfolio | null>>
}

export const INITIAL_STATE: PortfolioManagerContextData = {
  portfolioList: [],
  selectedPortfolioCard: null,
  isNoPortfolios: true,
  setPortfolios: (portfolios: Portfolio[]) => {},
  addPortfolio: (portfolio: Portfolio) => {},
  savePortfolioChanges: () => {},
  deleteSelectedPortfolio: () => {},
  selectPortfolioById: (id: string) => {},
  createNewPortfolioCard: (portfolio: Portfolio) => {},
  updateSelectedPortfolio: (portfolio: Portfolio | null) => {},
}

const PortfolioManagerContext =
  createContext<PortfolioManagerContextData>(INITIAL_STATE)

export default PortfolioManagerContext
