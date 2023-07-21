import React from 'react'
import { IReactChildren } from 'src/core/types'

const AddIcon = ({ className }: IReactChildren) => {
  return (
    <svg className={className} width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="add-circle" clipPath="url(#clip0_411_12226)">
        <g id="Vector" filter="url(#filter0_d_411_12226)">
          <path d="M27.9993 4.66675C15.1193 4.66675 4.66602 15.1201 4.66602 28.0001C4.66602 40.8801 15.1193 51.3334 27.9993 51.3334C40.8793 51.3334 51.3327 40.8801 51.3327 28.0001C51.3327 15.1201 40.8793 4.66675 27.9993 4.66675ZM39.666 30.3334H30.3327V39.6667H25.666V30.3334H16.3327V25.6667H25.666V16.3334H30.3327V25.6667H39.666V30.3334Z" fill="white" fillOpacity="0.1" shapeRendering="crispEdges" />
        </g>
      </g>
      <defs>
        <filter id="filter0_d_411_12226" x="0.666016" y="4.66675" width="54.666" height="54.6667" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_411_12226" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_411_12226" result="shape" />
        </filter>
        <clipPath id="clip0_411_12226">
          <rect width="56" height="56" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default AddIcon