import { IPortfoliosMenu } from "../PortfoliosMenu"
import { Portfolio } from '@core';

interface IUseCreatePortfolio {
  addPortfolio: IPortfoliosMenu['addPortfolio']
}

/** Handles the portfolio card creation logic */
const useCreatePortfolio = ({
  addPortfolio,
}: IUseCreatePortfolio) => {
  const emptyPortfolioTemplate: Portfolio = {
    id: `${Math.random()}`,
    title: 'New Portfolio',
  }

  const createNewPortfolioCard = () => {
    // TODO: Server request
    addPortfolio(emptyPortfolioTemplate)
  }

  return {
    createNewPortfolioCard,
  }
}

export default useCreatePortfolio
