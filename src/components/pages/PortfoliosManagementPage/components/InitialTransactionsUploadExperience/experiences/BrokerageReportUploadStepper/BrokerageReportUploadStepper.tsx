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
    },
    reportsUpload: {
      codeName: "reportsUpload",
      title: "Upload brokerage reports",
      subTitle: "Where to get brokerage reports?",
      breadcrumbTitle: "Reports",
      Component: <>reportsUpload</>,
      progressPercentage: 66,
    },
    results: {
      codeName: "results",
      title: "Results",
      subTitle: "Manage transactions manually",
      breadcrumbTitle: "Results",
      Component: <>results</>,
      progressPercentage: 100,
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
      <div>
        {/* <HelpText helpText={} link={} /> */}
        <ActButton bigActButton onClick={handleContinue}>
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
