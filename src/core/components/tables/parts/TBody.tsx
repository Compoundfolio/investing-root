import React from 'react'

const style = {
  display: "block",
  overflow: "auto",
  height: "200px",
  width: "100%",
} as const

function TBody({ children }) {
  return (
    <tbody style={style}>{children}</tbody>
  )
}

export default TBody