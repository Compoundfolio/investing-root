"use client"

import { Portfolio } from "@core"
import { createContext } from "react"

export interface PortfolioManagerContextData {
  portfolioList: Portfolio[];
  isNoPortfolios: boolean;
  selectedPortfolioCard: Portfolio | null;
  addPortfolio: (portfolio: Portfolio) => void;
  savePortfolioChanges: () => void;
  deletePortfolio: () => void;
  selectPortfolioById: (id: string | null) => void;
  createNewPortfolioCard: () => void;
}

export const INITIAL_STATE: PortfolioManagerContextData = {
  portfolioList: [],
  selectedPortfolioCard: null,
  isNoPortfolios: true,
  addPortfolio: (portfolio: Portfolio) => {},
  savePortfolioChanges: () => {},
  deletePortfolio: () => {},
  selectPortfolioById: (id: string) => {},
  createNewPortfolioCard: () => {},
}

const PortfolioManagerContext = createContext<PortfolioManagerContextData>(INITIAL_STATE)

export default PortfolioManagerContext