import React, { memo } from 'react'
import { INumberMini } from './types'
import { Container, MiniNumber, SubTitle, Title } from './styled'

const NumberMini = ({
  title,
  numbers,
  sub,
}: INumberMini) => {
  return (
    <Container>
      <Title>{title}</Title>
      <MiniNumber>{numbers}</MiniNumber>
      {sub && <SubTitle>{sub}</SubTitle>}
    </Container>
  )
}

export default memo(NumberMini)