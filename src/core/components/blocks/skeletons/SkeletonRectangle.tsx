import React from 'react'
import { ISkeleton } from './types'
import clsx from 'clsx';

const SkeletonRectangle = ({ width = "100%", height = "100%", className = "" }: ISkeleton) => {
  return (
    <div style={{ width, height }} className={clsx(className, "skeletonPrimitive")}></div>
  )
}

export default SkeletonRectangle