import { ReactElement } from "react"

interface IReactChildren {
  children?: ReactElement | string | ReactElement[] | number
  className?: string
  title?: string
}

export default IReactChildren