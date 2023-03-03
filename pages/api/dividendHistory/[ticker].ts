import { EHDDividend } from 'ehd-js/src/types/model'
import type { NextApiRequest, NextApiResponse } from 'next'
import { MarketAPI } from 'src/api/market'

type Data = EHDDividend[]

export default async function handler(
  { method, body }: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (method === "GET") {
    const data = await MarketAPI.getDividendDataByTicker(body)
    res.status(200).json(data)
  }
}
