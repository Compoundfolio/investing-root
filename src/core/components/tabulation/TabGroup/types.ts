import { ReactElement } from "react"

export type Tab = {
  title: string
  entityAmount?: number
  asFilter?: boolean
  onClick: (tabTitle?: string) => void
  children?: ReactElement
}