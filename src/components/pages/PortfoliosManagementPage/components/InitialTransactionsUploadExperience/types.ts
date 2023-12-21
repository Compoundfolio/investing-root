import { ReactNode } from "react"

export type TransactionUploadExperience = {
  name: "brokerageUpload" | "manually" | "testPortfolio" | "later"
  title: string
  description: string
  handleExperienceSelection: () => void
  icon?: ReactNode
  ExperienceComponent?: ReactNode
}
