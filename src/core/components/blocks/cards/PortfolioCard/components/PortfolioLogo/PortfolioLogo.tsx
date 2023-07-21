import React from 'react'

interface IPortfolioLogo {
  doesPortfolioSetupFinished: boolean
}

const PortfolioLogo = ({
  doesPortfolioSetupFinished = false,
}: IPortfolioLogo) => {

  const gradientMainColor = '#33394C'
  const gradientSecondaryColor = 'rgba(15, 111, 114, 0.69)'

  const logoUniqueColorStyle = {
    fill: doesPortfolioSetupFinished
      ? `linear-gradient(0deg, rgba(0, 0, 64, 0.30) 0%, rgba(0, 0, 64, 0.30) 100%), conic-gradient(from 137deg at 48.68% 50.75%, ${gradientMainColor} 2.51048494130373deg, ${gradientSecondaryColor} 269.2102289199829deg)`
      : '#4C596B',
    filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`,
  }

  return (
    <svg style={logoUniqueColorStyle} xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
      <g filter="url(#filter0_d_411_12165)">
        <g clip-path="url(#clip0_411_12165)">
          <rect x="4" width="48" height="48" rx="24" fill="url(#paint0_angular_411_12165)" shape-rendering="crispEdges" />
          <rect x="4" width="48" height="48" rx="24" fill="#000040" fill-opacity="0.3" shape-rendering="crispEdges" />
          <g filter="url(#filter1_d_411_12165)">
            <rect x="29.2539" y="17" width="13.7471" height="13.7471" rx="6.87355" fill="white" />
          </g>
          <g filter="url(#filter2_d_411_12165)">
            <rect x="18.873" y="20.4368" width="10.3103" height="10.3103" rx="5.15517" fill="white" />
          </g>
          <g filter="url(#filter3_d_411_12165)">
            <rect x="12" y="23.8738" width="6.87355" height="6.87355" rx="3.43678" fill="white" />
          </g>
        </g>
      </g>
      <defs>
        <filter id="filter0_d_411_12165" x="0" y="0" width="56" height="56" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_411_12165" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_411_12165" result="shape" />
        </filter>
        <filter id="filter1_d_411_12165" x="-10.7461" y="-23" width="93.748" height="93.7471" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_411_12165" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_411_12165" result="shape" />
        </filter>
        <filter id="filter2_d_411_12165" x="-21.127" y="-19.5632" width="90.3105" height="90.3103" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_411_12165" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_411_12165" result="shape" />
        </filter>
        <filter id="filter3_d_411_12165" x="-28" y="-16.1262" width="86.873" height="86.8735" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset />
          <feGaussianBlur stdDeviation="20" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_411_12165" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_411_12165" result="shape" />
        </filter>
        <radialGradient id="paint0_angular_411_12165" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(27.3667 24.36) rotate(46.8573) scale(27.054 47.4568)">
          <stop offset="0.00697357" stop-color="#33394C" />
          <stop offset="0.747806" stop-color="#0F6F72" stop-opacity="0.69" />
        </radialGradient>
        <clipPath id="clip0_411_12165">
          <rect x="4" width="48" height="48" rx="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default PortfolioLogo