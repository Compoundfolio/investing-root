import { useEffect } from "react"
import { allSupportedBrokerages } from "src/components/pages/PortfoliosManagementPage/components/InitialTransactionsUploadExperience/experiences/BrokerageReportUploadStepper/components/stepContent/BrokerageSelectionArea/consts"
import { UseFormHookHelpers } from "src/core/types"

interface IUseAssignedBrokerage {
  setFieldValue: UseFormHookHelpers["setFieldValue"]
}

export const useAssignedBrokerage = ({
  setFieldValue,
}: IUseAssignedBrokerage) => {
  // TODO: Take it from context
  const selectedPortfolioBrokerages = allSupportedBrokerages

  useEffect(() => {
    if (selectedPortfolioBrokerages.length === 1) {
      setFieldValue("assignedBrokerage", selectedPortfolioBrokerages[0])
    }
  }, [selectedPortfolioBrokerages])

  return {
    selectedPortfolioBrokerages,
  }
}
