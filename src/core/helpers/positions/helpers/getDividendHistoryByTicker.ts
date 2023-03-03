import { EHDDividend } from "ehd-js/src/types/model";
import { Ticker } from "src/core/types";
import { Api } from "src/inversions";

const getDividendHistoryByTicker = async (ticker: Ticker): Promise<EHDDividend[]> => {
  // TODO: Uncomment when API will be purchased
  // const divHistory: EHDDividend[] = await Api.GET(`/api/dividendHistory${ticker}`)
  // return divHistory
  return []
}

export default getDividendHistoryByTicker