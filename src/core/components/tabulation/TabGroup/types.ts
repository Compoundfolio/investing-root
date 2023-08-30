import { ReactElement } from "react"

export type Tab = {
  title: string
  entityAmount?: number
  onClick: (tabTitle?: string) => void
  children?: ReactElement
}