import React from "react"
import { StepCodeName, Steps } from "../../BrokerageReportUploadStepper"

interface IBreadcrumbsStepperNavigation {
  steps: Steps
  currentStepCodeName: StepCodeName
  handleStepChange: (newStepCodeName: StepCodeName) => void
}

const BreadcrumbsStepperNavigation = ({
  steps,
  currentStepCodeName,
  handleStepChange,
}: IBreadcrumbsStepperNavigation) => {
  const stepsDetails = Object.values(steps)
  return (
    <nav aria-label="Breadcrumb">
      <ol>
        {stepsDetails.map(({ breadcrumbTitle, codeName }) => (
          <li key={codeName}>
            <button onClick={() => handleStepChange(codeName)}>
              {breadcrumbTitle}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default BreadcrumbsStepperNavigation
