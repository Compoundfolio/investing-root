// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { MarketAPI } from 'src/api/market'
import { TickerAndPrice } from 'src/api/market/types'



type Data = TickerAndPrice

export default async function handler(
  { method, body }: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (method === "POST") {
    const data = await MarketAPI.getSharePriceForTickerList(body)
    res.status(200).json(data)
  }
}
