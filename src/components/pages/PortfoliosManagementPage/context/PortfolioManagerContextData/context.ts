import { Portfolio } from "@core"
import { createContext } from "react"

export interface PortfolioManagerContextData {
  portfolioList: Portfolio[];
  isNoPortfolios: boolean;
  selectedPortfolioCard: Portfolio | undefined;
  addPortfolio: (portfolio: Portfolio) => void;
  savePortfolioChanges: () => void;
  deletePortfolio: (portfolio: Portfolio) => void;
  selectPortfolioById: (id: string) => void;
  createNewPortfolioCard: () => void;
}

export const INITIAL_STATE: PortfolioManagerContextData = {
  portfolioList: [],
  selectedPortfolioCard: undefined,
  isNoPortfolios: true,
  addPortfolio: (portfolio: Portfolio) => {},
  savePortfolioChanges: () => {},
  deletePortfolio: (portfolio: Portfolio) => {},
  selectPortfolioById: (id: string) => {},
  createNewPortfolioCard: () => {},
}

const PortfolioManagerContext = createContext<PortfolioManagerContextData>(INITIAL_STATE)

export default PortfolioManagerContext