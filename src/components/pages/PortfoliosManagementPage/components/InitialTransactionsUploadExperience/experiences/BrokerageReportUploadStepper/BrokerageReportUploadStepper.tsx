import { ActButton, ExperienceTitle, LinkCustom, Option, useOpen } from "@core"
import { useRouter } from "next/navigation"
import React, { ReactNode, useCallback, useState } from "react"
import { ROUTES } from "src/routing"
import {
  BreadcrumbsStepperNavigation,
  BrokerageReportGuideModal,
  BrokerageReportsUploadResults,
  BrokerageSelectionArea,
  LinearStepperProgressBar,
  ReportsUploadArea,
} from "./components"

export type StepCodeName = "brokeragesSelection" | "reportsUpload" | "results"

type StepDetails = {
  title: string
  subTitle?: string
  subTitleLink?: ReactNode
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
  const [uploadedReports, setUploadedReports] = useState<string[]>([])
  const [isReportGuideDrawerOpen, _, setIsReportGuideDrawerOpen] = useOpen()

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
      if (!uploadedReports.includes(brokerage.value) && file) {
        const newUploadedReports = [...uploadedReports, brokerage.value]
        setUploadedReports(newUploadedReports)
      }
      // TODO: Server req.
    },
    [uploadedReports, setUploadedReports]
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
      subTitleLink: (
        <LinkCustom
          className="text-xl"
          title="Where to get brokerage reports?"
          onClick={() => setIsReportGuideDrawerOpen(true)}
        />
      ),
      breadcrumbTitle: "Reports",
      Component: (
        <ReportsUploadArea
          uploadedReports={uploadedReports}
          selectedBrokerages={selectedBrokerages}
          createHandleFileUpload={createHandleFileUpload}
          disableContinueButton={setIsContinueButtonDisabled}
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
      Component: (
        <BrokerageReportsUploadResults
          selectedBrokerages={selectedBrokerages}
        />
      ),
      progressPercentage: 100,
      isActive: currentStepCodeName === "results",
      isBlockedToBeFilled: true,
      blockedReasoning:
        "Please, fill choose brokerages and upload reports first.",
    },
  }

  const activeStep = steps[currentStepCodeName]
  const continueButtonName =
    currentStepCodeName === "results" ? "Build dashboard" : "Continue"

  return (
    <>
      <div className="flex flex-col items-center justify-between h-full gap-[72px]">
        <ExperienceTitle
          title={activeStep.title}
          subTitle={activeStep.subTitle}
          subTitleLink={activeStep.subTitleLink}
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
            {continueButtonName}
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
      <BrokerageReportGuideModal
        isOpen={isReportGuideDrawerOpen}
        setIsOpen={setIsReportGuideDrawerOpen}
        brokerages={selectedBrokerages}
      />
    </>
  )
}

export default BrokerageReportUploadStepper
