import React, { memo } from "react"
import { HIGHEST_PRIORITY_Z_INDEX_VALUE } from "../../theme/otherCssRelatedConsts"

interface IAppLogo {
  width?: number
  withTitle?: boolean
}

const AppLogo = ({ width = 48, withTitle = false }: IAppLogo) => {
  return (
    // {/* TODO: Kill style */}
    <div
      style={{ zIndex: HIGHEST_PRIORITY_Z_INDEX_VALUE }}
      className="flex items-center gap-2.5"
    >
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1_3777)">
          <rect
            width="48"
            height="48"
            rx="8"
            fill="url(#paint0_angular_1_3777)"
          />
          <rect
            width="48"
            height="48"
            rx="8"
            fill="#000040"
            fill-opacity="0.3"
          />
          <g filter="url(#filter0_d_1_3777)">
            <rect
              x="25.2529"
              y="17"
              width="13.7471"
              height="13.7471"
              rx="6.87355"
              fill="white"
            />
          </g>
          <g filter="url(#filter1_d_1_3777)">
            <rect
              x="14.8733"
              y="20.4368"
              width="10.3103"
              height="10.3103"
              rx="5.15517"
              fill="white"
            />
          </g>
          <g filter="url(#filter2_d_1_3777)">
            <rect
              x="8"
              y="23.8737"
              width="6.87355"
              height="6.87355"
              rx="3.43678"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d_1_3777"
            x="-14.7471"
            y="-23"
            width="93.7471"
            height="93.7471"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="20" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_3777"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_3777"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_d_1_3777"
            x="-25.1267"
            y="-19.5632"
            width="90.3103"
            height="90.3103"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="20" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_3777"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_3777"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_d_1_3777"
            x="-32"
            y="-16.1263"
            width="86.8735"
            height="86.8736"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset />
            <feGaussianBlur stdDeviation="20" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.7 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_1_3777"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_1_3777"
              result="shape"
            />
          </filter>
          <radialGradient
            id="paint0_angular_1_3777"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(23.3667 24.36) rotate(46.8573) scale(27.054 47.4568)"
          >
            <stop offset="0.00697357" stop-color="#33394C" />
            <stop offset="0.747806" stop-color="#0F6F72" stop-opacity="0.69" />
          </radialGradient>
          <clipPath id="clip0_1_3777">
            <rect width="48" height="48" rx="8" fill="white" />
          </clipPath>
        </defs>
      </svg>

      {withTitle && (
        <svg
          width="162"
          height="23"
          viewBox="0 0 162 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.36 19.2C7.29333 19.2 6.3 19.0267 5.38 18.68C4.47333 18.32 3.68 17.82 3 17.18C2.33333 16.5267 1.81333 15.76 1.44 14.88C1.06667 14 0.88 13.04 0.88 12C0.88 10.96 1.06667 10 1.44 9.12C1.81333 8.24 2.34 7.48 3.02 6.84C3.7 6.18667 4.49333 5.68667 5.4 5.34C6.30667 4.98 7.3 4.8 8.38 4.8C9.52667 4.8 10.5733 5 11.52 5.4C12.4667 5.78667 13.2667 6.36667 13.92 7.14L12.24 8.72C11.7333 8.17333 11.1667 7.76667 10.54 7.5C9.91333 7.22 9.23333 7.08 8.5 7.08C7.76667 7.08 7.09333 7.2 6.48 7.44C5.88 7.68 5.35333 8.02 4.9 8.46C4.46 8.9 4.11333 9.42 3.86 10.02C3.62 10.62 3.5 11.28 3.5 12C3.5 12.72 3.62 13.38 3.86 13.98C4.11333 14.58 4.46 15.1 4.9 15.54C5.35333 15.98 5.88 16.32 6.48 16.56C7.09333 16.8 7.76667 16.92 8.5 16.92C9.23333 16.92 9.91333 16.7867 10.54 16.52C11.1667 16.24 11.7333 15.82 12.24 15.26L13.92 16.86C13.2667 17.62 12.4667 18.2 11.52 18.6C10.5733 19 9.52 19.2 8.36 19.2ZM20.5806 19.14C19.4873 19.14 18.514 18.9067 17.6606 18.44C16.8073 17.96 16.134 17.3067 15.6406 16.48C15.1473 15.6533 14.9006 14.7133 14.9006 13.66C14.9006 12.5933 15.1473 11.6533 15.6406 10.84C16.134 10.0133 16.8073 9.36667 17.6606 8.9C18.514 8.43333 19.4873 8.2 20.5806 8.2C21.6873 8.2 22.6673 8.43333 23.5206 8.9C24.3873 9.36667 25.0606 10.0067 25.5406 10.82C26.034 11.6333 26.2806 12.58 26.2806 13.66C26.2806 14.7133 26.034 15.6533 25.5406 16.48C25.0606 17.3067 24.3873 17.96 23.5206 18.44C22.6673 18.9067 21.6873 19.14 20.5806 19.14ZM20.5806 17C21.194 17 21.7406 16.8667 22.2206 16.6C22.7006 16.3333 23.074 15.9467 23.3406 15.44C23.6206 14.9333 23.7606 14.34 23.7606 13.66C23.7606 12.9667 23.6206 12.3733 23.3406 11.88C23.074 11.3733 22.7006 10.9867 22.2206 10.72C21.7406 10.4533 21.2006 10.32 20.6006 10.32C19.9873 10.32 19.4406 10.4533 18.9606 10.72C18.494 10.9867 18.1206 11.3733 17.8406 11.88C17.5606 12.3733 17.4206 12.9667 17.4206 13.66C17.4206 14.34 17.5606 14.9333 17.8406 15.44C18.1206 15.9467 18.494 16.3333 18.9606 16.6C19.4406 16.8667 19.9806 17 20.5806 17ZM42.1513 8.2C43.0046 8.2 43.7579 8.36667 44.4113 8.7C45.0779 9.03333 45.5979 9.54667 45.9713 10.24C46.3446 10.92 46.5313 11.8 46.5313 12.88V19H44.0313V13.2C44.0313 12.2533 43.8246 11.5467 43.4113 11.08C42.9979 10.6133 42.4046 10.38 41.6313 10.38C41.0846 10.38 40.5979 10.5 40.1713 10.74C39.7579 10.98 39.4313 11.3333 39.1913 11.8C38.9646 12.2667 38.8513 12.86 38.8513 13.58V19H36.3513V13.2C36.3513 12.2533 36.1446 11.5467 35.7313 11.08C35.3179 10.6133 34.7246 10.38 33.9513 10.38C33.4046 10.38 32.9179 10.5 32.4913 10.74C32.0779 10.98 31.7513 11.3333 31.5113 11.8C31.2846 12.2667 31.1713 12.86 31.1713 13.58V19H28.6713V8.32H31.0513V11.16L30.6313 10.32C30.9913 9.62667 31.5113 9.1 32.1913 8.74C32.8846 8.38 33.6713 8.2 34.5513 8.2C35.5513 8.2 36.4179 8.44667 37.1513 8.94C37.8979 9.43333 38.3913 10.18 38.6313 11.18L37.6513 10.84C37.9979 10.04 38.5713 9.4 39.3713 8.92C40.1713 8.44 41.0979 8.2 42.1513 8.2ZM55.6459 19.14C54.7793 19.14 53.9859 18.94 53.2659 18.54C52.5593 18.14 51.9926 17.54 51.5659 16.74C51.1526 15.9267 50.9459 14.9 50.9459 13.66C50.9459 12.4067 51.1459 11.38 51.5459 10.58C51.9593 9.78 52.5193 9.18667 53.2259 8.8C53.9326 8.4 54.7393 8.2 55.6459 8.2C56.6993 8.2 57.6259 8.42667 58.4259 8.88C59.2393 9.33333 59.8793 9.96667 60.3459 10.78C60.8259 11.5933 61.0659 12.5533 61.0659 13.66C61.0659 14.7667 60.8259 15.7333 60.3459 16.56C59.8793 17.3733 59.2393 18.0067 58.4259 18.46C57.6259 18.9133 56.6993 19.14 55.6459 19.14ZM49.7259 22.88V8.32H52.1059V10.84L52.0259 13.68L52.2259 16.52V22.88H49.7259ZM55.3659 17C55.9659 17 56.4993 16.8667 56.9659 16.6C57.4459 16.3333 57.8259 15.9467 58.1059 15.44C58.3859 14.9333 58.5259 14.34 58.5259 13.66C58.5259 12.9667 58.3859 12.3733 58.1059 11.88C57.8259 11.3733 57.4459 10.9867 56.9659 10.72C56.4993 10.4533 55.9659 10.32 55.3659 10.32C54.7659 10.32 54.2259 10.4533 53.7459 10.72C53.2659 10.9867 52.8859 11.3733 52.6059 11.88C52.3259 12.3733 52.1859 12.9667 52.1859 13.66C52.1859 14.34 52.3259 14.9333 52.6059 15.44C52.8859 15.9467 53.2659 16.3333 53.7459 16.6C54.2259 16.8667 54.7659 17 55.3659 17ZM69.8802 19V16.84L69.7402 16.38V12.6C69.7402 11.8667 69.5202 11.3 69.0802 10.9C68.6402 10.4867 67.9735 10.28 67.0802 10.28C66.4802 10.28 65.8868 10.3733 65.3002 10.56C64.7268 10.7467 64.2402 11.0067 63.8402 11.34L62.8602 9.52C63.4335 9.08 64.1135 8.75333 64.9002 8.54C65.7002 8.31333 66.5268 8.2 67.3802 8.2C68.9268 8.2 70.1202 8.57333 70.9602 9.32C71.8135 10.0533 72.2402 11.1933 72.2402 12.74V19H69.8802ZM66.5202 19.14C65.7202 19.14 65.0202 19.0067 64.4202 18.74C63.8202 18.46 63.3535 18.08 63.0202 17.6C62.7002 17.1067 62.5402 16.5533 62.5402 15.94C62.5402 15.34 62.6802 14.8 62.9602 14.32C63.2535 13.84 63.7268 13.46 64.3802 13.18C65.0335 12.9 65.9002 12.76 66.9802 12.76H70.0802V14.42H67.1602C66.3068 14.42 65.7335 14.56 65.4402 14.84C65.1468 15.1067 65.0002 15.44 65.0002 15.84C65.0002 16.2933 65.1802 16.6533 65.5402 16.92C65.9002 17.1867 66.4002 17.32 67.0402 17.32C67.6535 17.32 68.2002 17.18 68.6802 16.9C69.1735 16.62 69.5268 16.2067 69.7402 15.66L70.1602 17.16C69.9202 17.7867 69.4868 18.2733 68.8602 18.62C68.2468 18.9667 67.4668 19.14 66.5202 19.14ZM79.9686 19.14C79.0619 19.14 78.2619 18.9733 77.5686 18.64C76.8753 18.2933 76.3353 17.7733 75.9486 17.08C75.5619 16.3733 75.3686 15.4867 75.3686 14.42V8.32H77.8686V14.08C77.8686 15.04 78.0819 15.76 78.5086 16.24C78.9486 16.7067 79.5686 16.94 80.3686 16.94C80.9553 16.94 81.4619 16.82 81.8886 16.58C82.3286 16.34 82.6686 15.98 82.9086 15.5C83.1619 15.02 83.2886 14.4267 83.2886 13.72V8.32H85.7886V19H83.4086V16.12L83.8286 17C83.4686 17.6933 82.9419 18.2267 82.2486 18.6C81.5553 18.96 80.7953 19.14 79.9686 19.14ZM95.1219 8.2C95.9752 8.2 96.7352 8.36667 97.4019 8.7C98.0819 9.03333 98.6152 9.54667 99.0019 10.24C99.3885 10.92 99.5819 11.8 99.5819 12.88V19H97.0819V13.2C97.0819 12.2533 96.8552 11.5467 96.4019 11.08C95.9619 10.6133 95.3419 10.38 94.5419 10.38C93.9552 10.38 93.4352 10.5 92.9819 10.74C92.5285 10.98 92.1752 11.34 91.9219 11.82C91.6819 12.2867 91.5619 12.88 91.5619 13.6V19H89.0619V8.32H91.4419V11.2L91.0219 10.32C91.3952 9.64 91.9352 9.12 92.6419 8.76C93.3619 8.38667 94.1885 8.2 95.1219 8.2ZM107.293 19.14C106.266 19.14 105.339 18.9133 104.513 18.46C103.699 17.9933 103.059 17.3533 102.593 16.54C102.126 15.7267 101.893 14.7667 101.893 13.66C101.893 12.5533 102.126 11.5933 102.593 10.78C103.059 9.96667 103.699 9.33333 104.513 8.88C105.339 8.42667 106.266 8.2 107.293 8.2C108.186 8.2 108.986 8.4 109.693 8.8C110.399 9.18667 110.959 9.78 111.373 10.58C111.786 11.38 111.993 12.4067 111.993 13.66C111.993 14.9 111.793 15.9267 111.393 16.74C110.993 17.54 110.439 18.14 109.733 18.54C109.026 18.94 108.213 19.14 107.293 19.14ZM107.593 17C108.193 17 108.726 16.8667 109.193 16.6C109.673 16.3333 110.053 15.9467 110.333 15.44C110.626 14.9333 110.773 14.34 110.773 13.66C110.773 12.9667 110.626 12.3733 110.333 11.88C110.053 11.3733 109.673 10.9867 109.193 10.72C108.726 10.4533 108.193 10.32 107.593 10.32C106.993 10.32 106.453 10.4533 105.973 10.72C105.506 10.9867 105.126 11.3733 104.833 11.88C104.553 12.3733 104.413 12.9667 104.413 13.66C104.413 14.34 104.553 14.9333 104.833 15.44C105.126 15.9467 105.506 16.3333 105.973 16.6C106.453 16.8667 106.993 17 107.593 17ZM110.833 19V16.48L110.933 13.64L110.733 10.8V4.16H113.213V19H110.833ZM116.843 19V7.72C116.843 6.6 117.17 5.70667 117.823 5.04C118.49 4.36 119.437 4.02 120.663 4.02C121.103 4.02 121.517 4.06667 121.903 4.16C122.303 4.25333 122.637 4.4 122.903 4.6L122.223 6.48C122.037 6.33333 121.823 6.22667 121.583 6.16C121.343 6.08 121.097 6.04 120.843 6.04C120.323 6.04 119.93 6.18667 119.663 6.48C119.397 6.76 119.263 7.18667 119.263 7.76V8.96L119.343 10.08V19H116.843ZM115.083 10.4V8.4H122.203V10.4H115.083ZM128.53 19.14C127.437 19.14 126.463 18.9067 125.61 18.44C124.757 17.96 124.083 17.3067 123.59 16.48C123.097 15.6533 122.85 14.7133 122.85 13.66C122.85 12.5933 123.097 11.6533 123.59 10.84C124.083 10.0133 124.757 9.36667 125.61 8.9C126.463 8.43333 127.437 8.2 128.53 8.2C129.637 8.2 130.617 8.43333 131.47 8.9C132.337 9.36667 133.01 10.0067 133.49 10.82C133.983 11.6333 134.23 12.58 134.23 13.66C134.23 14.7133 133.983 15.6533 133.49 16.48C133.01 17.3067 132.337 17.96 131.47 18.44C130.617 18.9067 129.637 19.14 128.53 19.14ZM128.53 17C129.143 17 129.69 16.8667 130.17 16.6C130.65 16.3333 131.023 15.9467 131.29 15.44C131.57 14.9333 131.71 14.34 131.71 13.66C131.71 12.9667 131.57 12.3733 131.29 11.88C131.023 11.3733 130.65 10.9867 130.17 10.72C129.69 10.4533 129.15 10.32 128.55 10.32C127.937 10.32 127.39 10.4533 126.91 10.72C126.443 10.9867 126.07 11.3733 125.79 11.88C125.51 12.3733 125.37 12.9667 125.37 13.66C125.37 14.34 125.51 14.9333 125.79 15.44C126.07 15.9467 126.443 16.3333 126.91 16.6C127.39 16.8667 127.93 17 128.53 17ZM136.62 19V4.16H139.12V19H136.62ZM142.402 19V8.32H144.902V19H142.402ZM143.662 6.56C143.195 6.56 142.808 6.41333 142.502 6.12C142.208 5.82667 142.062 5.47333 142.062 5.06C142.062 4.63333 142.208 4.28 142.502 4C142.808 3.70667 143.195 3.56 143.662 3.56C144.128 3.56 144.508 3.7 144.802 3.98C145.108 4.24667 145.262 4.58667 145.262 5C145.262 5.44 145.115 5.81333 144.822 6.12C144.528 6.41333 144.142 6.56 143.662 6.56ZM152.983 19.14C151.89 19.14 150.916 18.9067 150.063 18.44C149.21 17.96 148.536 17.3067 148.043 16.48C147.55 15.6533 147.303 14.7133 147.303 13.66C147.303 12.5933 147.55 11.6533 148.043 10.84C148.536 10.0133 149.21 9.36667 150.063 8.9C150.916 8.43333 151.89 8.2 152.983 8.2C154.09 8.2 155.07 8.43333 155.923 8.9C156.79 9.36667 157.463 10.0067 157.943 10.82C158.436 11.6333 158.683 12.58 158.683 13.66C158.683 14.7133 158.436 15.6533 157.943 16.48C157.463 17.3067 156.79 17.96 155.923 18.44C155.07 18.9067 154.09 19.14 152.983 19.14ZM152.983 17C153.596 17 154.143 16.8667 154.623 16.6C155.103 16.3333 155.476 15.9467 155.743 15.44C156.023 14.9333 156.163 14.34 156.163 13.66C156.163 12.9667 156.023 12.3733 155.743 11.88C155.476 11.3733 155.103 10.9867 154.623 10.72C154.143 10.4533 153.603 10.32 153.003 10.32C152.39 10.32 151.843 10.4533 151.363 10.72C150.896 10.9867 150.523 11.3733 150.243 11.88C149.963 12.3733 149.823 12.9667 149.823 13.66C149.823 14.34 149.963 14.9333 150.243 15.44C150.523 15.9467 150.896 16.3333 151.363 16.6C151.843 16.8667 152.383 17 152.983 17Z"
            fill="white"
          />
        </svg>
      )}
    </div>
  )
}

export default memo(AppLogo)
