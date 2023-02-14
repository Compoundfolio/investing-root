import React from 'react'
import styled from '@emotion/styled'
import { colors } from 'src/core/theme'

const StyledTHead = styled.thead({
  fontWeight: 600,
  fontSize: 12,
  color: colors.gray4C,
  textTransform: "uppercase",
  textAlign: "left"
})

function THead({ children }) {
  return (
    <StyledTHead>{children}</StyledTHead>
  )
}

export default THead