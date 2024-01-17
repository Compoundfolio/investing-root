import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"
import { ROUTES } from "src/routing"
import { TransactionUploadExperience } from "../types"
import {
  ManualTransactionManagementIcon,
  TestPortfolioIcon,
  UploadBrokerageReportIcon,
} from "../components"
import {
  BrokerageReportUploadStepper,
  ManualTransactionManagement,
} from "../experiences"

const useTransactionsUploadExperiences = () => {
  const [
    selectedTransactionsUploadExperienceName,
    setSelectedTransactionsUploadExperienceName,
  ] = useState<TransactionUploadExperience["name"]>()

  const router = useRouter()

  const transactionsUploadExperiences: TransactionUploadExperience[] = [
    {
      name: "brokerageUpload",
      title: "Upload brokerage reports",
      description: "TODO",
      handleExperienceSelection: () => {
        setSelectedTransactionsUploadExperienceName("brokerageUpload")
      },
      icon: <UploadBrokerageReportIcon />,
      ExperienceComponent: <BrokerageReportUploadStepper />,
    },
    {
      name: "manually",
      title: "Manage transactions manually",
      description: "TODO",
      handleExperienceSelection: () => {
        setSelectedTransactionsUploadExperienceName("manually")
      },
      icon: <ManualTransactionManagementIcon />,
      ExperienceComponent: <ManualTransactionManagement />,
    },
    {
      name: "testPortfolio",
      title: "Continue with “Test” portfolio",
      description: "TODO",
      icon: <TestPortfolioIcon />,
      handleExperienceSelection: () => {
        // TODO: implementation
        router.push(ROUTES.DASHBOARD.path)
      },
    },
    {
      name: "later",
      title: "Later",
      description: "Skip and add transactions later",
      handleExperienceSelection: () => {
        // TODO: implementation
        router.push(ROUTES.DASHBOARD.path)
      },
    },
  ]

  const ExperienceComponent = useMemo(() => {
    const Component =
      transactionsUploadExperiences.find(
        ({ name }) => name === selectedTransactionsUploadExperienceName
      )?.ExperienceComponent ?? null

    return Component
  }, [transactionsUploadExperiences, selectedTransactionsUploadExperienceName])

  return {
    transactionsUploadExperiences,
    selectedTransactionsUploadExperienceName,
    ExperienceComponent,
  }
}

export default useTransactionsUploadExperiences
