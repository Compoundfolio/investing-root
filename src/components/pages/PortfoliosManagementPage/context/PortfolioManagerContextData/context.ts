"use client"

import { Portfolio } from "@core"
import { Dispatch, SetStateAction, createContext } from "react"

export interface PortfolioManagerContextData {
  portfolioList: Portfolio[];
  isNoPortfolios: boolean;
  selectedPortfolioCard: Portfolio | null;
  addPortfolio: (portfolio: Portfolio) => void;
  savePortfolioChanges: () => void;
  deleteSelectedPortfolio: () => void;
  selectPortfolioById: (id: string | null) => void;
  createNewPortfolioCard: () => void;
  updateSelectedPortfolio: Dispatch<SetStateAction<Portfolio | null>>
}

export const INITIAL_STATE: PortfolioManagerContextData = {
  portfolioList: [],
  selectedPortfolioCard: null,
  isNoPortfolios: true,
  addPortfolio: (portfolio: Portfolio) => {},
  savePortfolioChanges: () => {},
  deleteSelectedPortfolio: () => {},
  selectPortfolioById: (id: string) => {},
  createNewPortfolioCard: () => {},
  updateSelectedPortfolio: (portfolio: Portfolio | null) => {}
}

const PortfolioManagerContext = createContext<PortfolioManagerContextData>(INITIAL_STATE)

export default PortfolioManagerContext