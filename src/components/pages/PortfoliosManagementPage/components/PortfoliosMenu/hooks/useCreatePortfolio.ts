import { IPortfoliosMenu } from "../PortfoliosMenu"
import { Portfolio } from '@core';
import { causeGentleUiTransition } from "./helpers";

interface IUseCreatePortfolio {
  addPortfolio: IPortfoliosMenu['addPortfolio']
  isNoPortfolios: boolean
}

/** Handles the portfolio card creation logic */
const useCreatePortfolio = ({
  addPortfolio,
  isNoPortfolios,
}: IUseCreatePortfolio) => {

  const emptyPortfolioTemplate: Portfolio = {
    id: `${Math.random()}`,
    title: 'New Portfolio',
  }

  const createNewPortfolioCard = () => {
    // TODO: Server request

    isNoPortfolios
      ? causeGentleUiTransition(() => addPortfolio(emptyPortfolioTemplate))
      : addPortfolio(emptyPortfolioTemplate)
  }

  return {
    createNewPortfolioCard,
  }
}

export default useCreatePortfolio
