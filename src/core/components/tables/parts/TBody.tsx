import styled from '@emotion/styled'
import React from 'react'
import { IReactChildren } from 'src/core/types'

const StyledTBody = styled.tbody
(({ height }: Pick<ITBody, "height">) => ({
  overflow: "auto",
  height: height ?? "100%",
}))

interface ITBody extends IReactChildren {
  /** After this value table scroll table body appears */
  height?: number
}

function TBody({
  children,
  height,
  ...rest
}: ITBody) {
  return (
    <StyledTBody
      height={height}
      {...rest}
    >
      {children}
    </StyledTBody>
  )
}

export default TBody