import React from "react"
import { StepCodeName, Steps } from "../../BrokerageReportUploadStepper"
import styles from "./BreadcrumbsStepperNavigation.module.css"
import { CollapseIcon, colors } from "@core"
import clsx from "clsx"

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
    <nav aria-label="Breadcrumb" className={styles.breadcrumbsWrap}>
      <ol className={styles.breadcrumbs}>
        {stepsDetails.map(
          (
            {
              breadcrumbTitle,
              codeName,
              isActive,
              isBlockedToBeFilled,
              blockedReasoning,
            },
            index
          ) => (
            <>
              <li key={codeName}>
                <button
                  title={blockedReasoning}
                  onClick={() => handleStepChange(codeName)}
                  className={clsx(
                    styles.breadcrumbs__item_button,
                    isActive && styles.breadcrumbs__item_button_active,
                    isBlockedToBeFilled &&
                      styles.breadcrumbs__item_button_blocked
                  )}
                  disabled={isBlockedToBeFilled}
                >
                  {breadcrumbTitle}
                </button>
              </li>
              {index + 1 !== stepsDetails.length && (
                <CollapseIcon width={16} rotateDeg="90" color={colors.gray} />
              )}
            </>
          )
        )}
      </ol>
    </nav>
  )
}

export default BreadcrumbsStepperNavigation
