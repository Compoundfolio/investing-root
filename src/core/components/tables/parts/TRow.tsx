import styled from '@emotion/styled'
import React from 'react'
import IReactChildren from '../../../types/react/IReactChildren';

const StyledTr = styled.tr({
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(75px)",
  }
})

interface ITRow extends IReactChildren {
  onHover?: () => void
}

function TRow({ children, onHover }: ITRow) {
  return (
    <StyledTr onMouseEnter={onHover} className="h-14">{children}</StyledTr>
  )
}

export default TRow