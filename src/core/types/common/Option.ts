import { ID } from "../ids"

type Option<TData = unknown> = {
  id: ID
  value: string
  label: string
  icon?: (size?: number, withShadow?: boolean) => JSX.Element
  data?: TData
}

export default Option
