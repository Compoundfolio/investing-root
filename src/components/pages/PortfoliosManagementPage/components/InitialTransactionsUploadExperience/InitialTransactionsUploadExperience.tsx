"use client"

import { ExperienceTitle } from "@core"
import React from "react"
import { TransactionUploadExperienceChoice } from "./components"
import { useTransactionsUploadExperiences } from "./hooks"

export default function InitialTransactionsUploadExperience() {
  const {
    transactionsUploadExperiences,
    selectedTransactionsUploadExperienceName,
    ExperienceComponent,
  } = useTransactionsUploadExperiences()

  return (
    <section>
      <ExperienceTitle
        title="Selected portfolio is empty"
        subTitle="To fill it add “transactions” by choosing any option bellow"
      />
      {!selectedTransactionsUploadExperienceName ? (
        <TransactionUploadExperienceChoice
          experiences={transactionsUploadExperiences}
        />
      ) : (
        ExperienceComponent
      )}
    </section>
  )
}
