import styled from '@emotion/styled'
import React from 'react'

const StyledTr = styled.tr({
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(75px)",
  }
})


function TRow({ children }) {
  return (
    <StyledTr className="h-14">{children}</StyledTr>
  )
}

export default TRow