import styled from '@emotion/styled';
import React from 'react'

const StyledTable = styled.table({
  // tableLayout: "fixed",
  // borderCollapse: "collapse",
})

function TTable({ children }) {
  return (
    <StyledTable>{children}</StyledTable>
  )
}

export default TTable