import { ID } from "../ids"
import { ReactNode } from "react"

type Option<TData = unknown> = {
  id: ID
  value: string
  label: string
  icon?: ReactNode
  data?: TData
}

export default Option
