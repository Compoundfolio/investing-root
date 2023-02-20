import { getPayStatusColor } from '@core/helpers'
import React, { memo, useMemo } from 'react'
import styled from '@emotion/styled';

const StyledSvg = styled.svg({
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
})

interface IPayCircleStatus {
  payDate: Date
  payStatusColor?: ReturnType<typeof getPayStatusColor>
}

const PayCircleStatus = ({
  payDate,
  payStatusColor
}: IPayCircleStatus) => {
  const statusColor = useMemo(() => payStatusColor ?? getPayStatusColor(payDate), [payStatusColor, payDate])

  return (
    <StyledSvg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="5" cy="5" r="5" fill="url(#paint0_radial_543_29700)" />
      <defs>
        <radialGradient id="paint0_radial_543_29700" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5 5) rotate(90) scale(5)">
          <stop offset="0.364583" stop-color={statusColor.color} />
          <stop offset="1" stop-color={statusColor.color} stop-opacity="0.53" />
        </radialGradient>
      </defs>
    </StyledSvg>
  )
}

export default memo(PayCircleStatus)