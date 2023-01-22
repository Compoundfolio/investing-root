import Ticker from "../common/Ticker"
import { 
  PortfolioAssetDividendData, 
  PortfolioSpecificAssetData,
} from "./subTypes"

type PortfolioAsset = {
  ticker: Ticker
  fullName: string
  iconSrc: string
  dividendData: PortfolioAssetDividendData
  portfolioSpecificData: PortfolioSpecificAssetData
}

export default PortfolioAsset