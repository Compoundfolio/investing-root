import { useMemo } from "react"
import { useBrokeragesData } from "src/store"
import { getDivChartDataSet } from "../helpers"
import { DivChartDataSet } from "../types"

const HARD_CODED_DATA: DivChartDataSet = {
  2023: [
    {
      month: "Jan",
      receivedDividendAmount: 10.4,
      announcedDividendAmount: 9.4,
      estimatedNotReceivedDividendAmount: 10,
    },
    {
      month: "Feb",
      receivedDividendAmount: 100.4,
      announcedDividendAmount: 9.4,
      estimatedNotReceivedDividendAmount: 10,
    },
    {
      month: "Mar",
      receivedDividendAmount: 25.99,
      announcedDividendAmount: 25.99,
      estimatedNotReceivedDividendAmount: 0,
    },
    {
      month: "Apr",
      receivedDividendAmount: 87,
      announcedDividendAmount: 87,
      estimatedNotReceivedDividendAmount: 0,
    },
    {
      month: "May",
      receivedDividendAmount: 35.6,
      announcedDividendAmount: 35.6,
      estimatedNotReceivedDividendAmount: 0,
    },
    {
      month: "Jun",
      receivedDividendAmount: 44,
      announcedDividendAmount: 44,
      estimatedNotReceivedDividendAmount: 0,
    },
    {
      month: "Jul",
      receivedDividendAmount: 11,
      announcedDividendAmount: 1,
      estimatedNotReceivedDividendAmount: 0,
    },
    {
      month: "Aug",
      receivedDividendAmount: 9.4,
      announcedDividendAmount: 9.4,
      estimatedNotReceivedDividendAmount: 0,
    },
    {
      month: "Sep",
      receivedDividendAmount: 1,
      announcedDividendAmount: 9.4,
      estimatedNotReceivedDividendAmount: 10,
    },
    {
      month: "Oct",
      receivedDividendAmount: 0,
      announcedDividendAmount: 9.4,
      estimatedNotReceivedDividendAmount: 10,
    },
    {
      month: "Nov",
      receivedDividendAmount: 0,
      announcedDividendAmount: 9.4,
      estimatedNotReceivedDividendAmount: 10,
    },
    {
      month: "Dec",
      receivedDividendAmount: 0,
      announcedDividendAmount: 18.43,
      estimatedNotReceivedDividendAmount: 100.99,
    },
  ],
  2024: [
    {
      month: "Jan",
      receivedDividendAmount: 10.4,
      announcedDividendAmount: 9.4,
      estimatedNotReceivedDividendAmount: 10,
    },
    {
      month: "Feb",
      receivedDividendAmount: 100.4,
      announcedDividendAmount: 9.4,
      estimatedNotReceivedDividendAmount: 10,
    },
    {
      month: "Mar",
      receivedDividendAmount: 25.99,
      announcedDividendAmount: 25.99,
      estimatedNotReceivedDividendAmount: 0,
    },
    {
      month: "Apr",
      receivedDividendAmount: 87,
      announcedDividendAmount: 87,
      estimatedNotReceivedDividendAmount: 0,
    },
    {
      month: "May",
      receivedDividendAmount: 35.6,
      announcedDividendAmount: 35.6,
      estimatedNotReceivedDividendAmount: 0,
    },
    {
      month: "Jun",
      receivedDividendAmount: 44,
      announcedDividendAmount: 44,
      estimatedNotReceivedDividendAmount: 0,
    },
    {
      month: "Jul",
      receivedDividendAmount: 11,
      announcedDividendAmount: 1,
      estimatedNotReceivedDividendAmount: 0,
    },
    {
      month: "Aug",
      receivedDividendAmount: 9.4,
      announcedDividendAmount: 9.4,
      estimatedNotReceivedDividendAmount: 0,
    },
    {
      month: "Sep",
      receivedDividendAmount: 1,
      announcedDividendAmount: 9.4,
      estimatedNotReceivedDividendAmount: 10,
    },
    {
      month: "Oct",
      receivedDividendAmount: 0,
      announcedDividendAmount: 9.4,
      estimatedNotReceivedDividendAmount: 10,
    },
    {
      month: "Nov",
      receivedDividendAmount: 0,
      announcedDividendAmount: 9.4,
      estimatedNotReceivedDividendAmount: 10,
    },
    {
      month: "Dec",
      receivedDividendAmount: 0,
      announcedDividendAmount: 18.43,
      estimatedNotReceivedDividendAmount: 100.99,
    },
  ],
}

const useDivChartData = () => {
  const { brokerageEntities } = useBrokeragesData()

  // const dataSet = useMemo(() => {
  //   const assets = brokerageEntities[0]?.getAssets()
  //   const positionsListing = Object.values({
  //     ...assets?.openPositions,
  //     ...assets?.closedPositions,
  //   })
  //   return getDivChartDataSet(positionsListing)
  // }, [brokerageEntities])

  return {
    dataSet: HARD_CODED_DATA,
  }
}

export default useDivChartData
