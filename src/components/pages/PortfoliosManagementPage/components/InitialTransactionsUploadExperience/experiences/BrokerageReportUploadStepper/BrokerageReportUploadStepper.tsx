import { ActButton, ExperienceTitle, Option } from "@core"
import { useRouter } from "next/navigation"
import React, { ReactNode, useCallback, useState } from "react"
import { ROUTES } from "src/routing"
import {
  BreadcrumbsStepperNavigation,
  BrokerageSelectionArea,
  LinearStepperProgressBar,
  ReportsUploadArea,
} from "./components"

export type StepCodeName = "brokeragesSelection" | "reportsUpload" | "results"

type StepDetails = {
  title: string
  subTitle: string
  Component: ReactNode
  progressPercentage: number
  breadcrumbTitle: string
  codeName: StepCodeName
  isActive: boolean
  isBlockedToBeFilled: boolean
  blockedReasoning?: string
}

export type Steps = {
  [K in StepCodeName]: StepDetails
}

const BrokerageReportUploadStepper = () => {
  const [currentStepCodeName, setCurrentStepCodeName] = useState<StepCodeName>(
    "brokeragesSelection"
  )
  const [isContinueButtonDisabled, setIsContinueButtonDisabled] =
    useState<boolean>(true)

  const [selectedBrokerages, setSelectedBrokerages] = useState<Option[]>([])

  const router = useRouter()

  const handleContinue = () => {
    if (currentStepCodeName === "brokeragesSelection") {
      setCurrentStepCodeName("reportsUpload")
    }

    if (currentStepCodeName === "reportsUpload") {
      setCurrentStepCodeName("results")
    }

    if (currentStepCodeName === "results") {
      router.push(ROUTES.DASHBOARD.path)
    }
  }

  const handleStepChange = (newStepCodeName: StepCodeName) => {
    if (currentStepCodeName !== newStepCodeName) {
      setCurrentStepCodeName(newStepCodeName)
    }
  }

  const createHandleFileUpload = useCallback(
    (brokerage: Option) => (file: File) => {
      // TODO: Server req.
    },
    []
  )

  const steps: Steps = {
    brokeragesSelection: {
      codeName: "brokeragesSelection",
      title: "Selected your brokerages",
      subTitle: "You can select several",
      breadcrumbTitle: "Brokerages",
      Component: (
        <BrokerageSelectionArea
          selectedBrokerages={selectedBrokerages}
          setSelectedBrokerages={setSelectedBrokerages}
          disableContinueButton={setIsContinueButtonDisabled}
        />
      ),
      progressPercentage: 33,
      isActive: currentStepCodeName === "brokeragesSelection",
      isBlockedToBeFilled: false,
    },
    reportsUpload: {
      codeName: "reportsUpload",
      title: "Upload brokerage reports",
      subTitle: "Where to get brokerage reports?",
      breadcrumbTitle: "Reports",
      Component: (
        <ReportsUploadArea
          selectedBrokerages={selectedBrokerages}
          createHandleFileUpload={createHandleFileUpload}
        />
      ),
      progressPercentage: 66,
      isActive: currentStepCodeName === "reportsUpload",
      isBlockedToBeFilled: false,
    },
    results: {
      codeName: "results",
      title: "Results",
      subTitle: "Manage transactions manually",
      breadcrumbTitle: "Results",
      Component: <>results</>,
      progressPercentage: 100,
      isActive: currentStepCodeName === "results",
      isBlockedToBeFilled: true,
      blockedReasoning:
        "Please, fill choose brokerages and upload reports first.",
    },
  }

  const activeStep = steps[currentStepCodeName]

  return (
    <div className="flex flex-col items-center justify-between h-full gap-[72px]">
      <ExperienceTitle
        title={activeStep.title}
        subTitle={activeStep.subTitle}
        // subTitleLink={}
      />
      {activeStep.Component}
      <div className="flex flex-col items-center">
        {/* <HelpText helpText={} link={} /> */}
        <ActButton
          className="min-w-[413px]"
          color="primary"
          onClick={handleContinue}
          disabled={isContinueButtonDisabled}
        >
          Continue
        </ActButton>
        <BreadcrumbsStepperNavigation
          steps={steps}
          currentStepCodeName={currentStepCodeName}
          handleStepChange={handleStepChange}
        />
      </div>
      <LinearStepperProgressBar
        progressPercentage={activeStep.progressPercentage}
      />
    </div>
  )
}

export default BrokerageReportUploadStepper
