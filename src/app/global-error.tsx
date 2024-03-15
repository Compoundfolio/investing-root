"use client"

import { NotificationPageContainer } from "@core"

const brokenChartSvgStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}

export default function GlobalError() {
  return (
    <NotificationPageContainer
      miniMessage="Sorry"
      message="Something went wrong"
      messageType="Error"
      detailedMessage="We will fix the issue as soon as possible!"
      centerVolumeComponent={<BrokenPieChartSvg style={brokenChartSvgStyle} />}
    />
  )
}

const BrokenPieChartSvg = ({ style }) => {
  return (
    <svg
      style={style}
      width="356"
      height="356"
      viewBox="0 0 356 356"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.25">
        <g
          fillOpacity="url(#clip0_1176_5858)"
          filter="url(#filter0_i_1176_5858)"
        >
          <path
            d="M338.069 99.6834C336.069 93.6857 329.967 90.1372 323.736 91.2161C318.58 92.1059 313.34 92.584 308.059 92.6321C259.569 93.0744 218.963 57.6092 211.554 11.1005C210.565 4.88738 205.189 0.328094 198.905 0.385403L142.319 0.901433C134.779 0.970188 128.994 7.55888 129.815 15.0556C132.222 37.0621 138.73 58.6278 148.959 78.2588C161.908 103.11 180.809 124.84 203.631 141.102C226.453 157.364 253.161 168.148 280.876 172.279C302.701 175.532 325.134 174.655 346.661 169.788C354.015 168.125 358.357 160.518 355.969 153.359L348.595 131.254L338.069 99.6834Z"
            fill="#3CC8C8"
          />
          <path
            d="M219.532 275.584C232.157 270.355 243.465 262.799 253.129 253.137C262.793 243.469 270.349 232.167 275.579 219.543C279.498 210.083 281.97 200.228 282.964 190.138C283.39 185.783 279.997 182 275.621 182H242.778C239.114 182 236.028 184.69 235.482 188.307C231.829 212.581 212.584 231.828 188.307 235.486C184.685 236.033 182 239.124 182 242.782L182.005 265.219V275.626C182.005 280.002 185.794 283.395 190.144 282.963C200.235 281.969 210.081 279.497 219.532 275.584Z"
            fill="#0F6F72"
          />
          <path
            d="M76.4732 215.3L22.664 232.8C15.4918 235.131 11.9685 243.137 14.9898 250.049C27.6576 279.042 148.903 170.691 174.804 189.5C200.686 208.3 129.305 352.862 160.773 355.937C168.277 356.672 174.804 350.845 174.804 343.305V286.708C174.804 280.423 170.205 275.08 163.983 274.156C132.757 269.512 105.825 249.95 91.7589 221.71C88.9528 216.08 82.453 213.354 76.4732 215.3Z"
            fill="#FFD391"
          />
          <path
            d="M88.6841 117.561L42.9435 84.282C36.8472 79.8443 28.2764 81.6911 24.4751 88.1998C13.2955 107.314 5.67508 128.507 2.19657 150.365C-1.28193 172.231 -0.60954 194.743 4.08824 216.376C5.68404 223.745 13.2597 228.156 20.4318 225.834L74.2501 208.388C80.2657 206.442 83.8608 200.373 82.8387 194.133C81.9871 188.951 81.5657 183.688 81.5657 178.39C81.5657 162.638 85.3042 147.433 92.4584 133.716C95.3721 128.14 93.7763 121.273 88.6841 117.561Z"
            fill="#D9D9D9"
          />
          <path
            d="M106.812 14.9539C83.2061 25.2459 62.3172 40.4151 45.2115 59.6545C40.2179 65.2757 41.1144 73.9719 47.1928 78.4007L92.9782 111.751C98.0794 115.472 105.099 114.826 109.546 110.344C116.987 102.84 125.639 96.5553 135.043 91.8217C140.682 88.9797 143.461 82.5158 141.516 76.5091L124.016 22.655C121.694 15.4918 113.706 11.9505 106.812 14.9539Z"
            fill="#18FEFE"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_i_1176_5858"
          x="0"
          y="0"
          width="356"
          height="360"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_1176_5858"
          />
        </filter>
        <clipPath id="clip0_1176_5858">
          <rect width="356" height="356" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
