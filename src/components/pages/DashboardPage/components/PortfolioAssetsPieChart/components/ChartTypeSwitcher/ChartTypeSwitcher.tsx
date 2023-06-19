"use client"

import React, { memo } from 'react'
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import { colors } from '@core';

const ChartTypeSwitcher = () => {
  return (
    <div className="flex mb-4">
      <button style={{ background: "var(--color-darkGreen)", color: "var(--color-white)" }} className="z-10 flex items-center justify-center gap-1 px-4 py-2 text-base font-bold text-teal-700 transition duration-200 ease-in-out bg-teal-100 border border-teal-600 rounded rounded-r-none cursor-pointer hover:z-20 hover:scale-110 focus:outline-none hover:bg-teal-700 hover:text-teal-100">
        <div className="flex items-center gap-1">
          <DataSaverOffIcon style={{ color: colors.white }} />
          <span>Pie</span>
        </div>
      </button>
      <button style={{ color: "var(--color-white)" }} className="z-10 flex items-center justify-center gap-1 px-4 py-2 text-base font-bold text-teal-700 transition duration-200 ease-in-out bg-teal-100 border border-teal-600 rounded rounded-l-none cursor-pointer hover:z-20 hover:scale-110 focus:outline-none hover:bg-teal-700 hover:text-teal-100">
        <div className="flex items-center gap-1">
          <ViewQuiltIcon style={{ color: colors.white }} />
          <span>Map</span>
        </div>
      </button>
    </div>
  )
}

export default memo(ChartTypeSwitcher)