import React from 'react'
import { IReactChildren } from 'src/core/types'
import styled from '@emotion/styled';
import { colors } from 'src/core/theme';

interface ITWrapper extends IReactChildren {
  title: string
  size: number
}

const StyledSection = styled.section({
  color: colors.white,
})

const StyledTableName = styled.h2({
  fontSize: 20,
  color: colors.darkGray,
})

const StyledTableSize = styled.span({
  fontWeight: 300,
  fontSize: 16,
  color: colors.gray,
})

function TWrapper({ 
  children,
  title,
  size,
}: ITWrapper) {
  return (
    <StyledSection className="flex flex-col justify-between">
      <div className="flex flex-col">
        <StyledTableName>{title}</StyledTableName>
        {size > 0 && <StyledTableSize>[{size}]</StyledTableSize>}
      </div>
      {children}
    </StyledSection>
  )
}

export default TWrapper