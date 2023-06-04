"use client"
import React from 'react'
import { useOpen } from 'src/core/hooks';

interface IDivChartHeader {
  currentlySelectedYearDivs: number
  currentlySelectedYearExpectedTotalDivs: number
  currentlySelectedYearDivGrowthPercentageComparedToPrevYear: number
  currentlySelectedYear: number
  onYearBack: () => void
  onYearForward: () => void
}

const DivChartHeader = ({
  currentlySelectedYearDivs,
  currentlySelectedYearExpectedTotalDivs,
  currentlySelectedYear,
  onYearBack,
  onYearForward,
}: IDivChartHeader) => {
  const [isFullScreenOpen, handleIsFullScreenOpen] = useOpen()

  return <>
    todo
  </>
}

export default DivChartHeader