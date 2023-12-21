import React, { memo } from "react"
import { TransactionUploadExperience } from "../../types"
import { ExperienceClickablePlate } from "@core"

interface ITransactionUploadExperienceChoice {
  experiences: TransactionUploadExperience[]
}

function TransactionUploadExperienceChoice({
  experiences,
}: ITransactionUploadExperienceChoice) {
  return (
    <div className="flex items-center justify-center">
      {experiences.map(
        ({ name, title, description, icon, handleExperienceSelection }) => (
          <ExperienceClickablePlate
            key={name}
            lessVisible={name === "later"}
            title={title}
            description={description}
            icon={icon}
            onClick={handleExperienceSelection}
          />
        )
      )}
    </div>
  )
}

export default memo(TransactionUploadExperienceChoice)
