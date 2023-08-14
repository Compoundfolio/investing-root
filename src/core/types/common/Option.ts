import { ID } from "../ids"
import { ReactNode } from "react"

type Option = {
  id: ID
  value: string
  label: string
  icon?: ReactNode
}

export default Option
