import { ActButton, ExperienceTitle } from "@core"
import { useRouter } from "next/navigation"
import React, { ReactNode, useState } from "react"
import { ROUTES } from "src/routing"
import {
  BreadcrumbsStepperNavigation,
  LinearStepperProgressBar,
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

  const steps: Steps = {
    brokeragesSelection: {
      codeName: "brokeragesSelection",
      title: "Selected your brokerages",
      subTitle: "You can select several brokerages",
      breadcrumbTitle: "Brokerages",
      Component: <>brokeragesSelection</>,
      progressPercentage: 33,
      isActive: currentStepCodeName === "brokeragesSelection",
      isBlockedToBeFilled: false,
    },
    reportsUpload: {
      codeName: "reportsUpload",
      title: "Upload brokerage reports",
      subTitle: "Where to get brokerage reports?",
      breadcrumbTitle: "Reports",
      Component: <>reportsUpload</>,
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
    <div className="flex flex-col items-center justify-between">
      <ExperienceTitle
        title={activeStep.title}
        subTitle={activeStep.subTitle}
        // subTitleLink={}
      />
      {/* {activeStep} */}
      <div className="flex flex-col items-center">
        {/* <HelpText helpText={} link={} /> */}
        <ActButton
          className="min-w-[413px]"
          color="primary"
          onClick={handleContinue}
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
