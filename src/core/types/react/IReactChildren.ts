import { ReactElement } from "react"

interface IReactChildren {
  children: ReactElement | string | ReactElement[] | number
  className?: string
}

export default IReactChildren